const mongoose = require("mongoose");

const connectDB = async () => {

    await mongoose.connect(
        "mongodb+srv://priyanshurane09:1CGSzB2fhYknFt6c@cluster0.vzv0p.mongodb.net/devtinder"
        );
};

module.exports = connectDB;