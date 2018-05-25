# Actividad 2 de la Segunda Semana de jQuery

Para la siguiente actividad clona este repositorio y trabaja en cada una de las carpetas respectivas.
Cada ejercicio viene con su archivo, el cual contiene información relevante para poder realizar el ejercicio.

## Competenecias importantes de esta actividad

- Selección de elementos en el DOM en base a atributos, [traversing](https://api.jquery.com/category/traversing/) o [css selectors](https://www.w3schools.com/cssref/css_selectors.asp)
- Utilizar funciones para insertar código HTML
- Conocer la interpolación de strings
	- Aprender tanto la interpolación con ES5 y ES6.
- Practicar con ejemplos reales la necesidad de la delegación y la propagación de eventos.
	- Ser capaz de descubrir por si solo cuando es necesario utilizar cada una.
- Trabajar con un código desarrollado por otra persona y que además tiene implementada la metodología BEM de CSS.


## Ejercicios a desarrollar

##### 1. Precalentamiento.
El archivo `index.html` tiene todo el código HTML y el CSS ya desarrollados. Lo que se busca es que uds agreguen todo lo relacionado con la interacción. Para eso es necesario no solo agregar la referencia a jQuery (que la pueden encontrar en:`assets/js/lib/jquery-3.3.1.min.js `). 

También se pedirá que creen un archivo de Javascript que se encuentre en la carpeta assets/js. El objetivo es que como tendrán que escribir un código largo de JS, lo hagan en un archivo externo y de esa forma sea más ordenado. Es importante que lo primero que hagan en ese archivo seaagregar el [document.ready](https://es.stackoverflow.com/q/92628) de jQuery 3, para que su código solo se ejecute cuando todos los elementos del HTML existan.


##### 2. Apertura de la tarjeta
Si revisan el index en sus navegadores, verán que la segunda tarjeta esta abierta y que las otras dos se encuentran cerradas. Por otro lado, si revisamos el código HTML veremos que la tarjeta abierta tiene la clase `card--open`.

Lo que se pide es crear un método que escuche un click dentro de la tarjeta (la clase `.card`) y que una vez se produzca, haga un toggle de la clase `card--open `.


##### 3. Like
Dentro de cada carta hay un corazón para que uno pueda hacer like. Es necesario implementar el click que escuche el elemento con clase `.card__like` y haga un toggle de la clase `.card__like--red`.

__Tip:__ Recuerda que `.card__like` se encuentra dentro de , por `.card` lo tanto todos los eventos que gatilles sobre `.card__like` también se gatillarán en `.card`. Es parte de la tarea evitar que un evento se gatille en lugares no deseados.


##### 4. Botón Seguir
Cada tarjeta tiene un botón que dice 'Seguir'. Lo que se pide es que cada vez que se le hace click al elemento `.card__follow-btn` se le agregue la clase `.card__follow-btn--following` y, si ya la tiene se le quite.


##### 5. Agregar imagen seleccionada
Al final de las tarjetas hay un formulario donde se pueden agregar dinámicamente nuevas tarjetas, sin embargo cuando uno hace algún cambio en la opción que dice: 'Seleccione una imagen', se debería desplegar dentro del div con clase `.create__image` la imagen que he seleccionado en el select (y que hace referencia al value del option).

Para realizar eso ya hemos agregado el tag de la imagen y lo que deberemos hacer es cambiar el src de aquella etiqueta. Deberemos escuchar el evento que se gatille con el cambio del select y posteriormente capturar el value del select y concatenarlo con la ruta para llegar a las imágenes (`assets/images/squared/`)

Se recomienda revisar la información que se encuentra en la documentación de jQuery y que hace referencia a los [Eventos de formularios](https://api.jquery.com/category/events/form-events/), porque estaremos utilizando algunos de ellos. 😉

__Tip:__ Si yo hago `$(event.target)` le estoy diciendo a jQuery que envuelva el target del evento y me lo entregue junto a todas sus funciones propias, para que sea más fácil utilizar la función `.val()` y muchas otras más.


##### 6. Agregar perfil del autor
El perfil del autor es similar a la imagen seleccionada, salvo que deberemos sacar la imagen original desde otra carpeta: `assets/images/profiles/`

__Tip:__ La concatenación en ES5 entre dos strings se realiza por medio de signos `+`, sin embargo en ES6 (la nueva versión de JS) existe una nueva forma de concatenar strings, se llama interpolación y se utiliza de esta forma: <code>\`Este string es un texto con una: ${ variable }\`</code>. Variable en ese string podría ser no solo cualquier var, si no que también podría ser una operación matemática o cualquier expresión. Es importante recalcar que la interpolación se realiza usando <code>\`</code> (backticks), porque no funcionará si utilizamos comillas simples o dobles.


##### 7. Captura de los contenidos del formulario
Para trabajar en el formulario primero que nada deberemos enfocarnos en dos puntos:
	
- Capturar el evento de envío del formlario y prevenir su comportamiento, para que finalmente no se genere el envío final (y no nos arroje un error o nos recargue la página).
	- Para eso es recomendable recordar los eventos del form que se mencionaron en el punto 5.
- Almacenar el valor de cada input en una variable, cosa que después sea sencillo utilizar esa variable para imprimirlo en un nuevo elemento HTML.

__Tip:__ Sabemos que el value de un select lo conseguimos con el método `val()`, sin embargo para saber cual es el texto que el usuario vio al seleccionar el elemento lo podremos conseguir de esta forma: <code>$('select').children(':selected').text()</code>. O sea, seleccioando el select, para luego ver cual de los hijos fue el seleccionado y ahí obtener el texto de éste.


##### 8. Agregar el código al HTML
Al hacer click en el botón 'Agregar' del formulario, lo que se busca es agregar una nueva tarjeta a la página web, por lo tanto lo que realizaremos en este punto será eso. Tomaremos un ejemplo del código de una tarjeta que tenemos en el mismo `index.html` y al gatillarse el submit lo que haremos será agregarlo directamente dentro de la etiqueta `.cards` y, por supuesto que deberemos concatenar/interpolar las variables creadas en el punto anterior, para cambiar los contenidos originales por los agregados en el formulario.


##### 9. Limpiando el formulario
Es recomendable que se limpie el formulario una vez que se ha creado la tarjeta, para permitir agregar una nueva tarjeta sin tener que esta manualmente borrando la información de la tarjeta anterior.

Para realizar eso lo que haremos será la operación inversa que realizamos en el punto 7, donde obtuvimos los valores de los campos. Esta vez deberemos asignarle un string vacío a cada campo y en el caso de los select, deberemos asignarle el valor que debería tener por defecto (`'uk.png'`)


## Ejercicios para seguir aprendiendo

##### a. Seguir/Siguiendo
No es lógico que si le hice click al botón de Seguir, siga apareciendo el texto 'Seguir'. ¿No es más lógico que diga 'Siguiendo'?

__Tip:__ Para realizar esta acción es recomendable utilizar un [if-else](https://desarrolloweb.com/articulos/544.php). Donde preguntas si el botón tiene la clase `.card__follow-btn--following` y de ser verdadera la respuesta quitas la clase y cambias el texto por 'Seguir', de lo contrario agregas la clase `.card__follow-btn--following` y cambias el texto del botón por 'Siguiendo'. Para saber si un elemento tiene o no asignada una clase determinada puedes utilizar el método [hasClass()](https://api.jquery.com/hasclass/) de jQuery.



