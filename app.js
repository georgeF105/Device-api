var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var devices = require('./routes/devices');
var actions = require('./routes/actions');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/devices', devices);
app.use('/api/v1/actions', actions);

module.exports = app;
