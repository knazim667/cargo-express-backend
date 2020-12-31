const mongoose = require("mongoose");

//Schema
const Schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const users = mongoose.model("users", Schema);

module.exports = users;
