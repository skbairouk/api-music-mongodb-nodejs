const express = require('express');
const userRouter = require("./routes/user");
const songRouter = require("./routes/Song");
const playlistRouter = require("./routes/playlistRouter");
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/musicdb");
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})


database.once('connected', () => {
    console.log('Database Connected');
})


app.get("/", (req, res) => {
    res.send("Bienvenue sur notre API")
});

app.use("/api/v1/music/users", userRouter);
app.use("/api/v1/music/songs", songRouter);
app.use("/api/v1/music/playlists", playlistRouter);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})