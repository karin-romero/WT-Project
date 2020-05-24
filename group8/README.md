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



## Proof of concept (DEMO)

[Screenshopt of the demos + brief description ]


## References

MONDAQ, “Ecuador: Medidas para atenuar los efectos laborales del COVID-19,” 2020. [Online]. Available: https://www.mondaq.com/employment-and-workforce-wellbeing/922928/medidas-para-atenuar-los-efectos-laborales-del-covid-19.

P. ECONOMICA, “Con $3526 millones en pérdidas, el sector comercial pide vender a domicilio para tener liquidez,” 19 DE ABRIL, 2020. [Online]. Available: https://www.eluniverso.com/noticias/2020/04/19/nota/7817160/perdidas-sector-comercial-3526-millones-ventas-servicio-domicilio.

