var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('responding');
  res.json({ title: 'My board' });
});

module.exports = router;