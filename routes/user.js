var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/list', function(req, res, next) {
  res.render('list');
});

router.get('/form', function(req, res, next) {
  res.render('form');
});

module.exports = router;
