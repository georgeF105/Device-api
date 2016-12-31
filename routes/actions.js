var express = require('express');
var router = express.Router();
var action = require('../actions/actions');

var happyResponse = {
  speech: "Oh hey, yep sure will",
  source: "home-control",
  displayText: "Done"
};

var unHappyResponse = {
  speech: "something went wrong",
  source: "home-control",
  displayText: "ERROR"
};

/* POST action */
router.post('/', function(req, res, next) {
  if(req.headers.key === process.env.AUTH_KEY) {
    action(req)
    .then(response => {
      happyResponse.speech = response;
      res.json(happyResponse);
    })
    .catch(error => {
      console.error('error', error);
      unHappyResponse.speech = error;
      res.json(unHappyResponse);
    })
    
  } else {
    res.status(500)
    res.json();
  }
});

module.exports = router;
