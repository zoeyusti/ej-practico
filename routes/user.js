/** 
* @file Ruta "/user" que renderiza formulario y lista con los datos recibidos del anterior
* 
* @requires Express
* @requires listController
* @requires express-validator
* 
* @module User
*/

var express = require('express');
var router = express.Router();

var listController = require('../controllers/listController');
const { check } = require('express-validator/check');



router.get('/form', function(req, res, next) {
  res.render('form');
});


router.get('/list', listController.cargar);

/** 
* @function No solo agregamos los usuarios a la lista, también chequeamos del lado del servidor que los datos sean válidos
* @param {string} nombre
* @param {string} apellido
* @param {string} telefono
* @param {string} email
* 
* Sabemos que son todos strings porque usamos JSON.stringify y nos ahorramos el dolor de cabeza
*/

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
