
const mongoose = require('mongoose');
const User = require('../model/User');
const Song = require('../model/Song');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name:String,
    songs: [{type: Schema.Types.ObjectId, ref: 'Song'}],
    user: {type: Schema.Types.ObjectId, ref: 'User'},

});

const Playlist = mongoose.model("playlist", playlistSchema);

module.exports = Playlist;
