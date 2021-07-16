const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const route = require("./router/routes");
const jwt = require("jsonwebtoken");

const app = express();
const userSession = require("./models/UserSession");
app.use(cors());

const PORT = 4000;

app.use(bodyParser.json());

const dbRoute = 'mongodb://localhost:27017/Students';
mongoose.Promise = global.Promise;
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);
let db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));
db.on("error", console.error.bind(console, "Connection Error"));


app.use("/api", route);

app.listen(PORT, () => console.log("Listening on PORT 4000"));
