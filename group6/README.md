# GROUP 6

Demo de un Sistema de Voto Electrónico Universitario usando TURTLE DB

[Project Brief]

[Link to the presentation]

## Members

- CRUZ OMAR
- LINDAO MARIELLA
- PITA FANNY
- TORRES DANNY


## Problem statement

La presente propuesta se realiza en base a la problemática que existe al momento de una consulta popular en una universidad de la Ciudad de Guayaquil, debido a que el estudiante debe presentarse en sitio y tradicionalmente utilizan un sistema de votación basado en papel, el estudiante subraya su opción de voto, dobla y deposita la papeleta en una urna y ahí termina su función. El estudiante no tiene forma de verificar que en el escrutinio su voto está correctamente. Por lo tanto, los estudiantes tienen que confiar en la autoridad de la elección y administradores de sistemas que actuarán honestamente cuando se publican los resultados de la elección.

## Proposal

Como propuesta presentamos un prototipo de un Sistema de Voto Electrónico, el cual permitirá que el estudiante realice su voto desde cualquier lugar donde se encuentre, y como ventaja adicional el caso de no tener internet estable, se podrá almacenar el voto OFFLINE de una manera sencilla y segura.

Bien, entonces explico cómo sería el proceso:

Ingresar autentificación: esto conlleva al ingreso del número de cédula, contraseña y número de PIN (éste código llegará al estudiante como parte de la activación de su participación para el voto). 

Registrar Voto: Una vez que ingrese se mostrará los datos completos del estudiante y seguido se mostrará la pregunta de la consulta popular la misma que tendrá cuatro opciones, SI, NO, BLANCO y  NULO,  y dará Clic en Votar.

Luego se procesará la información: en el cual verificará si existe una conexión OFFLINE, por lo que se almacenará la información temporalmente en una base interna una vez que se reestablezca la conexión mediante un proceso subirá a la base de datos principal.

Y en el caso de que esté ONLINE se almacenará la información directamente en la nube.

Finalmente el Administrador tendrá la opción de Reporte donde podrá obtener los resultados de la votación.

También se contará como una política, el Respaldo de la base de datos, por cualquier situación catastrófica que llegase a pasar.

, que el día de la consulta popular, almacenar dicho respaldo con frecuencia cada media hora en otro servidor distinto que estará ubicado en un centro de datos cercana a la universidad, para garantizar que los respaldos puedan ser usados y estén disponibles en caso desastres.







Ventajas
1.	Accesibilidad.- ejercer el derecho a votar desde cualquier lugar (casa, trabajo, universidad, etc.). Así como también favorece el voto a estudiantes en países extranjeros.
2.	Eficiencia.- Existe ahorro en recursos financieros, no es necesario imprimir papeletas de la elección y los certificados, es decir reduce el consumo de materias primas en papelería y urnas de cartón.
3.	Fiabilidad.- Facilitan el proceso electoral, ya que ofrecen datos fiables. 
4.	Precisión.- publicación de resultados rápidos en cuanto a captación de votos.
5.	Se implementa menor logística por parte de los miembros de la fuerza pública. 
6.	La carga de trabajo de los funcionarios electorales es liviana, reducen los errores humanos.
7.	El estudiante puede verificar su elección en cualquier momento. 
 Desventajas 
1.	Genera menor cantidad de empleos. 
2.	El hardware y software necesarios para su implementación son elevados, contemplando el costo total de propiedad, a lo que se debe añadir mantenimiento, licencias, soportes y capacitación. 
3.	Se requieren estar alineados a reformas legislativas. 
4.	Desconfianza del electorado para el uso de los medios electrónicos en oficios democráticos.


## References


- Contenido para usar Aplicaciones Online
[Let's Build an Offline Web App ] (https://www.youtube.com/watch?v=nAIoheQ9iy8)
[Crea_aplicaciones_web_Offline_con_Cache_de_HTML5] (https://xitrus.es/blog/97/Crea_aplicaciones_web_Offline_con_Cache_de_HTML5)
[Prueba de conexion en offline con server worker] (https://www.youtube.com/watch?v=vd_5RwnfX4M) 

- Funcionamiento de voto electronico 
[Cómo funciona el Voto Electrónico No Presencial] (https://www.youtube.com/watch?v=H7YD6W-fGfc)
[ El voto electrónico por internet] (https://www.youtube.com/watch?v=dgupZHdsBUo)

- IndexDB 
[Ver y cambiar datos indexados de DB con Chrome DevTools] ( https://developers.google.com/web/tools/chrome-devtools/storage/indexeddb)
[localStorage en HTML5. El fin de las cookies] ( https://rolandocaldas.com/html5/localstorage-en-html5) 
[IndexedDB: Tu base de datos local en HTML5] (https://rolandocaldas.com/html5/indexeddb-tu-base-de-datos-local-en-html5) 
[IndexedDB: Agregando objetos al almacén] ( https://rolandocaldas.com/html5/indexeddb)
[IndexedDB: Recuperando los datos almacenados] ( https://rolandocaldas.com/html5/indexeddb-recuperando-los-datos-almacenados)  
[Html5: Metodos de almacenamiento en cliente] (http://www.cantabriatic.com/html5-metodos-almacenamiento-cliente/)
[Descripción general del almacenamiento web] (https://developers.google.com/web/fundamentals/instant-and-offline/web-storage?hl=es)

- Seguridad en un voto electrónico
[Seguridad en voto electronico] ( https://web.mat.upc.edu/jorge.villar/esamcid/rep/evot/reportevotingse2.html
[Sistema_de_votacion_electronica_basado_en_criptografia] ( https://rua.ua.es/dspace/bitstream/10045/94728/1/Sistema_de_votacion_electronica_basado_en_criptogr_Fajardo_Juan_Antonio_Jose.pdf

- Cargar archivo JSON a PowerBI
[Exportar indexDB] ( https://www.npmjs.com/package/indexeddb-export-import