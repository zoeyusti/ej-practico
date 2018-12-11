/** 
* @file Distintas funciones que trabajan del lado del cliente
*/


/** 
* @function Muestra mensaje al hacer hover sobre el link de ping
*/

$("#pingLink").hover (function () {
    $("#pingMsg").toggle();
});



/** 
* @function Verifica que los datos ingresados sean válidos
* {@link https://jqueryvalidation.org/documentation/ documentación del plugin utilizado}
*/

//var mailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

jQuery.validator.addMethod("validarMail", function(value, element) {
  return this.optional( element ) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
}, 'Ingrese un correo electrónico válido');


$(function(){
	$('#agregarForm').validate({
		rules: {
			nombre: {
				required: true,
				minlength: 2,
				maxlength: 30
			},
			apellido: {
				required: true,
				minlength: 2,
				maxlength: 30
			},
			telefono: {
				number: true,
				minlength: 3
			},
			email: {
				required: true,
				validarMail: true
			}

		},

		messages: {
			nombre: {
				required: 'Ingrese su nombre',
				minlength: 'Su nombre debe tener al menos 2 letras',
				maxlength: 'Su nombre no puede tener más de 30 letras'
			},
			apellido: {
				required: 'Ingrese su apellido',
				minlength: 'Su apellido debe tener al menos 2 letras',
				maxlength: 'Su apellido no puede tener más de 30 letras'
			},
			telefono: {
				number: 'Ingrese números únicamente (los guiones no son necesarios)',
				minlength: 'Ingrese al menos 3 dígitos'
			},
			email: {
				required: 'Ingrese su correo electrónico',
				validarMail: 'Ingrese un correo electrónico válido'
			}
		},

		success: function(label) {
			label.addClass("valid").text("Ok!")
		},

		submitHandler: function(form) {
    		form.submit();
  		}
	});
});

/** 
* @function Filtra los usuarios según la búsqueda tipeada
* @param {string} value
*/

$(function(){
  $("#busqueda").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#verLista .aBuscar").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
