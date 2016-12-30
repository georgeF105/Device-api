var express = require('express');
var router = express.Router();
var debugRepo = require('../firebase/debug-repository');

/* POST action */
router.post('/', function(req, res, next) {
  console.log('body', req.body);
  debugRepo.setDebugMessage(req.body);
  res.json({message: 'HI'});
});

module.exports = router;
