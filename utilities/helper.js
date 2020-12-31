const bookings = require("../model/Bookings");

exports.generateBookingId = async () => {
  const booking = await bookings.find({});
  const Id = 7001 + booking.length;
  return Id;
};
