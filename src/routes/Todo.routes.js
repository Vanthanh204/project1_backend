const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.json(todo);
});

module.exports = router;
