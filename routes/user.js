var express = require('express');
var router = express.Router();

var listController = require('../controllers/listController');
const { check } = require('express-validator/check');



router.get('/list', listController.cargar);/*function(req, res, next) {
  res.render('list');
});*/


router.get('/form', function(req, res, next) {
  res.render('form');
});


router.post('/', listController.agregar,[
	check('nombre').isLength({min: 2}).withMessage('Debe tener al menos 2 letras'),
	check('nombre').isLength({max: 30}).withMessage('Debe tener como mucho 30 letras'),
	check('apellido').isLength({min: 2}).withMessage('Debe tener al menos 2 letras'),
	check('apellido').isLength({max: 30}).withMessage('Debe tener como mucho 30 letras'),
	check('telefono').isNumeric().withMessage('Debe ser un número'),
	check('telefono').isLength({min: 2}).withMessage('Debe tener al menos 3 dígitos'),
	check('email').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).withMessage('Debe ser un correo electrónico válido')
]);

module.exports = router;
