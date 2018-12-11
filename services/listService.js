/**
* @file Métodos o funciones para agregar y cargar a los usuarios
* 
* @requires fs (file system)
* 
* @module listService
*/

var fs = require('fs');

const service = {};


/** 
* @function Agrega los datos recibidos del usuario a un archivo de texto
* @async
* @param {object} datos
* @returns {string}
*/

service.agregarUsuarios = function(datos){
	fs.appendFile('datos.txt', JSON.stringify(datos) +'\n', function(err){
		if (err){
			console.log(err);
		}
	});
}

/** 
* @function Carga los usuarios desde un archivo de texto
* @async
* @callback resolve
* @callback reject
* @returns {object}
*/

service.cargarUsuarios = () => new Promise(function(resolve, reject) {
    fs.readFile('datos.txt', 'utf-8', function(err, data) {
        if(err) {
        	return reject(err);
        }else{
        //console.log("promise service data"+data);
        resolve(data.split("\n").filter(string => string).map(JSON.parse));
       }
    });
    
});



module.exports = service;