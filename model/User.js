
const mongoose = require('mongoose');
const User = require('../model/User');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        default:"normal" ,
        required: true,
        type: String,
    }

});


const User = mongoose.model("user", userSchema);

module.exports = User;
