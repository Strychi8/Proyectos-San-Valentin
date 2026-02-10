# Corazon Vibrante San Valentin

## 1) Descripción del Proyecto

Pequeña página web estática que muestra un corazón animado y vibrante en el centro de la pantalla. Incluye un mensaje dentro del corazón y un efecto de confeti periódico para aportar dinamismo y celebración.

## 2) Tecnologías Utilizadas

- HTML5
- CSS3 (animaciones y pseudo-elementos)
- Fuente: Poppins (Google Fonts)
- Biblioteca de confeti: `canvas-confetti` (vía CDN)

## 3) Funcionalidades Implementadas

- Animación del corazón: El corazón está construido con un elemento principal y pseudo-elementos CSS; rota y escala con una animación de pulso que simula latidos.

- Mensaje centrado y estilizado: Texto colocado dentro del corazón con rotación compensada para mostrarse legible y centrado, adaptado al diseño oscuro de la página.

- Efecto de confeti periódico: Se carga `canvas-confetti` desde CDN y se dispara un efecto de partículas cada 2 segundos, configurable desde `index.html`.

- Diseño responsivo y minimalista: La página está centrada vertical y horizontalmente con colores contrastantes y tipografía ligera para una presentación limpia.


## 4) Conceptos JavaScript y CSS aplicados

- **CSS**:
	- Uso de pseudo-elementos `::before` y `::after` para crear los lóbulos (círculos) del corazón combinados con un cuadrado rotado.
	- `transform: rotate(-45deg)` sobre el contenedor principal para formar la geometría del corazón; el texto se rota (45deg) para compensar y permanecer legible.
	- `border-radius` para generar las formas circulares y `box-shadow` para añadir brillo/profundidad al diseño.
	- `@keyframes` y `animation` para el efecto de pulso/latido (escala y suavizado de la transformación).
	- `display: flex; justify-content: center; align-items: center;` para centrar la estructura y mantener el contenido alineado.

- **JavaScript**:
	- Inclusión de `canvas-confetti` vía CDN y uso de `setInterval` para disparar efectos periódicos de confeti.
	- Llamada a `confetti({...})` con opciones como `particleCount`, `spread` y `origin` para controlar la apariencia y la posición del efecto.
	- Script inline simple (sin módulos ni bundlers), fácil de integrar; considerar controlar la frecuencia o desactivarlo en dispositivos con recursos limitados para ahorrar CPU/batería.

---
