const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET: lấy tất cả todo
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: thêm todo mới
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

module.exports = router;
