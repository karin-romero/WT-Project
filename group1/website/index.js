const express = require("express")
var server = require("./prueba-server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
//server.use('/static', express.static('public'));
//express.static(path.join(__dirname, './public'));

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/index.html"] = requestHandlers.iniciar;
handle["/blog.html"] = requestHandlers.blog1;
handle["/gallery.html"] = requestHandlers.recomendaciones;
handle["/about_us.html"] = requestHandlers.nosotros;
handle["/contact_us.html"] = requestHandlers.contactanos;

server.iniciar(router.route, handle);
