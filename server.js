/**
 * Created by pes on 28.09.15.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose;
var express;
mongoose = require("./config/mongoose");
express = require("./config/express");

var app = express();

app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');