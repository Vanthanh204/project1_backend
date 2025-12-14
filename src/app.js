require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

console.log("SERVER STARTING");

// ======================
// MongoDB connect
// ======================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err.message));

// ======================
// Routes
// ======================
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// 👉 MOUNT ROUTER (QUAN TRỌNG NHẤT)
app.use("/api/todos", require("./routes/todo.routes"));

// ======================
// Start server
// ======================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
