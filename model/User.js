
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = require("./Song")
const Playlist = require("./Playlist")

const userSchema = new Schema({
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
        default: "ROLE_USER",
        required: true,
        type: String,
    },
    songs: [{ type: Schema.Types.ObjectId, ref: 'song' }]
});


const User = mongoose.model("user", userSchema);

module.exports = User;
