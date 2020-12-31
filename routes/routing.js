const express = require("express");
const cargoController = require("../controller/cargoController");

const routing = express.Router();

routing.post("/registerUser", cargoController.registerUser);
routing.post("/loginUser", cargoController.loginUser);
routing.post("/createService", cargoController.createService);
routing.get("/getAllServices", cargoController.getAllServices);
routing.get("/getAllService/:serviceId", cargoController.getServiceData);
routing.put("/updateService", cargoController.updateService);
routing.post("/bookings", cargoController.postBookings);
routing.get("/profileDetails/:emailId", cargoController.getProfile);
routing.put("/updateUser/:emailId", cargoController.updateUser);
routing.get("/bookings/:emailId", cargoController.getBookingsByUser);
routing.put("/updateBookings/:_id", cargoController.updateBookings);
routing.delete("deleteBooking/:_id", cargoController.deletebooking);
routing.post("createQuery", cargoController.createQuote);

module.exports = routing;
