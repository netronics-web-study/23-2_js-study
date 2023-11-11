"use strict";

const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./routes");

// view engine setup
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));

app.use("/", home);

module.exports = app;
