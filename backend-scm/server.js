const express = require("express");
const bodyParser = require("body-parser");
const github = require("./api/github");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const apiPrefix = "/api/scm"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`${apiPrefix}/github`, github);
app.get(`${apiPrefix}/health`, (req, res) => res.json({ msg: "Health OK" }));

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on port ${port}`));
