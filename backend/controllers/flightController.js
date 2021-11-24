const flightController = {};

const Flight = require("../models/flightModel");

flightController.getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

flightController.bookFlight = async (req, res) => {
  try {
    const { origin, destination, price, airline, time, user, date } = req.body;
    const newFlight = new Flight({
      origin,
      destination,
      price,
      airline,
      time,
      user,
      date,
    });
    await newFlight.save();
    res.json("Flight Booked");
  } catch (e) {
    console.log(e);
    res.json(e.errmsg);
  }
};

flightController.unbookFlight = async (req, res) => {
  try {
    const { id } = req.params;
    await Flight.findByIdAndDelete(id);
    res.json("Flight Deleted");
  } catch (e) {
    console.log(e);
    res.json(e.errmsg);
  }
};

module.exports = flightController;
