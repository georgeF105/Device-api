var express = require('express');
var router = express.Router();
var debugRepo = require('../firebase/debug-repository');

var testGoodResponse = {
  fulfillment : {
    speech: "Oh hey, yep sure will",
    source: "home-control",
    displayText: "Done"
  }
};

var testBadResponse = {
  fulfillment : {
    speech: "Hey fuck you",
    source: "home-control",
    displayText: "Yes, fuck you"
  }
};

/* POST action */
router.post('/', function(req, res, next) {
  // console.log('body', req);
  debugRepo.setDebugMessage(req.body);
  if(req.headers.key === 'xyzabc') {
    res.json(testGoodResponse);
  } else {
    res.json(testBadResponse);
  }
  
});

module.exports = router;
