var querystring = require("querystring");
const http=require('http');
const url=require('url');
const fs = require("fs");
//const express = require("express");

//const app = express();
//app.get("/", express.static(path.join(__dirname, "./public")));
//app.use('/', express.static(__dirname + 'public'));
//app.use(express.static('./'));

function iniciar(response, postData) {
  console.log("Manipulador de peticion 'inicio' fue llamado.");

  contentType =  {'Content-Type': 'text/html'};
  fs.readFile("index.html", (err, data) => {
       if(err){
         response.writeHead(500, {'Content-Type': 'text/plain'});
         response.write('Error interno');
         response.end();
      }
       else {
         response.writeHead(200, {"Content-Type": "text/html"});
         response.write(data);
         response.end();
        // console.log("El contenido es: ", data);
       }
   });
}

function blog1(response, postData) {
console.log("Manipulador de peticion 'inicio' fue llamado.");

contentType =  {'Content-Type': 'text/html'};
fs.readFile("blog.html", (err, data) => {
    if(err){
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write('Error interno');
      response.end();
   }
    else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
     // console.log("El contenido es: ", data);
    }
});
}

function recomendaciones(response, postData) {
console.log("Manipulador de peticion 'inicio' fue llamado.");

contentType =  {'Content-Type': 'text/html'};
fs.readFile("gallery.html", (err, data) => {
    if(err){
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write('Error interno');
      response.end();
   }
    else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
     // console.log("El contenido es: ", data);
    }
});
}

function nosotros(response, postData) {
  console.log("Manipulador de peticion 'inicio' fue llamado.");

  contentType =  {'Content-Type': 'text/html'};
  fs.readFile("about_us.html", (err, data) => {
       if(err){
         response.writeHead(500, {'Content-Type': 'text/plain'});
         response.write('Error interno');
         response.end();
      }
       else {
         response.writeHead(200, {"Content-Type": "text/html"});
         response.write(data);
         response.end();
        // console.log("El contenido es: ", data);
       }
   });
}
   function contactanos(response, postData) {
     console.log("Manipulador de peticion 'inicio' fue llamado.");

     contentType =  {'Content-Type': 'text/html'};
     fs.readFile("contact_us.html", (err, data) => {
          if(err){
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.write('Error interno');
            response.end();
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
exports.blog1 = blog1;
exports.recomendaciones = recomendaciones;
exports.nosotros = nosotros;
exports.contactanos = contactanos;
exports.subir = subir;
