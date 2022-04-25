const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    // lowercase: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
    // lowercase: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
    // lowercase: true,
  },
});

const Dataschema = mongoose.model("Dataschema", DataSchema);

module.exports = Dataschema
