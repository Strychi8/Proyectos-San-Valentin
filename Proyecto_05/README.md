# Fantasmas Interactivos San Valentin

## 1) Descripción del Proyecto

Este proyecto crea una escena interactiva de fantasmas con estética de San Valentín. Los fantasmas flotan, parpadean y reaccionan a la interacción del usuario; aparecen mensajes y efectos (besos) animados para reforzar la experiencia visual.

## 2) Tecnologías Utilizadas

- HTML: estructura de la página y contenedores de los elementos interactivos.
- CSS: estilos, animaciones (keyframes), pseudo-elementos y filtros visuales.
- JavaScript: manipulación del DOM, eventos de usuario y control de animaciones dinámicas.
- SVG inlined (data URI): detalles gráficos para formas repetidas en la falda del fantasma.

## 3) Conceptos CSS y JavaScript aplicados

**CSS**
- **background-color**: Define el color de fondo del lienzo para crear contraste con los elementos rosados. Mejora la legibilidad y la atmósfera nocturna del diseño.

- **overflow: hidden**: Evita barras de desplazamiento ocultando lo que queda fuera del área visible. Útil para mantener los fantasmas y efectos dentro del viewport y evitar scroll no deseado.

- **position: absolute**: Permite colocar los fantasmas y elementos en posiciones exactas sobre el lienzo. Facilita la animación y el posicionamiento dinámico relativo al contenedor padre.

- **animation / @keyframes**: Anima propiedades como `transform` para producir flotación, parpadeo y movimiento. Se usan ciclos infinitos para dar vida continua a los sprites sin intervención JS permanente.

- **transform (translate/scale/rotate)**: Mueve, escala y rota los elementos para simular flotación y respuesta al hover. Es eficiente y suele estar acelerado por GPU, resultando en animaciones suaves.

- **filter: drop-shadow(...)**: Añade sombras difusas alrededor de los fantasmas para profundidad y brillo. Mejora el contraste con el fondo y aporta una sensación de volumen luminosa.

- **transition**: Suaviza cambios (p. ej. `transform`) cuando el usuario interactúa (hover), evitando saltos bruscos. Complementa las animaciones para micro-interacciones responsivas.

- **::before / ::after (pseudo-elementos)**: Generan decoraciones como reflejos y la falda ondulada sin HTML adicional. Permiten añadir capas visuales y patrones repetidos mediante background-image o gradientes.

- **border-radius**: Redondea esquinas para ojos, boca y formas del fantasma, aportando aspecto amistoso. Esencial para lograr formas orgánicas sin usar imágenes externas.

- **z-index / display / opacity**: Controlan el apilamiento, visibilidad y presencia visual durante animaciones. Permiten gestionar qué elementos aparecen encima y cómo se desvanecen o muestran.

**JavaScript**
- **addEventListener**: Escucha eventos del usuario (click, mousemove) y ejecuta handlers para interacción. Es la forma estándar y delegable para responder a acciones sin inyectar HTML inline.

- **document.createElement**: Crea elementos dinámicamente (p. ej. burbujas, mensajes, besos animados). Permite generar efectos temporales sin necesidad de elementos predefinidos en el DOM.

- **parent.appendChild / insertAdjacentElement**: Inserta nodos creados al DOM para que sean visibles y animables. Tras la inserción se puede iniciar una animación CSS o escuchar su finalización.

- **element.classList.add / remove / toggle**: Activa clases que disparan animaciones CSS o estilos condicionales. Separar lógica (JS) y presentación (CSS) mantiene el código más limpio y reutilizable.

- **element.style.setProperty (CSS variables)**: Ajusta variables CSS en tiempo real (p. ej. `--tx`, `--ty`) para animaciones dirigidas.Permite que JS controle parámetros de keyframes sin recalcular estilos complejos.

- **getBoundingClientRect**: Obtiene posición y dimensiones del elemento para calcular coordenadas de efectos. Es útil para posicionar mensajes o trayectorias de animación relativas al fantasma.

- **event.clientX / event.clientY**: Miden la posición del cursor en pantalla para centrar interacciones o crear partículas. Permiten respuestas contextualizadas a la interacción del usuario (p. ej. aparecer donde se clickea).

- **setTimeout / requestAnimationFrame**: Sincronizan tareas temporales o animaciones dependientes del renderizado. `requestAnimationFrame` es óptimo para animaciones fluidas; `setTimeout` para limpiezas posteriores.

- **element.remove()**: Elimina elementos temporales del DOM al terminar su animación, evitando fugas de memoria. Mantiene el DOM limpio y mejora el rendimiento en sesiones largas.

- **querySelector / querySelectorAll**: Selecciona elementos para aplicar listeners o actualizar estilos desde JS. Permite manipular fácilmente elementos específicos sin acoplarse a IDs estáticos.

---
