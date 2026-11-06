# Alejandro Villarroel — Portfolio Nexus

Portafolio de Alejandro Villarroel: desarrollo full-stack, liderazgo técnico e inteligencia artificial. Diseño inspirado en interfaces de videojuegos y sistemas futuristas, con nueve proyectos destacados, servicios, tecnologías, experiencia y datos de contacto. La cuadrícula muestra tres proyectos por fila en escritorio, dos en tablet y uno en móvil.

## Ejecutar localmente

No requiere instalación ni proceso de compilación. Desde la raíz del repositorio:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Abre http://127.0.0.1:4173 en el navegador. También puedes servir estos archivos con cualquier servidor estático.

## Interacciones

- Proceso de desarrollo estático en cinco pasos: idea, prototipo, desarrollo, pruebas y liberación.
- Filtros de proyectos por IA, gobierno digital y plataformas web.
- Fichas de proyecto con descripción, impacto, tecnologías y enlace original.
- Buscador de proyectos, tecnologías, servicios y secciones: **Ctrl/⌘ K**, flechas, Enter y Escape.
- Laboratorio con tres simulaciones locales de agentes. Son flujos ilustrativos deterministas; no se conectan a modelos ni APIs.
- Trayectoria profesional visible completa desde el inicio, copia de email y formularios de contacto.
- Respeto de `prefers-reduced-motion` para reducir animaciones según las preferencias del sistema.

## Archivos

- `index.html`: contenido, estructura semántica y formulario.
- `styles.css`: diseño responsive, componentes y estados accesibles.
- `script.js`: interacciones y datos de las fichas de proyecto.
- `assets/`: fotografías, capturas originales de proyectos e icono del sitio.

Las tarjetas se mantienen en el HTML para que el contenido y los enlaces sigan disponibles sin JavaScript. Al editar proyectos, actualiza tanto las tarjetas en `index.html` como sus fichas en el arreglo `projects` de `script.js`.

El formulario conserva su destino original de Formspree y admite envío nativo sin JavaScript. Con JavaScript ofrece estados de carga, éxito y error; conserva el mensaje cuando falla. Las fuentes Space Grotesk y Space Mono se obtienen de Google Fonts y disponen de fuentes de respaldo.

## Publicación

Los cambios se preparan y verifican localmente. Un push o despliegue requiere una solicitud explícita del propietario según sus instrucciones.

## Contacto

- Email: alejandrovillarroel@gmail.com
- GitHub: https://github.com/alejandrov
- Tamaulipas, México

## Casos y enlaces compartibles

- El inicio destaca SMARThub, Agentecitas y Ventanilla Digital con problema y solución.
- Cada proyecto tiene una ruta estática `proyectos/<slug>/` con canonical, Open Graph y Twitter Card, legibles sin JavaScript.
- Los tres casos destacados incluyen demostraciones visuales representativas de 18 segundos con datos ficticios: proyecto/tablero/calendario, conversación/citas y portal/solicitud/seguimiento. No son grabaciones reales ni reproducen la interfaz exacta del producto. Incluyen pausa, continuar, reiniciar, navegación por pasos y alternativa legible sin JavaScript. Las transiciones respetan movimiento reducido.
- Tras editar `projects` en `script.js` o `scripts/project-cases.json` o las escenas de `scripts/demos/`, ejecutar `python3 scripts/build-project-pages.py` y revisar las páginas generadas.
- Las URL canónicas apuntan al dominio público; las nuevas rutas estarán disponibles allí solo después de publicar con autorización.

<!-- Trigger GitHub Pages rebuild after the 2026-11-05 service incident. -->
