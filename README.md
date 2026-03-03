# Pr-ctica---Consumo-de-APIS-JJ
Práctica - Consumo de APIS (HTML, CSS, JS) con README incluido hecho por Jaume Joan Mesquida Boyeras

# Práctica – Consumo de API y Visualización Web

## 1. Descripción del proyecto

En esta práctica he desarrollado una pequeña aplicación web que consume datos de una API pública y los muestra dinámicamente en una página HTML.

En mi caso he utilizado la API pública de Pokémon (PokeAPI) para mostrar información de distintos Pokémon dentro de una especie de Pokédex interactiva. La página permite seleccionar Pokémon desde una lista y visualizar su información, además de mostrar algunos Pokémon populares en formato de tarjetas.

El objetivo principal del proyecto es entender cómo funciona el consumo de APIs utilizando `fetch` en JavaScript y cómo integrar esos datos dinámicamente en una página web.

---

## 2. Tecnologías utilizadas

Para desarrollar esta práctica he utilizado:

- HTML → Para la estructura de la página.
- CSS → Para el diseño y estilos visuales.
- JavaScript → Para la lógica de la aplicación.
- Fetch API → Para realizar las peticiones a la API externa.

No he utilizado servidor backend (como Flask), ya que he optado por realizar únicamente la parte cliente.

---

## 3. Funcionamiento de la aplicación

La aplicación funciona de la siguiente manera:

Cuando se carga la página, el archivo `script.js` realiza peticiones a la API usando `fetch`. Estas peticiones son asíncronas, lo que significa que el navegador puede seguir funcionando mientras espera la respuesta del servidor.

Uso `async/await` para trabajar de forma más clara con las promesas que devuelve `fetch`.

Primero se obtiene la información básica de varios Pokémon desde la API. Después, para cada Pokémon, se realiza otra petición para obtener sus datos completos (imagen, tipo, estadísticas, etc.).

Una vez se reciben los datos en formato JSON (usando `response.json()`), se procesan y se insertan dinámicamente en el HTML mediante manipulación del DOM.

Cuando el usuario hace clic en un Pokémon de la lista, se actualiza la parte derecha de la Pokédex mostrando la información detallada de ese Pokémon.

También hay una sección de Pokémon populares que se muestran como tarjetas ("cards"), que se generan dinámicamente desde JavaScript.

---

## 4. Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```
/index.html
/style.css
/script.js
/README.md
```

### index.html
Contiene la estructura principal de la página: la Pokédex, la lista de Pokémon y la sección de populares.

### style.css
Contiene todos los estilos visuales. He trabajado los colores para que tengan armonía visual y he intentado darle un estilo inspirado en la estética clásica de Pokémon, con bordes negros, formas redondeadas y un diseño limpio pero retro.

### script.js
Contiene toda la lógica del programa:
- Peticiones a la API con `fetch`
- Uso de async/await
- Procesamiento de datos en formato JSON
- Creación dinámica de elementos HTML
- Eventos para interactuar con la lista de Pokémon

---

## 5. Cómo ejecutar el proyecto

Para ejecutar el proyecto simplemente hay que:

1. Descargar o clonar el repositorio.
2. Abrir el archivo `index.html` en el navegador.

No es necesario instalar nada adicional ni configurar servidor.

---

## 6. Conclusión

Esta práctica me ha servido para entender mejor cómo funciona la comunicación entre el cliente y una API externa, y cómo los datos pueden mostrarse dinámicamente en una web.

Aunque el proyecto es sencillo, creo que cumple con los requisitos solicitados y demuestra el uso correcto de `fetch` y la integración de datos dinámicos en HTML.
