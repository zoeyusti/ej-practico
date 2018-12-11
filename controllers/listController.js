/** 
* @file Controladores o funciones que obtienen la data solicitada (req) y rutean la respuesta (res)
* 
* @requires listService
* 
* @module listController
*/

const service = require('../services/listService');
const self = {};

/** 
* @function Agrega id al usuario registrado, se agrega al archivo de texto, y en caso de estar todo correcto se redirige a la vista de la lista. Sino carga la vista de error
* 
* @param {object} req
* @param {object} res
* @param {function} next
* 
* @type {string} nombre
* @type {string} apellido
* @type {string} id
*/

self.agregar = function(req,res,next){
	req.body.id = req.body.nombre + req.body.apellido + Math.floor(Math.random() * 10001); 
	let datos = req.body;
	service.agregarUsuarios(datos);

	if(datos){
		res.redirect('/user/list');
		console.log(datos);
	}
	else{
		res.render('error', {message: "Hubo un error, intentalo más tarde"});
	}
}

/** 
* @function Carga los usuarios registrados del archivo de texto y muestra la vista de la lista. En caso de error, muestra la vista de error
* @param {object} req
* @param {object} res
* @param {function} next
* @param {object} promise
*/

self.cargar = function(req, res, next) {
    let promise = service.cargarUsuarios();
    promise.then(function(usuarios) {
        res.render('list', { usuarios });
    })
    .catch((err) => {
        err.message = "No hay usuarios registrados";
        next(err);
    });
}


module.exports = self;