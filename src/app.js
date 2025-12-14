require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

console.log("SERVER STARTING");

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/todos", (req, res) => {
  res.json([]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
