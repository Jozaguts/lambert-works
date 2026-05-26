# SEO Baseline - 2026-05-26

Project: LambertWorks  
Primary market: Plymouth Meeting, Blue Bell, Skippack, and nearby Montgomery County, PA  
Primary intent: Honey-do list handyman and local home repair services  
Review date: 2026-05-26  
Comparison date target: 2026-06-09

## Goal

Capture the SEO and analytics baseline after the technical SEO update, sitemap submission, blog prerendering, and Google Business Profile copy review. Use this file to compare progress after roughly two weeks.

## Changes Completed Before Baseline

- Homepage title, description, canonical, Open Graph, Twitter tags, and LocalBusiness schema updated.
- Homepage H1 updated to target `Honey-Do List Handyman in Plymouth Meeting, PA`.
- Local copy normalized to `Plymouth Meeting`, `Blue Bell`, `Skippack`, and `Montgomery County, PA`.
- `robots.txt` and `sitemap.xml` generated.
- Blog post pages prerendered as static HTML under `/blog/{slug}/`.
- Blog post canonical, Open Graph URL, and JSON-LD `mainEntityOfPage` use trailing slash URLs.
- Nginx serves prerendered blog directories directly and falls back to `index.html` for SPA routes.

## Important URLs

| URL | Purpose | Baseline status |
| --- | --- | --- |
| `https://lambertworks.us/` | Homepage | Published |
| `https://lambertworks.us/sitemap.xml` | Sitemap | Published |
| `https://lambertworks.us/robots.txt` | Robots | Published |
| `https://lambertworks.us/blog/handyman-plymouth-meeting-pa/` | Main local handyman article | Published and prerendered |
| `https://lambertworks.us/blog/drywall-repair-plymouth-meeting-pa/` | Drywall repair article | Published and prerendered |
| `https://lambertworks.us/blog/basement-remodeling-plymouth-meeting-pa/` | Basement remodeling article | Published and prerendered |
| `https://lambertworks.us/blog/deck-patio-repair-whitemarsh-conshohocken/` | Exterior repair article | Published and prerendered |

## Google Search Console Baseline

Search Console is effectively zero at baseline. The homepage is discovered from the sitemap but has not been crawled yet, so this section is mainly for indexing status rather than traffic comparison.

### Indexing

| Metric | Value |
| --- | --- |
| Sitemap submitted? | TODO |
| Sitemap status | TODO |
| Discovered pages from sitemap | TODO |
| Indexed pages | TODO |
| Not indexed pages | TODO |
| Homepage status | `Discovered - currently not indexed` |
| Homepage last crawl | `N/D` |
| Homepage crawl allowed | `N/D` |
| Homepage indexing allowed | `N/D` |
| Homepage user-declared canonical | `N/D` |
| Homepage Google-selected canonical | `N/D` |

### URL Inspection Results

| URL | Live test result | Indexing request submitted? | Notes |
| --- | --- | --- | --- |
| `https://lambertworks.us/` | TODO | TODO | TODO |
| `https://lambertworks.us/blog/handyman-plymouth-meeting-pa/` | TODO | TODO | TODO |
| `https://lambertworks.us/blog/drywall-repair-plymouth-meeting-pa/` | TODO | TODO | TODO |

### Performance Report

Use date range: last 28 days, or all available data if the property is new. Baseline expectation is zero or no available data because the site is not indexed yet.

| Metric | Value |
| --- | --- |
| Total clicks | 0 |
| Total impressions | 0 |
| Average CTR | N/A |
| Average position | N/A |

### Top Queries

| Query | Clicks | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| TODO | TODO | TODO | TODO | TODO |

### Top Pages

| Page | Clicks | Impressions | CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| TODO | TODO | TODO | TODO | TODO |

## Google Analytics Baseline

Recommended date range: last 28 days. If the site has almost no traffic, also capture last 7 days. This is the main traffic baseline because Search Console is currently zero.

Captured range: 2026-04-28 to 2026-05-25.

### Acquisition Overview

