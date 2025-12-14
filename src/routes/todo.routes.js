const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET /api/todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos); // ← PHẢI là array
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/todos
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const todo = new Todo({ title });
    await todo.save();

    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// DELETE /api/todos/:id
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
