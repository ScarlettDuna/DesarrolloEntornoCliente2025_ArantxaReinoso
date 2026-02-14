# 📌 Práctica 5 – Escape Room Interactivo en JavaScript

## 📖 Descripción general

Esta práctica consiste en el desarrollo de un **Escape Room web interactivo** estructurado en varias salas independientes conectadas mediante un **Hub central de control**.

Cada sala trabaja distintos conceptos avanzados de JavaScript relacionados con:

* Gestión de eventos
* Manipulación del DOM
* Delegación y propagación de eventos
* Validación con expresiones regulares
* Drag & Drop
* Scroll y resize
* Uso de `localStorage` para persistencia
* Uso de estructuras como `Map` y `Set`

El sistema completo simula una progresión de niveles donde el usuario debe superar cada prueba para desbloquear la siguiente.

---

# 🏛 Hub – Salón de Control

El archivo `hub.html` actúa como punto central del Escape Room.

## 🎯 Funcionalidad

* Muestra las cuatro pruebas disponibles.
* Solo permite acceder a una sala cuando la anterior ha sido completada.
* Gestiona el estado global del juego mediante `localStorage`.
* Permite reiniciar el progreso.

## ⚙ Funcionamiento técnico

En `app.js`:

* Se consultan las claves de `localStorage`:

  * `sala1`
  * `sala2`
  * `sala3`
  * `sala4`
* Según el progreso, se habilitan o deshabilitan los botones del menú.
* Se utiliza **delegación de eventos** para detectar qué botón ha sido pulsado y redirigir a la sala correspondiente.
* El botón "Reiniciar progreso" limpia `localStorage` y recarga la página.

Esto permite mantener el progreso incluso si el usuario recarga el navegador.

---

# 🧩 Sala 1 – Primera Prueba

## 🎯 Objetivo

Superar una primera interacción básica basada en eventos del DOM.

## 🔧 Conceptos trabajados

* Eventos de ratón.
* Manipulación del DOM.
* Condiciones lógicas.
* Cambio dinámico de estilos.

Esta sala introduce la mecánica básica del juego y al completarse guarda en `localStorage` el estado:

```js
localStorage.setItem("sala1", "completada");
```

---

# 🧠 Sala 2 – Interacción avanzada con eventos

## 🎯 Objetivo

Resolver un sistema de palancas interactivo.

## 🔧 Conceptos trabajados

* Delegación de eventos.
* Propagación y uso de `stopPropagation()`.
* Eventos de teclado (alfanuméricos y especiales).
* Uso de coordenadas del ratón (`clientX`, `clientY`).
* Uso de `getBoundingClientRect()`.
* Uso de `Map` y `Set`.

### Características destacadas

* Se implementa un sistema de bloqueo/desbloqueo de palancas.
* Se controla la propagación de eventos entre elementos anidados.
* Se gestionan combinaciones correctas mediante estructuras de datos avanzadas.

Al completar la sala:

```js
localStorage.setItem("sala2", "completada");
```

---

# 🔍 Sala 3 – Sistema interactivo con múltiples módulos

## 🎯 Objetivo

Resolver una prueba basada en interacción dinámica entre distintos componentes.

## 🔧 Conceptos trabajados

* Modularización del código.
* Separación de responsabilidades.
* Manipulación avanzada del DOM.
* Gestión de estados.

Esta sala introduce una estructura más organizada del código y separación en distintos archivos JS para una mejor escalabilidad.

Al completarse se guarda:

```js
localStorage.setItem("sala3", "completada");
```

---

# 🧪 Sala 4 – Prueba Final

La sala más completa y técnica del proyecto.

## 🎯 Objetivo

Superar múltiples fases para finalizar el juego:

1. Insertar la tarjeta correcta (Drag & Drop).
2. Validar usuario y secreto mediante expresiones regulares.
3. Activar un modo de recalibración.
4. Redimensionar la ventana para finalizar el juego.

---

## 🔧 Conceptos trabajados

### 🟢 Drag & Drop

* `dragstart`
* `dragenter`
* `dragover`
* `dragleave`
* `drop`
* Uso de `dataTransfer`

Se implementa un sistema de estados visuales:

* activo
* correcto
* incorrecto

---

### 🟢 Expresiones Regulares

Se utilizan dos regex:

```js
/^[a-z]{4,8}$/
```

Valida un usuario con 4–8 letras minúsculas.

```js
/^[A-Z]{3}\d{2}$/
```

Valida un código secreto compuesto por 3 letras mayúsculas y 2 números.

Se usan anclajes `^` y `$` para asegurar que toda la cadena cumpla el patrón.

---

### 🟢 Scroll

El secreto se revela tras hacer scroll en la página, utilizando:

```js
window.addEventListener('scroll', ...)
```

---

### 🟢 Clipboard API

Permite copiar el secreto al hacer clic:

```js
navigator.clipboard.writeText(...)
```

---

### 🟢 Resize

Tras validar correctamente el secreto:

* Se activa un modo final.
* Si el ancho de la ventana es menor a 600px,
* Se muestra la pantalla de victoria.

Esto se gestiona mediante:

```js
window.addEventListener('resize', ...)
```

---

# 🏁 Finalización del Juego

Al completar la Sala 4:

```js
localStorage.setItem("sala4", "completada");
```

Al volver al Hub:

* Se muestra el mensaje "Juego superado".
* Se activa el estado visual de ganador.

---

# 🧠 Arquitectura General del Proyecto

El proyecto está estructurado en carpetas independientes por sala, lo que permite:

* Separación clara de responsabilidades.
* Código modular.
* Fácil mantenimiento.
* Escalabilidad futura.

El uso de `localStorage` permite que el estado del juego sea persistente.

---

# 🎯 Conclusión

Esta práctica integra múltiples conceptos avanzados de JavaScript en una aplicación interactiva coherente.

Se han trabajado:

* Eventos complejos
* Delegación y propagación
* Manipulación dinámica del DOM
* Validación con regex
* Persistencia de estado
* Drag & Drop
* Scroll y Resize
* Uso de estructuras de datos modernas

El resultado final es un Escape Room completamente funcional con progresión entre niveles y sistema de desbloqueo dinámico.

