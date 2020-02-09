const express = require('express');
const joi = require('joi');
const router = express.Router();
const Todo = require('../models/Todo');
router.use(express.json());

// get all the todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// get specific todo
router.get('/:id', async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id);
    res.json(todos);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// add new todo
router.post('/', async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      createdTime: req.body.createdTime,
      tags: req.body.tags,
      tasks: req.body.tasks
    });
    const { error } = validateTodo(req.body);
    if (error) {
      // 400 bad request
      res.status(400).send(error.details);
      return;
    }
    try {
      const savedTodo = await todo.save();
      res.json(savedTodo);
    } catch (err) {
      res.json({ message: err.message });
    }
  } catch (err) {
    res.json({
      message: err.message
    });
  }
});

// delete todo
router.delete('/:id', async (req, res) => {
  try {
    const removedTodo = await Todo.remove({ _id: req.params.id });
    res.status(200).json(removedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// update todo
router.patch('/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          createdTime: req.body.createdTime,
          category: req.body.category,
          tasks: req.body.tasks
        }
      }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
});

function validateTodo(todo) {
  const taskListItem = joi
    .object({ title: joi.string().required() })
    .unknown(true)
    .required();
  const schema = joi
    .object()
    .keys({
      title: joi.string().required(),
      tasks: joi.array().items(taskListItem)
    })
    .unknown(true);
  return joi.validate(todo, schema);
}

module.exports = router;
