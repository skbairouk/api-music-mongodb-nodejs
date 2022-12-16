const playlistRouter = require('express').Router();

const playlistController = require("../controllers/playlistController");




playlistRouter.get('/', playlistController.getPlaylists);
playlistRouter.post('/add', playlistController.addPlaylist);




module.exports = playlistRouter;