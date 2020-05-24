var querystring = require("querystring");
const fs = require("fs");

function iniciar(response, postData) {
  console.log("Manipulador de peticion 'inicio' fue llamado.");

  contentType =  {'Content-Type': 'text/html'};
  fs.readFile("../index.html", (err, data) => {
       if(err){
         respuesta.writeHead(500, {'Content-Type': 'text/plain'});
         respuesta.write('Error interno');
         respuesta.end();
      }
       else {
         response.writeHead(200, {"Content-Type": "text/html"});
         response.write(data);
         response.end();
        // console.log("El contenido es: ", data);
       }
   });
  

}

function subir(response, dataPosteada) {
    console.log("Manipulador de peticion 'subir' fue llamado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Tu enviaste el texto: : " +
    querystring.parse(dataPosteada)["text"]);
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
