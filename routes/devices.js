var express = require('express');
var router = express.Router();

var devices = [
  {name: 'down lights', type: 'lights', state: 'on'},
  {name: 'lounge lights', type: 'lights', state: 'off'},
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(devices);
});

module.exports = router;
