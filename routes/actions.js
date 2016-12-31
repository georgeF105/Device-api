var express = require('express');
var router = express.Router();
var action = require('../actions/actions');

var testGoodResponse = {
  speech: "Oh hey, yep sure will",
  source: "home-control",
  displayText: "Done"
};

/* POST action */
router.post('/', function(req, res, next) {
  if(req.headers.key === process.env.AUTH_KEY) {
    action(req);
    res.json(testGoodResponse);
  } else {
    res.status(500)
    res.json();
  }
});

module.exports = router;
