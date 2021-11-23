const express = require("express");
const router = express.Router();
const { 
    getFlights, 
    bookFlight, 
    unbookFlight 
} = require('../controllers/flightController');

router.route("/")
    .get(getFlights)
    .post(bookFlight);

router.route("/:id")
    .delete(unbookFlight);

module.exports = router;