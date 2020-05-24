# GROUP [5]


## Prototipo de aplicación web para recopilar ofertas de trabajo de diferentes portales de empleo

##### BRIEF
> Desarrollo de prototipo de aplicación web para recopilar ofertas de trabajo publicados en diferentes
portales de empleo mediante la tecnica de Web Scrapping implementando DJango, SQLite y la plataforma de Heroku.

[Link to the presentation]

## Members

 - Lucy Caregua Alvario
 - Diego Faría
 - Jesús Jácome
 - Juan Carlos Sellán
 - Andres Macancela



## Problem statement

Existen varios portales web para la consulta de ofertas de trabajos, en los cuales la persona interesada accede, y de este modo permanece informado sobre las nuevas plazas laborales, sin embargo; esta acción es manual y debe ser constante, no existe una automatización que reuna las recientes publicaciones en los diferentes portales para que puedan ser visualizadas en una misma pantalla de consulta.
 Con este antecede se plantea el desarrollo de una interfaz web, que permita consolidar ofertas de trabajos 
publicados en varios portales conocidos a nivel nacional,  ordenados por fechas,  desde las más recientes,a fin de brindar al interesado facilidad en la busqueda.


## Proposal


En el siguiente grafico se describe la aplicacion de la tecnica web scraping para obtener las ofertas de trabajos publicados en diferentes sitios web, para lo cual intervienen las siguientes componentes:

![image](https://user-images.githubusercontent.com/65081413/82743070-690f8200-9d2b-11ea-9a2f-8b0f55d021a7.png)


### 1. Tecnica WEB Scraping
Web scraping, también conocido como extracción de datos web, es una técnica para la extracción dirigida y automatizada de información de sitios web, además puede ayudar a archivar datos y rastrear cambios en línea. El raspado web utiliza la automatización inteligente para recuperar cientos y millones de puntos de datos de la Internet, así mismo permite adquirir datos no tabulares o mal estructurados de sitios web y convertirlos a un formato estructurado y utilizable, como un archivo .csv u hoja de cálculo.

Web scraping funciona mediante dos partes: un rastreador web y un raspador web. El rastreador conduce el raspador, como si fuera a mano, a través de Internet, donde extrae los datos solicitados. 

**El rastreador:**
Es una inteligencia artificial que navega por Internet para indexar y buscar contenido siguiendo enlaces y explorando

**El raspador:**
Es una herramienta especializada diseñada para extraer datos de forma precisa y rápida de una página web. Los raspadores web varían ampliamente en diseño y complejidad, dependiendo del proyecto.


### 2. DJango
Django  es un framework de aplicaciones web gratuito y de código abierto (open source) escrito en Python. 

### 3. Heroku
Heroku es una plataforma como servicio de computación en la Nube que se especializa en ofrecer servicios de plataforma administrada, en donde se pueden alojar aplicaciones desarrolladas en diferentes lenguajes de programación como Java, Node.js, Scala, Clojure y Python y (no documentado) PHP. Su base del sistema operativo es Debian o, en la nueva plataforma, el sistema basado en Debian Ubuntu.
Heroku maneja contenedores Linux (Ubuntu) los cuales son llamados “dynos”, estos son utilizados para albergar las aplicaciones web, webservices o aplicaciones que se ejecutan del lado del servidor, así mismo cuenta con la posibilidad de instalar add-ons para agregar funcionalidades a dichos contenedores, por ejemplo, se pueden agregar servicios administrados de base de datos, almacenamiento en la nube o mensajería(MQ).

**Características Principales** 
*	Elasticidad y crecimiento. Se puede cambiar en cualquier momento la cantidad de Dynos asignados a una aplicación a través de la línea de comandos o el dashboard.
*	Tamaño. Heroku ofrece diferentes tipos de dynos, cada uno con diferentes capacidades de procesamiento y memoria.
*	Seguimiento. Existe un manejador de Dynos, el cual continuamente monitorea los dynos que están en ejecución, en caso de que uno falle es eliminado y creado nuevamente.
*	Distribución y redundancia. Los Dynos se encuentran aislados uno de otro. Esto implica que de existir fallos en la infraestructura interna de alguno de ellos, los otros dynos no se ven afectados, y consecuentemente tampoco la aplicación.

![image](https://user-images.githubusercontent.com/65081413/82743222-0370c500-9d2e-11ea-83df-8bca4edec463.png)

Del lado de cliente por medio de su navegador se accedera al sitio web el cual contrara con un buscador y presentara un dashboard para la visualizacion de las ofertas de trabajos obtenidas con la tecnica del web scraping. 

### Power Bi
Power BI es la herramienta de business intelligence o inteligencia de negocio de Microsoft. Proporciona un análisis en profundidad y tiempo real de los datos de negocio, convirtiéndolos en información de valor que ayuda a tomar las mejores decisiones empresariales.

* Power BI es una herramienta intuitiva y fácil de utilizar, porque permite crear informes y paneles básicos sin conocimientos técnicos, sobre todo en la versión Desktop

* Power BI permite hacer múltiples análisis complejos en un solo panel, con una visualización única muy atractiva.


## Proof of concept (DEMO)

[Screenshopt of the demos + brief description ]


## References

[Optional]
