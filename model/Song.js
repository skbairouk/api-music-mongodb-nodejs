
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: String,
    url: String,
    rating: Number,
    artist: { type: Schema.Types.ObjectId, ref: 'User' },
    playLists: [{type: Schema.Types.ObjectId, ref: 'Song'}]



});

const Song = mongoose.model("song", songSchema);

module.exports = Song;
