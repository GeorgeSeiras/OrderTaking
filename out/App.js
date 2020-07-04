"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./router");
app.use("/", routes);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('webpage'));
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
//# sourceMappingURL=App.js.map