var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.index = function(req, res) {
    res.index('diamond');
};