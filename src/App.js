"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var routes = require("./router");
app.use("/", routes);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('webpage'));
app.get("/", function (req, res) {
    return res.redirect("/tables");
});
app.listen(3000, function () {
    console.log("Server is listening on port 3000");
});
