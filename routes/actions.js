var express = require('express');
var router = express.Router();
var debugRepo = require('../firebase/debug-repository');
var action = require('../actions/action');

var testGoodResponse = {
  speech: "Oh hey, yep sure will",
  source: "home-control",
  displayText: "Done"
};

var testBadResponse = {
  speech: "Hey fuck you",
  source: "home-control",
  displayText: "Yes, fuck you"
};

/* POST action */
router.post('/', function(req, res, next) {
  if(req.headers.key === process.env.AUTH_KEY) {
    debugRepo.setDebugMessage(req.body);    
    res.json(testGoodResponse);
  } else {
    res.status(500)
    res.json();
  }
  
});

module.exports = router;
