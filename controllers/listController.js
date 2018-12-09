const service = require('../services/listService');
var fs = require('fs');
const self = {};


self.agregar = function(req,res,next){
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