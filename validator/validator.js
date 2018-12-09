const { check } = require('express-validator/check');

//var mailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var validatorCheck = [
	check('nombre').isLength({min: 2}).withMessage('Debe tener al menos 2 letras'),
	check('nombre').isLength({max: 30}).withMessage('Debe tener como mucho 30 letras'),
	check('apellido').isLength({min: 2}).withMessage('Debe tener al menos 2 letras'),
	check('apellido').isLength({max: 30}).withMessage('Debe tener como mucho 30 letras'),
	check('telefono').isNumeric().withMessage('Debe ser un número'),
	check('telefono').isLength({min: 2}).withMessage('Debe tener al menos 3 dígitos'),
	check('email').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).withMessage('Debe ser un correo electrónico válido')
];

module.exports = {validatorCheck};