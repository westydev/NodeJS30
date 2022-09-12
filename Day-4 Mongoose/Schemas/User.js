const { Schema, model } = require("mongoose");

const userSchema = Schema({
    id: Number,
    username: String,
    gmail: String,
    password: String
});

module.exports = model("User", userSchema);