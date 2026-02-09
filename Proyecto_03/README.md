# Decision SI/NO

## 1) Descripción del Proyecto
- Página web pequeña e interactiva que plantea la pregunta "¿Te gustaría salir conmigo?" y ofrece dos opciones: "SI" y "NO". Está pensada como una demostración simple de interacción y estilos agradables.

## 2) Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla)
- Servicios externos: Tenor (embed de GIF) mediante su script de integración.

## 3) Conceptos de CSS y JavaScript aplicados: métodos y propiedades
- CSS:
  - **Selectores globales y de clase:** `*`, `.container`, `.btn`, `.tenor-gif-embed`, `.btn a` — para aplicar reglas globales y específicas.
  - **Box model y reset:** `margin: 0; padding: 0; box-sizing: border-box;` — asegura un layout consistente.
  - **Tipografía:** `font-family: sans-serif;` — define la fuente base del documento.
  - **Layout con Flexbox:** `display: flex;`, `flex-direction: column;`, `justify-content: center;`, `align-items: center;` — centra y organiza el contenido vertical/horizontalmente.
  - **Responsive / tamaño máximo:** `max-width: 500px;`, `max-width: 200px;` — limita anchos para mantener la buena legibilidad en pantallas pequeñas.
  - **Espaciado y separación:** `gap: 20px;`, `margin: 20px;`, `padding: 10px 25px;` — controlan separación entre elementos y relleno interno.
  - **Estética y profundidad:** `background: #E8ACB8;`, `border-radius: 8px;`, `box-shadow: 0.5rem 1rem 3rem hsla(0,0%,0%,0.3);` — aportan estilo y jerarquía visual.
  - **Control de enlaces:** `text-decoration: none; color: #111; background: #fff;` — estilos para los botones enlazados.

- JavaScript:
  - **Selección del DOM:** `document.querySelector("#random-btn")` — obtiene el elemento del DOM por su selector.
  - **Manejo de eventos:** `addEventListener("mouseenter", callback)` — detecta cuando el cursor entra en el área del botón.
  - **Manipulación de estilos inline:** `element.style.position = "absolute";`, `element.style.top = "...%";`, `element.style.left = "...%";`, `element.style.fontWeight = "bolder";` — modifica la posición y apariencia del botón en tiempo real.
  - **Generación de valores aleatorios:** `Math.random()`, `Math.floor()` — se usan para calcular posiciones aleatorias dentro de la ventana.
  - **Uso de `event.target`:** para referirse al elemento que disparó el evento y aplicarle cambios.
  - **Función reutilizable:** `moverAleatoriamente(btn)` — encapsula la lógica de movimiento para mantener el código organizado.

---
