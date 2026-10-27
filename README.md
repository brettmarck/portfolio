# Portafolio — Alejandro Brett Marcano

Web de una sola página, bilingüe (ES/EN) y sin dependencias: solo HTML, CSS y JavaScript.
No necesita `npm install` ni proceso de build, así que se publica tal cual.

Contenido: soporte al cliente para SaaS B2B, help desk N1, atención omnicanal (chat y email),
SLA/FCR y base de conocimiento — con la experiencia real de Fibex Telecom y UNEFA.

## Ver la web en tu ordenador

```bash
python -m http.server 4173
```

Luego abre <http://localhost:4173>. (Si prefieres Node: `npx serve .`)

## Archivos

```
index.html            Contenido y estructura (el español vive aquí)
assets/css/styles.css Diseño: colores, tipografía, responsive
assets/js/main.js     Traducción al inglés, menú móvil, copiar correo, formulario
assets/cv/cv.pdf      Tu CV (el que descarga el botón "Descargar CV")
assets/favicon.svg    Icono de la pestaña
```

## Datos ya cargados

Nombre, correo, LinkedIn, ubicación (Tinaquillo, Venezuela · UTC-4), experiencia en
Fibex Telecom y UNEFA, formación, certificaciones, herramientas e idiomas están tomados
del CV. Las cifras del sitio (500+ interacciones, 25+ consultas al día, 65% de retención,
20+ usuarios diarios) salen del propio CV, no son estimaciones.

## Qué editar cuando cambie algo

| Qué | Dónde |
| --- | --- |
| Correo | `assets/js/main.js` → constante `CONTACT_EMAIL` (se actualiza en toda la página) |
| Nombre | `index.html` → `<h1>`, `<title>`, meta description, Open Graph y JSON-LD |
| Iniciales de marca y avatar (`AB`) | `index.html` → `.brand` y `.avatar-monogram` |
| LinkedIn | `index.html` → enlaces `linkedin.com/in/alejandro-brett-marcano-support` |
| Cifras | `index.html` → sección `.stats` y tarjetas de `#casos` |
| Experiencia y formación | `index.html` (español) y `assets/js/main.js` (inglés) |
| CV actualizado | reemplaza `assets/cv/cv.pdf` manteniendo el nombre |
| Teléfono | no está publicado a propósito (evita spam); se añade si lo quieres en `#contacto` |

### Cómo funciona el bilingüe

El español está escrito directamente en `index.html`. Las etiquetas con `data-i18n="clave"`
se traducen al inglés desde el diccionario `EN` en `assets/js/main.js`: si una clave no
existe, se mantiene el texto español. Para cambiar un texto en inglés, busca su clave
(`hero.lead`, `cases.1.title`, …) dentro de ese diccionario.

El idioma elegido se guarda en `localStorage`, así que se recuerda entre visitas.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `portafolio`).
2. Sube los archivos:

   ```bash
   git init
   git add .
   git commit -m "Portafolio de soporte al cliente"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portafolio.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Build and deployment**.
   Source: *Deploy from a branch* · Branch: `main` · Folder: `/ (root)` · **Save**.
4. En 1–2 minutos la web está en `https://TU-USUARIO.github.io/portafolio/`.

Si el repositorio se llama `TU-USUARIO.github.io`, la URL será `https://TU-USUARIO.github.io/`.

> Al publicar, actualiza `og:url`, `og:image` y el campo `url` del JSON-LD con la dirección
> definitiva.

### Dominio propio (opcional)

En **Settings → Pages → Custom domain** escribe tu dominio y crea un archivo `CNAME` con
ese dominio en la raíz del proyecto.

## Publicar en Vercel

1. Entra en <https://vercel.com/new> e importa el repositorio de GitHub.
2. Configuración: **Framework Preset: Other**, *Build Command* vacío,
   *Output Directory*: `.` (raíz).
3. **Deploy**. Vercel sirve los archivos estáticos sin compilar nada.

## Notas

- El formulario de contacto no usa servidor: abre la aplicación de correo del visitante con
  el mensaje ya redactado (mailto). Si quieres recibir mensajes sin depender del cliente de
  correo, se puede conectar a un servicio como Formspree.
- No hay fuentes ni librerías externas: carga rápido y funciona sin conexión una vez visitada.
- Añadir una foto profesional es cuestión de reemplazar el bloque `.avatar-card` del hero.
