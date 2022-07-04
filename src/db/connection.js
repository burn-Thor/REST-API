require("dotenv").config();
const mongoose = require("mongoose");


//async/await because need it to wait until the server outside of our app, use for anything outside an app with javascript 
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected");
    } catch (error) {
        console.log(error)
    }
};

connection();