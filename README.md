# FVillacis

Sitio de [fvillacis.com](https://fvillacis.com): menús digitales con código QR, catálogos de trabajos, tiendas en línea y páginas web para negocios en Costa Rica.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:3000
npm run preview   # build estático servido como en Cloudflare
```

## Cambiar contenido

Todo lo que se ve en el sitio sale de `content/`, no hace falta tocar componentes:

| Archivo | Qué contiene |
|---|---|
| `content/site.json` | Nombre, URL, WhatsApp, correo y redes |
| `content/theme.json` | Matiz base y armonía: de ahí se genera toda la paleta |
| `content/es/common.json` | SEO, menú, textos de interfaz y footer |
| `content/es/home.json` | Textos de cada sección, soluciones, proyectos y preguntas |
| `content/es/menu-demo.json` | Menú de ejemplo que se ve en el teléfono |

## Publicación

Sitio 100 % estático (`out/`) servido por Cloudflare. Cada push a `main` se publica solo desde la integración de Git de Cloudflare:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
