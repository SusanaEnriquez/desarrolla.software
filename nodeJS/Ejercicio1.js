var FileStream = require('fs');
var http = require('http');
// FileStream.mkdirSync('carpeta'); //Crea una carpeta en la ruta del archivo

var server = http.createServer(function(request, response){
    response.write('Te conectaste!');
    response.end();
});

server.listen(678, function(){
    console.log('Se ha creado el servidor en el puerto 678');
    console.log('Para usar el servidor, haga una peticion en http://localhost:678');
});
