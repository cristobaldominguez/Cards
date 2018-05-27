# Actividad 2 de la Segunda Semana de jQuery

Para la siguiente actividad clona este repositorio y trabaja en cada una de las carpetas respectivas.
Cada ejercicio viene con su archivo, el cual contiene información relevante para poder realizar el ejercicio.

## Competenecias importantes de esta actividad

- Selección de elementos en el DOM en base a atributos, [traversing](https://api.jquery.com/category/traversing/) o [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp).
- Utilizar funciones para insertar elementos HTML en el DOM.
- Conocer la interpolación de strings.
	- Aprender tanto la interpolación con ES5 y ES6.
- Practicar, con ejemplos reales, la necesidad de la delegación y la propagación de eventos.
	- Ser capaz de descubrir por si solo cuando es necesario utilizar cada una.
- Trabajar con un código desarrollado por otra persona, que además tiene implementada la metodología BEM de CSS.


## Ejercicios a desarrollar

##### 1. Precalentamiento.
El archivo `index.html` tiene todo el código HTML y el CSS ya desarrollados. Lo que se busca es que uds agreguen todo lo relacionado con la interacción, o sea el código jQuery. Para eso es necesario no solo agregar la referencia a la librería (que la pueden encontrar en:`assets/js/lib/jquery-3.3.1.min.js `), si no que también la referencia a un archivos JS externo.

Ese archivo externo de JS se debe encontrar en la carpeta `assets/js` y el objetivo es que, como tendrán que escribir un código largo de JS, se realice en otro archivo para que sea más ordenado. Es importante que lo primero que hagan en ese archivo sea agregar el [Document Ready](https://es.stackoverflow.com/q/92628) de jQuery 3, para que su código solo se ejecute cuando el DOM haya sido cargado.


##### 2. Apertura de la tarjeta
Si revisan el index en sus navegadores, verán que la segunda tarjeta esta abierta y que las otras dos se encuentran cerradas. Por otro lado, si revisamos el código HTML veremos que la tarjeta abierta tiene la clase `card--open`.

Lo que se pide es que al gatillar el click dentro de la tarjeta (la clase `.card`) se haga un toggle de la clase `card--open `.


##### 3. Like
Dentro de cada carta hay un corazón para que uno pueda hacer like. Es necesario implementar que al hacer click en el elemento con clase `.card__like` se realice un toggle de la clase `.card__like--red`.

__Tip:__ Recuerda que `.card__like` se encuentra dentro de `.card` lo tanto todos los eventos que gatilles sobre `.card__like` también se gatillarán en `.card`. Es parte de la tarea evitar que un evento se gatille en lugares no deseados.


##### 4. Botón Seguir
Cada tarjeta tiene un botón que dice 'Seguir'. Lo que se pide es que cada vez que se le hace click al elemento `.card__follow-btn` se le agregue la clase `.card__follow-btn--following` y, si ya la tiene se le quite (o sea hacer un toggle de la clase).


##### 5. Agregar imagen seleccionada
Al final de la página hay un formulario donde se pueden agregar dinámicamente nuevas tarjetas. Poco a poco iremos agregando la programación para que funcione, sin embargo por ahora cuando uno hace un cambio en la opción: 'Seleccione una imagen', se debería desplegar dentro del div con clase `.create__image` la imagen que seleccionada en el select (y que hace referencia al value del option). Para realizar eso ya hemos agregado el tag de la imagen y lo que deberemos hacer es cambiar el src de aquella etiqueta.

Deberemos escuchar el evento que se gatille con el cambio del select y posteriormente capturar el value del select y concatenarlo con la ruta para llegar a las imágenes (`assets/images/squared/`)

Se recomienda revisar la información que se encuentra en la documentación de jQuery y que hace referencia a los [Eventos de formularios](https://api.jquery.com/category/events/form-events/), porque estaremos utilizando algunos de ellos. 😉

__Tip:__ Si yo hago `$(event.target)` le estoy diciendo a jQuery que envuelva el target del evento y me lo entregue junto a todas sus funciones propias, para que sea más fácil utilizar la función `.val()` y muchas otras más.


##### 6. Agregar perfil del autor
El perfil del autor es similar a la imagen seleccionada, salvo que deberemos sacar la imagen original desde otra carpeta: `assets/images/profiles/`

__Tip:__ La concatenación en ES5 entre dos strings se realiza por medio de signos `+`, el string 'Hola' + '10' generará la concatenación de ambos strings generando como resultado: 'Hola10'. Sin embargo en ES6 (la nueva versión de JS) existe una nueva forma de concatenar strings, se llama interpolación y se utiliza de esta forma: <code>\`Este string es un texto con una: ${ variable }\`</code>. Variable en ese string podría ser cualquier variable o también cualquier operación matemática o expresión. Es importante saber que ES6 define como string al contenido que esta envuelto entre backtips, además es bueno recalcar que la interpolación solo se realizará en un string usando <code>\`</code> (backticks) y que no funcionará si utilizamos comillas simples o dobles. También es necesario envolver la variable o la expresión entre dos llaves y con un signo de \$ al principio, porque el lenguaje necesita que separemos el texto de lo qué no lo es.


##### 7. Captura de los contenidos del formulario
Para trabajar en el formulario primero que nada deberemos enfocarnos en dos puntos:
	
- Capturar el evento de envío del formlario y prevenir su comportamiento, para que finalmente no se genere el envío final (y no nos arroje un error o nos recargue la página).
	- Para eso es recomendable recordar los eventos del form que se mencionaron en el punto 5.
- Almacenar el valor de cada input en una variable, cosa que después sea sencillo utilizar esa variable para imprimirlo en un nuevo elemento HTML.

__Tip:__ Sabemos que el value de un select lo conseguimos con el método `val()`, sin embargo para saber cual es el texto que el usuario vio al seleccionar el elemento lo podremos conseguir de esta forma: <code>$('select').children(':selected').text()</code>. O sea, seleccioando el elemento, para luego ver cual de los hijos fue el seleccionado y ahí obtener el texto de éste.


##### 8. Agregar el código al HTML
Al hacer click en el botón 'Agregar' del formulario se agregará una nueva tarjeta a la página web, por lo tanto lo que realizaremos en este punto será eso.

Tomaremos un ejemplo del código de una tarjeta que tenemos en el mismo `index.html` y al gatillarse el submit lo que haremos será agregarlo directamente dentro de la etiqueta `.cards` con algún método que hayamos visto en clases anteriores. Por supuesto es necesarios saber que debemos concatenar/interpolar las variables creadas en el punto anterior para agregar la personalización de la tarjeta.


##### 9. Limpiando el formulario
Es recomendable que se limpie el formulario una vez que se ha creado la tarjeta, para permitir agregar una nueva tarjeta sin tener que esta manualmente borrando la información de la tarjeta anterior.

Para realizar eso lo que haremos será la operación inversa que realizamos en el punto 7, donde obtuvimos los valores de los campos. Esta vez deberemos asignarle un string vacío a cada campo y en el caso de los select, deberemos asignarle el valor que debería tener por defecto (`'uk.png'`)


## Ejercicios para seguir aprendiendo

##### a. Seguir/Siguiendo
No es lógico que si le hice click al botón de Seguir, siga apareciendo el texto 'Seguir'. ¿No es más lógico que diga 'Siguiendo'?

__Tip:__ Para realizar esta acción es recomendable utilizar un [if-else](https://desarrolloweb.com/articulos/544.php). Donde preguntas si el botón tiene la clase `.card__follow-btn--following` y de ser verdadera la respuesta quitas la clase y cambias el texto por 'Seguir', de lo contrario agregas la clase `.card__follow-btn--following` y cambias el texto del botón por 'Siguiendo'. Para saber si un elemento tiene o no asignada una clase determinada puedes utilizar el método [hasClass()](https://api.jquery.com/hasclass/) de jQuery.



