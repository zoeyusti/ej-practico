/** 
* @file Ruta "/ping" que devuelve "Pong"
* @requires Express
* @module Ping
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Pong');
});

module.exports = router;
