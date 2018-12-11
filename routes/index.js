/** 
* @file Ruta "/" que renderiza el index, página de inicio o Home page
* 
* @requires Express
* 
* @module Index
*/

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: '¡Bienvenidos!' });
});

module.exports = router;