| Metric | Value |
| --- | --- |
| Active users | 28 |
| New users | 28 |
| Sessions | 32 |
| Engaged sessions | Not captured |
| Engaged sessions per active user | 0.32 |
| Engagement rate | Not captured |
| Average engagement time per active user | 2 s |
| Average engagement time per session | 3 s |
| Event count | 128 |
| Key events / conversions | 0 |

### Traffic By Source / Medium

| Source / medium | Active users | Sessions | Key events |
| --- | ---: | ---: | ---: |
| `(direct) / (none)` | 23 | 27 | 0 |
| `facebook.com / referral` | 3 | 3 | 0 |
| `ig / social` | 1 | 1 | 0 |
| `l.instagram.com / referral` | 1 | 1 | 0 |
| Organic Search | 0 | 0 | 0 |

### Geography

| Country | Active users |
| --- | ---: |
| United States | 17 |
| Mexico | 2 |
| Albania | 1 |
| United Kingdom | 1 |
| Slovakia | 1 |

| City | Active users |
| --- | ---: |
| Chicago | 4 |
| Philadelphia | 3 |
| Ashburn | 2 |
| Prineville | 2 |
| Zapopan | 2 |
| Forest City | 1 |
| Idaho Springs | 1 |

### Landing Pages

| Landing page / path | Views | Active users | Views per active user | Average engagement time per active user | Event count | Key events |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 34 | 28 | 1.21 | 1 s | 127 | 0 |
| `/blog/handyman-plymouth-meeting-pa` | 1 | Not captured | Not captured | Not captured | Not captured | Not captured |
| `/blog/drywall-repair-plymouth-meeting-pa/` | 0 | 0 | 0 | 0 s | 0 | 0 |

### Important Events

Track these if available.

| Event | Count | Notes |
| --- | ---: | --- |
| `page_view` | 35 | Default GA4 event |
| `session_start` | 32 | Default GA4 event |
| `first_visit` | 28 | Default GA4 event |
| `scroll` | 25 | Default GA4 event |
| `user_engagement` | 8 | Default GA4 event |
| Contact form submit | 0 | Not captured as key event |
| Email click | 0 | Not captured as key event |
| Phone click | 0 | Not captured as key event |
| WhatsApp click | 0 | Not captured as key event |

### Page Titles

| Page title | Views |
| --- | ---: |
| `Honey-Do List Handyman in Plymouth meeting, bluebell, Skippack areas | LambertWorks` | 34 |
| `Honey-Do List Handyman Plymouth meeting, bluebell, Skippack areas | LambertWorks` | 1 |

## Baseline Interpretation

- Search Console baseline is zero: pages are discovered but not crawled/indexed yet.
- GA4 baseline shows 32 sessions and 28 active users over the captured 28-day period.
- Organic Search baseline is zero sessions, so any organic sessions after indexing are new lift.
- Traffic before the SEO update came mostly from direct and social/referral sources.
- Key events are zero. Lead tracking should be configured if contact clicks or form submissions need to be measured.
- The old page titles in GA4 still show the previous local-copy casing, which is expected because those page views happened before the latest title updates.

## Manual Search Baseline

Run these searches in an incognito/private window. Record whether LambertWorks appears.

| Search query | Result position / status | Notes |
| --- | --- | --- |
| `site:lambertworks.us` | TODO | TODO |
| `LambertWorks` | TODO | TODO |
| `LambertWorks Plymouth Meeting` | TODO | TODO |
| `honey do list handyman Plymouth Meeting PA` | TODO | TODO |
| `handyman Plymouth Meeting PA` | TODO | TODO |
| `drywall repair Plymouth Meeting PA` | TODO | TODO |

## Two-Week Review Checklist

Review around 2026-06-09.

- Check whether homepage moved from `Discovered - currently not indexed` to crawled or indexed.
- Check whether blog URLs are indexed.
- Compare Search Console clicks, impressions, CTR, and average position.
- Compare GA4 organic users, sessions, engagement, and contact events.
- Check whether `site:lambertworks.us` returns the homepage and blog pages.
- Decide whether to start phase 9: city/service pages or more local articles.

