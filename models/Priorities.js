const mongoose = require("mongoose");
const Priority = mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("Priority", Priority);
