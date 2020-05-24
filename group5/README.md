# GROUP [5]


## Prototipo de aplicación web para recopilar ofertas de trabajo de diferentes portales de empleo

##### BRIEF
> Desarrollo de prototipo de aplicación web para recopilar ofertas de trabajo publicados en diferentes
portales de empleo mediante la tecnica de Web Scraping y que posterior permita a la persona interesada ingresar al sitio web para consultar la informacion obtenida mediante busqueda semantica para dar el mejor resultado.

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
publicados en varios portales conocidos a nivel nacional mediante la tecnica de Web Scraping con DJango y que posterior permita a la persona interesada ingresar al sitio web para consultar la informacion obtenida mediante busqueda semántica para dar el mejor resultado.


## Proposal


En el siguiente gráfico se describe la aplicacion de la tecnica web scraping para obtener las ofertas de trabajos publicados en diferentes sitios web, para lo cual intervienen las siguientes componentes:

![image](https://user-images.githubusercontent.com/65081413/82743070-690f8200-9d2b-11ea-9a2f-8b0f55d021a7.png)


### 1. Tecnica WEB Scraping
Web scraping, también conocido como extracción de datos web, es una técnica para la extracción dirigida y automatizada de información de sitios web, además puede ayudar a archivar datos y rastrear cambios en línea. El scraping web utiliza la automatización inteligente para recuperar cientos y millones de puntos de datos de la Internet, así mismo permite adquirir datos no tabulares o mal estructurados de sitios web y convertirlos a un formato estructurado y utilizable, como un archivo .csv u hoja de cálculo.

Web scraping funciona mediante dos partes: un rastreador web y un raspador web. El rastreador conduce el raspador, como si fuera a mano, a través de Internet, donde extrae los datos solicitados. 

**El rastreador:**
Es una inteligencia artificial que navega por Internet para indexar y buscar contenido siguiendo enlaces y explorando

**El raspador:**
Es una herramienta especializada diseñada para extraer datos de forma precisa y rápida de una página web. Los raspadores web varían ampliamente en diseño y complejidad, dependiendo del proyecto.


### 2. DJango
Django es un framework web diseñado para realizar aplicaciones de cualquier complejidad en unos tiempos muy razonables. Está escrito en Python y tiene una comunidad muy amplia, que está en continuo crecimiento.

**Beneficios de DJangi**
* Rápido
* Seguro
* Escalable
* Versátil
* ORM, cuenta con una interfaz para acceso a la base de datos ademas de contar con un panel de administración.

### 3. Heroku
Heroku es una plataforma como servicio de computación en la Nube que se especializa en ofrecer servicios de plataforma administrada, en donde se pueden alojar aplicaciones desarrolladas en diferentes lenguajes de programación como Java, Node.js, Scala, Clojure y Python y (no documentado) PHP. 

**Características Principales** 
*	Elasticidad y crecimiento. Se puede cambiar en cualquier momento la cantidad de Dynos asignados a una aplicación a través de la línea de comandos o el dashboard.
*	Tamaño. Heroku ofrece diferentes tipos de dynos, cada uno con diferentes capacidades de procesamiento y memoria.
*	Seguimiento. Existe un manejador de Dynos, el cual continuamente monitorea los dynos que están en ejecución, en caso de que uno falle es eliminado y creado nuevamente.
*	Distribución y redundancia. Los Dynos se encuentran aislados uno de otro. Esto implica que de existir fallos en la infraestructura interna de alguno de ellos, los otros dynos no se ven afectados, y consecuentemente tampoco la aplicación.

![image](https://user-images.githubusercontent.com/65081413/82743222-0370c500-9d2e-11ea-83df-8bca4edec463.png)

Del lado de cliente por medio de su navegador se podra acceder al sitio web en el cual se contara con un buscador para facilitar el mejor resultado además de visualizar un dashboard con datos relevantes de las ofertas de trabajos obtenidas por medio de la tecnica del Web Scraping. 

### Power Bi
Power BI es la herramienta de business intelligence o inteligencia de negocio de Microsoft. Proporciona un análisis en profundidad y tiempo real de los datos de negocio, convirtiéndolos en información de valor que ayuda a tomar las mejores decisiones empresariales.

* Power BI es una herramienta intuitiva y fácil de utilizar, porque permite crear informes y paneles básicos sin conocimientos técnicos, sobre todo en la versión Desktop

* Power BI permite hacer múltiples análisis complejos en un solo panel, con una visualización única muy atractiva.

### Bootstrap
Bootstrap permite crear interfaces web con CSS y Javascript que se adaptan en función del tamaño de la pantalla del dispositivo desde el que estamos navegando.

**Características Principales** 
* Es fácil de utilizar, se trata de una herramienta muy sencilla de utilizar, es muy intuitivo.
* Responsive Design, provee de todas las reglas CSS para que el sitio web se adapte de manera dinámica a la mayoría de las pantallas.
* Implementaciones externas, cuenta con múltiples implementaciones externas: WordPress, Drupal, SASS o jQuery UI.
* Comunidad Web, hace uso de componentes y servicios que han sido creados por la comunidad web. Como, por ejemplo: HTML5 shim, Normalize.css, OOCSS, jQuery UI, LESS o GitHub.

## Proof of concept (DEMO)

Para la demostracion de la solución detallada se creo un proyecto en DJango el cual aplica Web Scraping a las siguientes paginas de empleos:

    Site 01 https://ec.jobomas.com/Trabajo-en-guayas
    Site 02 https://www.unmejorempleo.com.ec/empleo-en-guayas.html
    Site 03 https://www.computrabajo.com.ec/empleos-en-guayas

Y los datos obtenidos se presentaran de la siguiente manera:

![image](https://user-images.githubusercontent.com/65081413/82746142-0bdaf700-9d52-11ea-9006-ca12cd4e4d97.png)

![image](https://user-images.githubusercontent.com/65081413/82746132-ee0d9200-9d51-11ea-9f2e-89870d649f90.png)

Ejemplo del Scraping Site 03:

![image](https://user-images.githubusercontent.com/65081413/82746168-6b390700-9d52-11ea-820f-8f20f1e5a5f6.png)

### Front End de aplicación de web Scraping-> Dashboard principal
![dashboard](https://user-images.githubusercontent.com/65080728/82746355-61180800-9d54-11ea-98a8-d8a4570ce468.png)


### Opción de visualización de ofertas en páginas web por cargo y sueldo. 
![Indicadores](https://user-images.githubusercontent.com/65080728/82746381-a2101c80-9d54-11ea-94a3-90d050a492f7.png)


### Listado de ofertas de empleo consolidado.
![Información Empleos](https://user-images.githubusercontent.com/65080728/82746414-f87d5b00-9d54-11ea-84c2-7013a487335f.png)


### Búsqueda semántica del área laboral seleccionada, para el ejemplo: Sistemas.
![ingreso_texto](https://user-images.githubusercontent.com/65080728/82746428-29f62680-9d55-11ea-8631-70876179c2d4.png)


### Resultados de la búsqueda semántica Sistemas de los portales de ofertas de empleo.
![resultados](https://user-images.githubusercontent.com/65080728/82746437-47c38b80-9d55-11ea-8a21-4cea980d42c4.png)


