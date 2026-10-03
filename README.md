# Alejandro Villarroel — Portfolio Nexus

Portafolio de Alejandro Villarroel: desarrollo full-stack, liderazgo técnico e inteligencia artificial. Diseño inspirado en interfaces de videojuegos y sistemas futuristas, conservando los ocho proyectos, servicios, tecnologías, experiencia y datos de contacto del sitio original.

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
