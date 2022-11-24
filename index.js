var express = require("express")
const ytdl = require('ytdl-core');
var app = express();
app.get("/d", (req, res) => {
var { url } = req.query;
ytdl(url).pipe(res);
});
app.listen(8080);