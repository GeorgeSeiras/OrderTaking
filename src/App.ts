import * as express from "express";
import * as bodyParser from "body-parser";
import { order, table } from "./index";

const app = express();
const routes = require("./router")

app.use("/",routes);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('webpage'));





app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});