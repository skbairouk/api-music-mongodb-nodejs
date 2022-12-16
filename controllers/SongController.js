const Song = require("../model/Song");
const User = require("../model/User");
const songRouter = require("../routes/Song");
const userRouter = require("../routes/user");

exports.getAllSongs = (req, response, next) => {
    try {
        Song.find({}, (error, results) => {
            if (error) {
                console.error(error);
                response.send(error);
                return;
            }
            response.send(results);
        });
    } catch (error) {
        next(error);
    }
}

exports.getSongById = (req, res, next) => {
    try {
        Song.findById(req.params.id, (err, song) => {
            if (err) console.error(err)
            res.send(song)
        })

    } catch (err) {
        next(err);
    }
}




exports.addSong = (req, res, next) => {
    try {
        User.findById(req.body.artist, (err, user) => {
            if (err) {
                console.error(err)
                res.send("Artist not found")
                return;
            }
            if (user.role == "artist") {
                const newSong = new Song(req.body);
                newSong.save((err, song) => {
                    if (err) {
                        console.error(err)
                        res.send("Error during save song")
                        return;
                    }
                    // je dois save idSong dans user songlist
                    user.songs.push(song);
                    user.save((err, song) => {
                        if (err) {
                            console.error(err)
                            res.send("song not attached to user")
                            return;
                        };
                        res.send({ message: "song created !!", song })
                    });
                });
            } res.send("user is not an artist")

        });
    } catch (error) {
        next(error);
    }
};

exports.updateSong = (req, res, next) => {
    try {
        const song = Song.findById({ _id: req.params.id }, (error, song) => {
            if (error) console.log(error);
            // prevent update song for different Artist
            if (req.body.artist !== ("" + song.artist)) {
                res.status(403).json({ "error": "Couldn't update Song" })
                return;
            }
            song = Object.assign(song, req.body).save((error, songUpdated) => {
                if (error) console.error(error);
                res.json(songUpdated);
            })

        });
    } catch (error) {
        next(error);
    }
};




exports.deleteSong = (req, res, next) => {
    try {
        Song.remove({ _id: req.params.id }, (err) => {
            if (err) console.error(err)
            res.send('song deleted !')
        })


    } catch (err) {
        next(err);
    }
};