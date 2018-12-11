Requerimos que se construya una aplicación cliente/servidor con ExpressJs con los siguientes requerimientos:

- Atienda a la ruta “/ping” y devuelva la palabra “pong”
- Al ingresar a la ruta “/user/form” (raíz) renderice un formulario con los siguientes datos:
- Nombre (Máximo 30 caracteres)
- Apellido (Máximo 30 caracteres)
- Teléfono (Solo números)
- Email (Formato válido usando regular expressions)
- Que al hacer submit envíe esos datos por método POST a la ruta “/user” (raíz), los guarde/agregue en un archivo y haga una redirección a la ruta “/user/list”. Agregar validación tanto del lado del servidor como del cliente, en base a la información asociada a cada campo.
- Del lado del servidor, al recibir el post, escribir la información validada en un archivo.
- Al ingresar a la ruta “/user/list” renderice un listado con los datos que pedimos en el paso anterior, levantando la información del archivo generado, usando algún template engine. La información deberá ser mostrada en una tabla filtrable y con campo de búsqueda como la de bootstrap.

        Documentar la solución utilizando http://usejsdoc.org/

        Subir el código a un repositorio de github

Adicionales no mandatorios
- Se valorará contar con test de la aplicación, preferentemente unitarios.
- Se valorará contar con acciones en la tabla, como por ejemplo poder eliminar al usuario o editarlo.


        npm run doc
        npm test (es posible que se necesite el sudo)


