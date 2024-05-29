const TodoList = require("../models/todomodel");
const asyncHandler = require("express-async-handler");

exports.create = asyncHandler(async (req, res) => {
  const { title } = req.body;
  try {
    const Todo = await TodoList.create({
      title: title,
    });
    if (Todo) {
      res.send("success");
    } else {
      res.send("Failed");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: "an error occured " });
  }
});

exports.list = asyncHandler(async (req, res) => {
  try {
    const Todo = await TodoList.find();
    if (!Todo) {
      return res.status(400).json({ message: "Todo list not available" });
    } else {
      res.json(Todo);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "an error occured" });
  }
});

exports.edit = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const todo = await TodoList.findById(id);
    if (!todo) {
      return res.status(400).json({ message: "Updating failed" });
    }
    todo.title = title;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "An error occurred" });
  }
});

exports.delete = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await TodoList.findById(id);
    if (!todo) {
      return res.status(400).json({ message: "Not found title" });
    }
    await todo.deleteOne();
    res.json({ message: "deleted succefully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "an error occured" });
  }
});
