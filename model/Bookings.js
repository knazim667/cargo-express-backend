const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  receiverName: {
    type: String,
    required: true,
  },
  senderPhone: {
    type: Number,
    required: true,
  },
  receiverPhone: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  senderAddress: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
  },
  receiverAddress: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
  },
});

const bookings = mongoose.model("bookings", Schema);

module.exports = bookings;
