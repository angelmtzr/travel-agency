const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./database');
const path = require("path");
require('colors');

// import routers
const userRoutes = require("./routes/userRoutes");
const flightRoutes = require("./routes/flightRoutes");

// config to use environment variables --> .env or in heroku config vars
dotenv.config();

// connects to the database
connectDB();

// creates an express app
const app = express();

// allows us to recieve json data --> to parse info
app.use(express.json());

// use routers in our app
app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes);

// deployment configuration
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
    });
} else {
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
}


// gets the por to run our app
// either with an environment variables or with a given port number
const PORT = process.env.PORT || 5000;


const main = async () => {
    await app.listen(PORT); // make our app listen to an specific port
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow .bold);
}

main();


