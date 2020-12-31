const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  fromLocation: {
    type: String,
    required: true,
  },
  toLocation: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  parcelDimension: {
    length: {
      type: String,
      required: true,
    },
    breadth: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
});

const quotes = mongoose.model("quotes", Schema);

module.exports = quotes;