Estamos en este punto:

El sitio ya tiene la base técnica correcta para empezar a competir en SEO local. La home tiene title, description, H1, canonical, schema local, Open Graph y copy orientado a Honey-Do List Handyman in Plymouth Meeting, PA.
Los posts ya están prerenderizados como HTML real, el sitemap y robots están publicados, y Nginx sirve las URLs finales con /.

Search Console hoy está en cero porque Google apenas descubrió la página, pero todavía no la ha rastreado. Eso es normal. El baseline real de tráfico viene de GA4: últimos 28 días, 28 usuarios activos, 32 sesiones, 35 page
views, 0 tráfico orgánico y 0 eventos clave.

También ya agregamos medición de leads con generate_lead para email, WhatsApp y formulario. Eso es importante porque no solo queremos saber si llega tráfico, sino si ese tráfico produce intención de contacto.

En 15 días queremos ver tres señales:

1. Indexación
   En Search Console, al menos la home debería pasar de:

   Descubierta: actualmente sin indexar
   a:

   Indexada
   o como mínimo:

   Rastreada: actualmente sin indexar

   Rastreada: actualmente sin indexar

2. Primeras impresiones orgánicas
   No necesariamente muchos clicks todavía, pero sí queremos ver impresiones para búsquedas relacionadas con:

   LambertWorks
   handyman Plymouth Meeting
   honey do list handyman
   drywall repair Plymouth Meeting

3. Primeras señales de contacto
   En GA4 queremos ver si aparece:

   generate_lead

   aunque sea con pocos eventos. Eso confirma que email, WhatsApp o formulario están generando acciones medibles.

Cómo validar si vamos por buen camino:

En Search Console
Revisar:

Indexing > Pages

Y confirmar cuántas URLs están indexadas.

Luego inspeccionar:

https://lambertworks.us/
https://lambertworks.us/blog/handyman-plymouth-meeting-pa/
https://lambertworks.us/blog/drywall-repair-plymouth-meeting-pa/

Buen camino:

- Google ya las rastreó.
- No hay bloqueo por robots.
- Google acepta la canonical.
- Algunas URLs aparecen indexadas.

Mala señal:

- Sigue Último rastreo: N/D después de 15 días.
- Sitemap no pudo leerse.
- Google reporta noindex, error de servidor, redirección rara o canonical diferente.

En Search Console Performance
Comparar contra baseline:

Clicks: 0
Impressions: 0
CTR: N/A
Position: N/A

Buen camino:

- Impressions pasan de 0 a cualquier número mayor que 0.
- Aparecen queries locales o de marca.
- Alguna página empieza a tener posición promedio.

No te preocupes si clicks siguen en 0 al inicio. Para un dominio nuevo, primero queremos impresiones.

En Google Analytics
Comparar contra baseline:

Usuarios activos: 28
Sesiones: 32
Page views: 35
Organic Search: 0
generate_lead: 0

Buen camino:

- Organic Search pasa de 0 a 1+.
- Las páginas de blog reciben visitas.
- El tiempo de interacción mejora sobre los 2-3 s.
- Aparece algún generate_lead.

Mala señal:

- Todo el tráfico sigue siendo direct/social.
- Organic Search sigue en 0.
- No aparecen eventos generate_lead después de probar clicks reales.

Checklist Práctico Para El Día 15

1. Buscar:

   site:lambertworks.us

2. Revisar Search Console:

   Pages indexed
   Sitemap read successfully
   Performance > Queries
   Performance > Pages

3. Revisar GA4:

   Traffic acquisition > Organic Search
   Engagement > Landing pages
   Events > generate_lead

4. Comparar con el archivo:

   docs/seo-baseline-2026-05-26.md

Si en 15 días vemos indexación + impresiones, vamos bien. Si además aparece tráfico orgánico o generate_lead, mejor. Si no hay rastreo todavía, el siguiente paso sería revisar logs de Nginx para confirmar si Googlebot está
entrando y qué respuesta recibe.