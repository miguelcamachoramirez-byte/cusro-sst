# Curso SST — Planta de Inyección MENSHEN

Curso interactivo de **Seguridad y Salud en el Trabajo (SST)** para la planta de
inyección de plástico Menshen. Web estática (HTML, CSS y JavaScript), sin dependencias.

## Contenido

- 27 pantallas con narrativa "Guardianes de la seguridad" y la instructora **Karen**.
- Temas: qué es la SST, accidente/incidente, riesgos (mecánico, térmico, ruido,
  químico, ergonómico, eléctrico), factores de riesgo, EPP, inspección
  preoperacional, LOTO, jerarquía de controles, emergencias, reporte y autocuidado.
- Dinámicas interactivas:
  - Explorar los riesgos (clic).
  - Arrastrar y soltar: relacionar riesgo con su definición.
  - Arrastrar y soltar: equipar el EPP a Karen.
  - Evaluación de opción múltiple (A/B/C) intercalada.
  - Mini-juegos: "Karen esquiva peligros" y "Atrapa el EPP".
- Final tipo diploma con puntaje, estrellas y logros.
- Efecto parallax, transiciones animadas y sonidos de interfaz (Web Audio).

## Cómo ejecutar

Es estático. Ábrelo con un servidor local para que carguen bien las rutas:

```bash
# con Python
python -m http.server 8000
# o con Node
npx serve .
```

Luego abre `http://localhost:8000`.

## Estructura

- `index.html` — curso (punto de entrada)
- `estilos.css` — estilos
- `app.js` — navegación, dinámicas, quiz, puntaje
- `juegos.js` — mini-juegos
- `img/SST/` — ilustraciones (Karen, iconos de riesgo y EPP, fondos)
