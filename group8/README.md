# GROUP 8

![covid](https://user-images.githubusercontent.com/65081905/82744471-9e719b00-9d3e-11ea-9a67-ff243e0cdbd9.JPG)


El propósito de este portal es dar una herramienta al departamento médico de la empresa para que cuando detecte una persona que sea Covid 19 positivo pueda ubicar las personas con las que tuvo contacto en un periodo de tiempo y así puedan ejecutar medidas preventivas y evitar que se generen nuevos contagios.

[Link to the presentation] 

## Members

 - Mishell Ortiz.
 - Isabel Chilan.
 - Alexandra Santana.
 - Karen Chiquito.
 - Guillermo Sancan.


## Problem statement

Departamento Medico de prestigiosa Institucion Financiera busca llevar un control por medio de un portal Web, en el cual podran llevar un registro de todos los colaboradores, para con esto disminuir los posibles contagios por Covid 19 a traves de buenas practicas de bioseguridad que permitan la reinsercion laboral y con esto mitigar las perdidas economicas en las que muchas empresas se han visto afectadas.

Este control se lo llevara a cabo por medio de una alerta que llegara al departamento de talento humano de la Institución quienes serán los encargados de procesar y administrar por medio de una ficha tecnica si el colaborador está o no contagiado, enviarlo a cuarentena y  dar un seguimiento a su mejora en salud y con quienes estuvo en contacto para su inmediato aislamiento y con ello evitar la propagación.


## Proposal

A continuacion tenemos la arquitectura el proceso inicia cuando a la Doctora de la institucion le llega un correo en el cual le notifica el empleado que tiene los sintomas del covid. 
La doctora a traves de la pagina web ingresa el nombre del empleado que tiene los sintomas del covid, este envia una solicitud (un Http Get Request) al Web Services, el cual realiza un Request Data con el Sever de la Aplicacion Web, 
la informacion del empleado es obtenida de la Base de Datos. La Base de Datos contiene informacion acerca del empleado y los incidentes que han sido atentidos por el empleado que corresponde al departamento tecnico, 
además de los turnos en la cafeteria. La data es enviada al Web Application el cual interactua con el Web Server, el Web Server realiza un Http Get Response hacia el Cliente, y le devuelve los siguientes datos: 
Nombre del Usuario, Correo, extension y fecha de registro, con esta informacion la doctora conocera aquellas personas con las cuales estuvo el empleado.

![ArquitecturaProyecto](https://user-images.githubusercontent.com/65082504/82746779-48f6b780-9d59-11ea-86ce-0dbdf06fc2c5.PNG)

Se empleara la integración del framework Bootstrap con MVC (Modelo Vista Controlador), debido a que ahorra tiempo en la etapa de diseño de una página web, con este framework todo se hace rapido y sencillo a la hora de crear una pagina web. 
Cuando creamos nuestras vistas mediante MVC va a ser mucho mas sencillo debido a que existen plantillas predeterminadas a la hora de actualizar, listar o borrar elementos desde nuestra base de datos.
Se ahorrara tiempo debido a que se dispone de fondos, cuadriculas y varios elementos de estilo html y css listos para emplear formularios, tablas, iconos o botones, es decir brinda muchos complementos para crear una pagina profesional. 
Es responsive lo cual lo hace adaptable para los moviles. Ayuda a mejorar la experiencia del usuario. Es flexible y tiene baja complejidad de implementacion.



## Proof of concept (DEMO)

1. Portal Web donde se va ingresar el nombre del empleado en este caso que se encuentra contagiado, para asi verificar con cuantas personas estuvo en contacto
Ingresara el nombre, apellido, fecha de inicio y fin; es decir un periodo de catorce días considerando (ese tiempo será definido por la empresa pero para efectos de la demostración se considero ese periodo).

![Captura](https://user-images.githubusercontent.com/65081905/82746431-2cf11700-9d55-11ea-8b67-4b93efc86c97.JPG)


2. Luego el usuario es decir el medico de turno en del departamento medico procedera a dar click en el boton buscar, en donde podra presenciar un reporte detallando las personas conquien estuvo en contacto la persona actualmente contagiada.

![Captura1](https://user-images.githubusercontent.com/65081905/82746463-c4566a00-9d55-11ea-8396-d7d6fae20d01.JPG)

3. Si el usuario en este caso el medico de turno en del departamento medico desea descargar el reporte, se puede presenciar las opciones como: PDF, COPY, EXCEL, PRINT.

Para esta demostracion se la realizo en PDF.

![Captura2](https://user-images.githubusercontent.com/65081905/82746530-5a8a9000-9d56-11ea-99d9-1c788fc51005.JPG)
 
## References

MONDAQ, “Ecuador: Medidas para atenuar los efectos laborales del COVID-19,” 2020. [Online]. Available: https://www.mondaq.com/employment-and-workforce-wellbeing/922928/medidas-para-atenuar-los-efectos-laborales-del-covid-19.

P. ECONOMICA, “Con $3526 millones en pérdidas, el sector comercial pide vender a domicilio para tener liquidez,” 19 DE ABRIL, 2020. [Online]. Available: https://www.eluniverso.com/noticias/2020/04/19/nota/7817160/perdidas-sector-comercial-3526-millones-ventas-servicio-domicilio.

