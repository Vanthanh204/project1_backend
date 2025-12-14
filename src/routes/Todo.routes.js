const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST new todo
router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
});

module.exports = router;
