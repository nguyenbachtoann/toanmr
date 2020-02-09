const mongoose = require("mongoose");
const Priority = require("./Priorities").schema;
const Task = mongoose.Schema({
  id: Number,
  title: {
    type: String,
    required: true
  },
  priority: {
    type: Priority,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", Task);
