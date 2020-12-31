const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  serviceId: {
    type: Number,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  parcelSize: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  parcelCharges: {
    type: String,
    required: true,
  },
});

const services = mongoose.model("services", Schema);

module.exports = services;
