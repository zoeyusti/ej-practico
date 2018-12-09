var fs = require('fs');

const service = {};



service.agregarUsuarios = function(datos){
	fs.appendFile('datos.txt', JSON.stringify(datos) +'\n', function(err){
		if (err){
			console.log(err);
		}
	});
	//console.log('probando');
}

service.cargarUsuarios = () => new Promise(function(resolve, reject) {
    fs.readFile('datos.txt', 'utf-8', function(err, data) {
        if(err) {
        	return reject(err);
        }else{
        console.log("promise service data"+data);
        resolve(data.split("\n").filter(string => string).map(JSON.parse));
       }
    });
    
});

module.exports = service;