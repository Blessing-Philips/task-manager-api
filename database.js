const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/todo-app')
    .then(() => console.log("Successfully connected todatabase!"))
    .catch(err => {
        console.error("Error conecting to database", err.message)
    });

const db =  mongoose.connection;

module.exports = db;