
const mongoose = require('mongoose');
const User = require('../model/User');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: String,
    url: String,
    rating: Number,
    artist: { type: Schema.Types.ObjectId, ref: 'User' }


});

const Song = mongoose.model("song", songSchema);

module.exports = Song;
