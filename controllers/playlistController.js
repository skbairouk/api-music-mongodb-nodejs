const PlayList = require("../model/Playlist");
const playlistRouter = require("../routes/user");

exports.getPlaylists = (req, response, next) => {
    try {
        PlayList.find({}, (error, results) => {
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

exports.getPlaylistById = (req, response, next) => {
    try {
        PlayList.findById(req.params.id, (error, results) => {
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

exports.addPlaylist = (req, res, next) => {
    try {
        let pl = new PlayList(req.body);

        pl.save((err, pl) => {
            if (err) console.error(err);
            res.send({ message: "playlist created !!", pl })
        })

    } catch (error) {
        next(error);
    }
};