const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./database');
const colors = require('colors');
const path = require("path");

// import routes
const userRoutes = require("./routes/userRoutes");
const flightRoutes = require("./routes/flightRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/flights", flightRoutes);

// --------------------------deployment------------------------------
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    });
} else {
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
}
// --------------------------deployment------------------------------

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
            .bold
    )
);
