const User = require("../model/User");
const PlayList = require("../model/Playlist");
const userRouter = require("../routes/user");

exports.getAllUsers = (req, response, next) => {
    try {
        User.find({}, (error, results) => {
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

exports.getUserById = (req, res, next) => {
    try {
        User.findById(req.params.id, (err, user) => {
            if (err) console.error(err)
            res.send(user)
        })

    } catch (err) {
        next(err);
    }
}




exports.addUser = (req, res, next) => {
    try {
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) console.error(err);
            res.send({ message: "user created !!", user })
        })
    } catch (error) {
        next(error);
    }
};


exports.updateUser = (req, res, next) => {
    try {
        const user = User.findById({ _id: req.params.id }, (error, user) => {
            if (error) console.log(error);
            Object.assign(user, req.body).save((error, data) => {
                if (error) console.error(error);
                res.send({ message: "user updated !!", user })
            })

        });
    } catch (error) {
        next(error);
    }

}
exports.deleteUser = (req, res, next) => {
    try {
        User.remove({ _id: req.params.id }, (err) => {
            if (err) console.error(err)
            res.send('user deleted !')
        })


    } catch (err) {
        next(err);
    }
};







exports.getPlaylistForUser = (req, res, next) => {
    try {
        User.findById(req.params.userId, (err, user) => {
            if (err) console.error(err)

            PlayList.find({ user: req.params.userId },
                (err, playlist) => {
                    if (err) {
                        console.error(err); 
                        response.send(err);
                        return;
                    }
                    res.send(playlist);
                }
            )
        })
    } catch (err) {
        next(err);
    }
}