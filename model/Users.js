const mongoose = require("mongoose");

//Schema
const Schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  bookingId: [],
});

const users = mongoose.model("users", Schema);

module.exports = users;
