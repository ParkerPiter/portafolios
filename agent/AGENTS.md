# Guía del agente — link-portafolios-gabo

Contexto operativo para cualquier agente (Claude Code u otro) que trabaje en este repo.

---

## ⚠️ REGLA PRINCIPAL: documentar todo cambio aquí

**Si se realizan cambios en el proyecto, se tienen que documentar en este mismo archivo.**

Antes de dar por terminada una tarea que toque archivos del repo:

1. Agregar una entrada en [Bitácora de cambios](#bitácora-de-cambios) con fecha (`YYYY-MM-DD`), qué se cambió y por qué.
2. Si el cambio afecta la arquitectura, el stack o las convenciones, actualizar además la sección correspondiente de arriba — la bitácora no reemplaza a la descripción.
3. Si se agrega un proyecto al portafolio, sumarlo a la tabla de [Proyectos publicados](#proyectos-publicados).

Excepción: no hace falta registrar cambios que solo tocan este archivo.

---

## Qué es el proyecto

Portafolio personal de una sola página de **Gabriel Leal** (Desarrollador Full Stack e Integrador de IA). Es esencialmente un "link in bio" mejorado: foto, redes, una lista de enlaces a proyectos entregados, datos de contacto y una sección "Sobre mí" con el stack.

No tiene backend, ni router, ni estado global, ni build custom. Es intencionalmente simple.

## Stack

| Elemento | Detalle |
|---|---|
| Framework | React 19 |
| i18n | `i18next` + `react-i18next` — config y traducciones en `src/i18n.js` |
| Build / dev server | Create React App (`react-scripts` 5) — **no** Vite |
| Estilos | CSS Modules (`App.module.css`) + variables CSS |
| Iconos | FontAwesome (`react-fontawesome` + free-brands / free-solid) |
| Animaciones | `animate.css` (importado, uso mínimo) |
| Tipografía | Montserrat vía `@import` de Google Fonts dentro del CSS |

### Instalación de dependencias

**Siempre con `--legacy-peer-deps`**: `npm install <paquete> --legacy-peer-deps`. i18next 26 declara `typescript@^5 || ^6 || ^7` como peer opcional y CRA 5 no lo tolera; sin el flag, npm aborta con `ERESOLVE`.

## Estructura

```
public/
  index.html        Título, favicon (portafolio.png), meta description
  manifest.json     PWA básica de CRA
src/
  index.js          Entry point, monta <App /> en #root con StrictMode
  App.jsx           TODA la UI vive acá (118 líneas, componente único)
  App.module.css    TODOS los estilos (223 líneas)
  index.css         Vacío
  assets/           Foto de perfil + logos SVG/PNG de tecnologías
agent/
  AGENTS.md         Este archivo
```

## Cómo funciona `App.jsx`

Un solo componente con un único estado:

```js
const [selectedTab, setSelectedTab] = useState('proyectos');
```

Tres pestañas renderizadas condicionalmente: `'proyectos'`, `'contacto'`, `'sobre mi'`.
Ojo: el valor de la tercera pestaña lleva **espacio, sin acento** (`'sobre mi'`) — si se cambia, hay que cambiarlo en los tres lugares (botón, comparación y `onClick`).

- **Proyectos** — lista plana de `<a>` con clase `.buttons`. Varios enlaces están comentados a propósito (Kleep, Task Manager, Consultoría Penal, Coffee Blog, ATH Coin): son proyectos retirados de la vitrina, **no** código muerto para borrar. Mantenerlos comentados salvo indicación explícita.
- **Contacto** — email, teléfono, CV en Google Drive, WhatsApp.
- **Sobre mí** — tres párrafos de bio + grid de logos de tecnologías.

## Convenciones a respetar

- **Nada de texto visible hardcodeado.** Todo string que ve el usuario va como clave en `src/i18n.js`, en **ambos idiomas** (`es` y `en`), y se renderiza con `t('clave')`. Español es el fallback.
- Los valores de `selectedTab` (`'proyectos'`, `'contacto'`, `'sobre mi'`) son identificadores internos en español: **no traducirlos ni cambiarlos** al tocar i18n.
- **Colores solo desde las variables** de `:root` en `App.module.css`: `--naranja: #ff8000`, `--azul: #0833a2`, `--morado: #2a1150`, `--blanco`, `--negro`. No hardcodear hex nuevos.
- **Enlaces externos siempre** con `target="_blank" rel="noopener noreferrer"`.
- **Clases vía CSS Modules** (`styles.loQueSea`), nunca strings de clase sueltos.
- **No agregar librerías** para cosas que la app no necesita (routers, UI kits, state managers). El valor de este repo es que es chico.
- Mantener el componente único mientras siga siendo manejable; si `App.jsx` crece mucho, extraer las secciones a `src/components/` antes que complicar el archivo.
- Responsive: el breakpoint existente es `max-width: 980px`. Reusarlo en vez de inventar otros.

## Comandos

```bash
npm start     # dev en http://localhost:3000
npm run build # build de producción a /build
npm test      # runner de CRA (no hay tests escritos)
npm run eject # NO USAR — es irreversible
```

## Tareas típicas

**Agregar un proyecto al portafolio** → un `<a className={styles.buttons}>` dentro de `.buttonsContainer` en [App.jsx](../src/App.jsx#L43), + fila en la tabla de abajo, + entrada en la bitácora.

**Ocultar un proyecto** → comentarlo, no borrarlo (consistente con lo ya existente).

**Agregar una tecnología al grid** → SVG/PNG en `src/assets/`, `import` arriba en `App.jsx`, `<img>` en `.technologiesGrid`.

**Agregar o cambiar un texto visible** → clave en las secciones `es` **y** `en` de [src/i18n.js](../src/i18n.js), luego `t('clave')` en el JSX. Nunca solo uno de los dos idiomas.

**Agregar un idioma** → nuevo bloque en `resources` de `src/i18n.js`. Ojo: el botón actual es un *toggle* de dos idiomas (`es` ⇄ `en`); con un tercero hay que convertirlo en un selector.

## Estado conocido / deuda técnica

Cosas detectadas al momento de escribir esta guía. No son bugs urgentes, solo contexto:

- `public/index.html` tiene el `<link rel="icon">` con `portafolio.png` **repetido tres veces**.
- `src/index.css` está vacío.
- `src/reportWebVitals.js` es un resto del template de CRA; ni siquiera se invoca desde `index.js`.
- Los `alt` de los logos del grid de tecnologías son del estilo `"#react"` — no son texto alternativo útil. (El `alt` de la foto de perfil ya se corrigió y está traducido.)
- El `<title>` de `public/index.html` es estático en español: no cambia al alternar idioma.
- 57 vulnerabilidades reportadas por `npm audit`, heredadas de CRA 5. No correr `npm audit fix --force`: rompe `react-scripts`.
- Único test: `src/App.test.jsx` (toggle de idioma). El resto de la app no tiene cobertura.
- CRA está sin mantenimiento upstream; migrar a Vite es una opción a futuro, pero **no hacerlo sin pedirlo**.

## Proyectos publicados

Enlaces vivos en la pestaña Proyectos:

| Proyecto | URL |
|---|---|
| Clínica Estética NutraPiel | https://clinicanutrapiel.cl/ |
| GoPadel | https://app.gopadel.ai/ |
| Greenhug | https://greenhug.com/ |
| Impulsum | https://app.impulsum.io/ |
| Calistenia 360 | https://calistenia360.fit/ |
| Velasquez Financial | https://velasquezfinancialgroup.com/ |
| Intelisport | https://intelisport.us/ |
| Inteligensa | https://www.inteligensa.com/ |
| Estaciones de Energía | https://tiendae3.intelipay.com.ve/ |
| Intelipay | https://intelipay.com.ve/ |
| Zio Pagos | https://zio-pagos.netlify.app/ |
| Intelitec | https://intelitec.intelipay.com.ve/ |
| Poke News | https://poke-news.netlify.app/ |
| Sound Next | https://legendary-stroopwafel-2630e1.netlify.app/ |

Ocultos (comentados en el código): Kleep, Task Manager, Consultoría Penal, Coffee Blog, ATH Coin.

---

## Bitácora de cambios

Entradas nuevas arriba. Formato: `### YYYY-MM-DD — título`

### 2026-07-18 — Botón de cambio de idioma (ES/EN) con i18next
Se implementa internacionalización, que hasta ahora estaba solo instalada sin usar.

- Nuevo `src/i18n.js`: configuración de i18next + traducciones ES/EN inline, idioma inicial desde `localStorage` (clave `idioma`) o el idioma del navegador, con fallback a español. Sincroniza `<html lang>` y `localStorage` en cada cambio.
- `src/index.js`: importa `./i18n` antes de `App`.
- `src/App.jsx`: `useTranslation()`, botón de idioma en el header (icono `faGlobe`, alterna ES/EN) y todos los textos visibles pasados a claves `t(...)`.
- `src/App.module.css`: clases `.languageButton` / `:hover` y ajuste en el breakpoint de 980px.
- `public/index.html`: `<html lang="en">` → `lang="es"` (valor inicial correcto; i18n lo sobrescribe al cargar).
- Nuevo `src/App.test.jsx`: test que verifica el ciclo completo ES → EN → ES. **Pasa.**

Decisiones: los valores del estado `selectedTab` siguen en español (`'proyectos'`, `'contacto'`, `'sobre mi'`) — son identificadores internos, no texto visible, y desacoplarlos evita romper la lógica al traducir. Los nombres de los proyectos no se traducen por ser nombres propios, salvo "Clinica Estética NutraPiel" y "Estaciones de Energia", que sí son descriptivos.

Además se corrigieron tres roturas **preexistentes** que impedían compilar y testear:
- Faltaba `@fortawesome/fontawesome-svg-core` (peer dep de `react-fontawesome`) → `npm run build` fallaba desde antes de este cambio.
- Faltaban `@testing-library/jest-dom` (importado por `setupTests.js`) y `@testing-library/dom` (peer de `@testing-library/react`) → cualquier test fallaba.

⚠️ **Los `npm install` de este repo requieren `--legacy-peer-deps`.** i18next 26 arrastra `typescript@7` como peer opcional y CRA 5 no lo acepta; sin ese flag npm aborta con `ERESOLVE`.

### 2026-07-18 — Se crea la guía del agente
Se agrega `agent/AGENTS.md` (este archivo) y un `CLAUDE.md` en la raíz que apunta acá.
Motivo: dejar el contexto del proyecto por escrito y establecer la regla de documentar cada cambio en esta bitácora.
Sin cambios en el código de la aplicación.
