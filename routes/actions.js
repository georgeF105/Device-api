var express = require('express');
var router = express.Router();

/* POST action */
router.post('/', function(req, res, next) {
  console.log('body', req.body);
  res.json({message: 'HI'});
});

module.exports = router;
