const mongoose = require("mongoose");
const Tags = mongoose.Schema({
  id: Number,
  name: {
    type: String,
    require: true
  },
  color: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Tags", Tags);
