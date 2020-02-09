const mongoose = require("mongoose");
const Tasks = require("./Tasks").schema;
const Tags = require("./Tags").schema;
const Todo = mongoose.Schema({
  id: Number,
  title: {
    type: String,
    required: true
  },
  description: String,
  createdTime: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: [Tags],
    required: false
  },
  tasks: {
    type: [Tasks],
    required: true
  }
});

module.exports = mongoose.model("Todo", Todo);
