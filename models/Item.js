const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({

  username: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model("items", ItemSchema);
