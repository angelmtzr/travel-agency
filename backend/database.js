const mongoose = require('mongoose');
require('colors');

const connectDB = async () => {
    try {
        const URI = process.env.MONGODB_URI || 
            "mongodb://localhost/databaseTest";
        const conn = await mongoose.connect(URI, { useNewUrlParser: true });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;