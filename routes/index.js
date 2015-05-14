var express = require('express');
var router = express.Router();
var sfx = require("sfx");

/* GET home page. */
router.get('/', function(req, res, next) {
  sfx.play("/System/Library/Sounds/Ping.aiff");
  res.render('index', { title: 'Express' });
});

module.exports = router;
