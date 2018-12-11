import test from 'ava';

const service = require('../services/listService');
var fs = require('fs');
const path = 'datosEj.txt';



test('prueba agregar y cargar', async t=>{
	var random = Math.floor(Math.random() * 10001);

	let nom = Math.random().toString(36).substring(7);
	let ape = Math.random().toString(36).substring(7);
	let ranId = nom + ape + random; 

	var otroUsuario = {nombre: nom, apellido: ape, telefono:'789', email: 'fulanodetal@gmail.com', id: ranId};
	var usuarios = await service.agregarUsuarios(otroUsuario);
	var usuarios2 = await service.cargarUsuarios();
	var ultimaUbicacion = usuarios2.length -1;
	var ultimo = usuarios2[ultimaUbicacion];
	t.deepEqual(ultimo, otroUsuario);
	console.log("ultimo");
	console.log(ultimo);
	console.log("otroUsuario");
	console.log(otroUsuario);

})