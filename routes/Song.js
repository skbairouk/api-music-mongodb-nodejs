const songRouter = require('express').Router();

const songController = require("../controllers/SongController");




songRouter.get('/', songController.getAllSongs);

songRouter.post("/add", songController.addSong);

songRouter.get("/:id", songController.getSongById);

songRouter.delete("/delete/:id", songController.deleteSong);

songRouter.put("/update/:id", songController.updateSong);



module.exports = songRouter;