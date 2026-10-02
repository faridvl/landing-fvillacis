@AGENTS.md

# landing-fvillacis

Landing de soluciones tecnológicas (menú digital para restaurantes/sodas, landing pages, desarrollo
a la medida). Marca actual: **fvillacis** (fvillacis.com), elegida como marca personal mientras se
define el nombre de una futura empresa; por eso el nombre vive solo en `content/site.json` → `name`
y el copy habla en "nosotros". Cambiar de marca = editar ese campo + `url` y redirigir el dominio.

Stack: Next.js 16 (App Router, todo estático) · React 19 · Tailwind v4 · `motion` · lucide-react.
Despliegue pensado para Vercel.

## Reglas

1. **Nada de valores quemados en componentes.** Todo texto visible sale de JSON:
   - `content/site.json` — datos que no dependen del idioma (nombre, URL, WhatsApp, correo,
     redes, moneda, país, color del tema).
   - `content/<locale>/common.json` — SEO, navegación, textos de interfaz (aria-labels incluidos), footer.
   - `content/<locale>/home.json` — contenido de cada sección.
   - `content/<locale>/menu-demo.json` — datos del menú de ejemplo del teléfono.
   Los tipos de todos los JSON están en `lib/types.ts`; al agregar un campo, tiparlo ahí.
2. **Los componentes no importan JSON.** `lib/content.ts` es la única puerta de entrada;
   `app/page.tsx` reparte a cada sección su porción por props.
3. **Constantes y enums en `lib/`**: anclas (`SectionId`), redes (`SocialNetwork`), tiempos y
   easing de animación (`lib/motion.ts`), íconos referenciables desde JSON (`lib/icons.ts`).
4. **Color por reglas, una sola fuente.** `content/theme.json` = matiz base + armonía
   (complementaria, dividida, tríada, análoga). `lib/palette.ts` deriva todos los roles en OKLCH con
   luminosidad/croma fijos por rol (contraste AA verificado para los 360°) y los inyecta como
   `--palette-*` en `<html>`; `globals.css` solo los expone como utilidades (`bg-brand`,
   `text-heading`, `shadow-frame`, `blur-glow`…). Las imágenes de next/og usan `paletteHex()`.
   **Nunca** escribir hex, `rgb()`, `text-white` ni sombras arbitrarias en componentes.
5. **Tokens semánticos que se invierten.** Los componentes usan siempre `text-heading`,
   `text-body`, `border-line`, `bg-brand-strong` + `text-on-brand`; la clase `dark-section`
   (la aplica `<Section tone={SectionTone.Dark}>`, Header y Footer) los redefine para fondo oscuro.
6. Copy sin comillas angulares; headings grandes con `text-pretty`.
7. Archivos sin BOM (PowerShell 5.1 `Set-Content -Encoding utf8` lo agrega y rompe el CSS).

## Movimiento (heredado de landing-grupotnt)

- `Reveal` (`components/motion`) para entrada al scroll; acepta `as="li" | "article"` para no
  romper la semántica dentro de listas.
- `EASE_EDITORIAL` ↔ `--ease-editorial` (utilidad `ease-editorial`) en sync.
- Hero: parallax (`useScroll`) + `AmbientGlow` + `RotatingWord`. CTA final: `PulseLink`.
- `MotionProvider` respeta `prefers-reduced-motion`; los loops CSS tienen su propio guard.
- Etiquetas de sección: `Eyebrow` (filete + mayúsculas), nunca chips con emoji.
- Grids sin cajas: filete superior que se tiñe en hover.

## SEO

- Metadata y JSON-LD se arman desde el contenido en `lib/seo.ts`
  (WebSite + ProfessionalService con catálogo de soluciones + FAQPage).
- `app/sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`, `icon.tsx`,
  `apple-icon.tsx`: todos generados, sin binarios que mantener.
- Un solo `h1` (Hero). FAQ con `<details>` nativo: respuestas en el HTML.

## i18n

Estructura lista, una sola lengua activa (`Locale.Es`). Para agregar inglés: crear
`content/en/` con los mismos JSON, registrarlo en `DICTIONARIES` y en ese momento mover la página
a un segmento `app/[locale]/` con `alternates.languages` (hreflang). Con un solo idioma se deja la
raíz sin prefijo, que es lo mejor para SEO.

## Pendientes de contenido

- `content/site.json`: correo con dominio propio (vacío = oculto) y redes.
- Comprar el dominio fvillacis.com y conectarlo en Vercel.
