const mongoose = require("mongoose");
const schema = mongoose.Schema;

const User = new schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    runtime: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Users", User)
