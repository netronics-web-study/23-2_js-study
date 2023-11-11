"use strict";

const { log } = require("async");

const hello = (req, res) => {
    res.render("index");
};

const login = (req, res) => {
    res.render("login");
};

module.exports = {
    hello,
    login,
};

// { key : value } 형태의 object
// => {
//     hello: hello
//     login:login
//     }
