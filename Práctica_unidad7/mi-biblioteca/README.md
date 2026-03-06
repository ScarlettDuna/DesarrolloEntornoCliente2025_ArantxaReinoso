# 📚 Asistente Virtual: La Biblioteca de Arantxa

Este proyecto es una aplicación web interactiva desarrollada con **React** que simula un asistente virtual para una biblioteca personal. Permite a los usuarios interactuar con un bot para buscar libros, recibir recomendaciones según su estado de ánimo y gestionar su lista de lecturas (leídas y pendientes).

## 🚀 Requisitos del Proyecto (Cumplimiento)

Para este trabajo de clase, se han implementado los siguientes requisitos técnicos:

1.  **Múltiples Archivos JSX (+3):** El proyecto está modularizado en más de 8 componentes funcionales (ej. `Home.jsx`, `Chat.jsx`, `Asistente.jsx`, `Lector.jsx`, `Busqueda.jsx`, etc.).
2.  **Renderización Condicional:** Implementada en el Chat para alternar entre el menú principal, el buscador, el recomendador y las listas de lectura según la interacción del usuario.
3.  **Uso de Props:** Comunicación constante entre componentes padre e hijos (ej. paso de funciones *callback* para actualizar el estado de los resultados).
4.  **Hooks - `useState`:** Gestión del historial de mensajes, la vista actual del chat y los resultados de búsqueda.
5.  **Hooks - `useEffect`:** Utilizado para el mensaje de bienvenida automático, el filtrado de datos al buscar y el auto-scroll de la conversación.
6.  **Manejo de Eventos:** Gestión de clics en menús, cambios en inputs de búsqueda y navegación entre rutas.
7.  **Colecciones y Listas:** Uso intensivo de `.map()` para renderizar tanto el historial de mensajes del chat como las colecciones de libros extraídas de un archivo JSON.
8.  **React Router:** Configuración de rutas dinámicas para separar la página de bienvenida (`/`) del asistente virtual (`/chat`).

---

## 🛠️ Estructura del Proyecto

```text
src/
├── components/
│   ├── Asistente.jsx      # Contenedor principal del chat y resultados
│   ├── Home.jsx           # Página de bienvenida (Landing page)
│   ├── Chat.jsx           # Lógica del asistente y flujo de conversación
│   ├── Menu.jsx           # Botones de opciones (Sugerencias de usuario)
│   ├── Busqueda.jsx       # Filtrado de libros por título/autor
│   ├── Recomendador.jsx   # Lógica de recomendación por "mood"
│   ├── Lector.jsx         # Visualización de libros leídos/pendientes
│   └── PanelResultados.jsx# Muestra las fichas de los libros a la derecha
├── utils/
│   └── recomendador.js    # Lógica de filtrado de datos
├── reading-data-clean.json # Base de datos de la biblioteca
├── App.jsx                # Router y estructura base
└── main.jsx               # Punto de entrada con BrowserRouter
```

---

## 🎨 Características de Diseño

- **Glassmorphism:** Interfaz moderna con efectos de transparencia y desenfoque (`backdrop-filter`).
- **Navegación Intuitiva:** Barra de navegación fija con efectos visuales al pasar el ratón.
- **Chat Interactivo:** Los mensajes del bot y del usuario están diferenciados visualmente. Las opciones de respuesta aparecen alineadas a la derecha con forma de "burbuja de usuario".
- **Scroll Independiente:** El chat y el panel de resultados se desplazan de forma autónoma para mejorar la usabilidad.

---

## 📦 Instalación y Ejecución

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

---
**Autor:** Arantxa
**Asignatura:** Desarrollo Web en Entorno Cliente (2º DAW)
