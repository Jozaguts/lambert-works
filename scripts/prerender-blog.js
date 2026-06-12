import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE_URL = 'https://lambertworks.us';
const SOCIAL_IMAGE = `${SITE_URL}/og-social.jpg`;

const posts = [
  {
    slug: 'handyman-plymouth-meeting-pa',
    seoTitle: 'Honey-Do List Handyman Plymouth Meeting, PA | LambertWorks',
    title: 'Honey-Do List Handyman in Plymouth Meeting, PA',
    metaDescription:
      'Need a handyman in Plymouth Meeting, PA? LambertWorks helps with honey-do lists, drywall, trim, paint touch-ups, installs, patios, and home repairs.',
    keywords:
      'honey do list handyman Plymouth Meeting PA, handyman Plymouth Meeting PA, home repair Plymouth Meeting PA, local handyman Montgomery County, handyman near Blue Bell PA, handyman near Skippack PA, small home repairs Plymouth Meeting, home repair list Montgomery County, drywall and trim repair Plymouth Meeting',
    datePublished: '2026-05-09',
    dateModified: '2026-06-12',
  },
  {
    slug: 'drywall-repair-plymouth-meeting-pa',
    seoTitle: 'Drywall Repair Plymouth Meeting, PA | Patch & Paint Prep',
    title: 'Drywall Repair in Plymouth Meeting, PA: Patch, Sand, and Paint Prep',
    metaDescription:
      'Need drywall repair in Plymouth Meeting, PA? LambertWorks handles wall patches, sanding, paint prep, and sheetrock repairs near Blue Bell and Skippack.',
    keywords:
      'drywall repair Plymouth Meeting PA, sheetrock repair Plymouth Meeting PA, wall repair Plymouth Meeting PA, drywall patch and paint Plymouth Meeting, drywall patch repair Montgomery County, drywall repair near Blue Bell PA, drywall repair near Skippack PA, drywall sanding and paint prep, nail pop repair, ceiling drywall patch',
    datePublished: '2026-05-09',
    dateModified: '2026-06-12',
  },
  {
    slug: 'basement-remodeling-plymouth-meeting-pa',
    seoTitle: 'Basement Remodeling Plymouth Meeting, PA | Practical Finishing',
    title: 'Basement Remodeling Near Plymouth Meeting, PA Without Wasting Space',
    metaDescription:
      'Plan basement remodeling near Plymouth Meeting, PA with drywall, paint, trim, storage, and practical finishing work by LambertWorks.',
    keywords:
      'basement remodeling Plymouth Meeting PA, basement finishing Plymouth Meeting PA, basement drywall Plymouth Meeting, basement paint and trim, basement repair Montgomery County, basement finishing near Blue Bell PA, basement remodeling near Skippack PA, usable basement space, basement storage improvements, basement drywall repair, basement trim and paint',
    datePublished: '2026-05-09',
    dateModified: '2026-06-12',
  },
  {
    slug: 'deck-patio-repair-whitemarsh-conshohocken',
    seoTitle: 'Deck & Patio Repair Near Plymouth Meeting, PA | Exterior Handyman',
    title: 'Deck, Patio, and Exterior Repairs Around Whitemarsh and Conshohocken',
    metaDescription:
      'Plan deck, patio, step, railing, concrete touch-up, and exterior trim repairs near Plymouth Meeting, Whitemarsh, and Conshohocken.',
    keywords:
      'patio repair Plymouth Meeting PA, deck repair Whitemarsh, exterior handyman Conshohocken, concrete repair Montgomery County, deck repair near Plymouth Meeting PA, patio repair near Whitemarsh Township, exterior trim repair Plymouth Meeting, exterior step repair Conshohocken, railing repair Montgomery County, deck board repair Whitemarsh Township, outdoor handyman near Plymouth Meeting, exterior home repair Montgomery County PA',
    datePublished: '2026-05-09',
    dateModified: '2026-06-12',
  },
];

// Replace content="..." inside a specific meta tag identified by name or property attribute.
// Works for both single-line and multi-line meta tags (uses [^>]* which crosses newlines).
function setMetaAttr(html, attrName, attrValue, newContent) {
  const escaped = attrValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `(<meta[^>]*${attrName}="${escaped}"[^>]*content=")[^"]*(")|(<meta[^>]*content=")[^"]*("[^>]*${attrName}="${escaped}"[^>]*/?>)`,
    's',
  );
  return html.replace(re, (match, p1, p2, p3, p4) => {
    if (p1 !== undefined) return `${p1}${newContent}${p2}`;
    return `${p3}${newContent}${p4}`;
  });
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
}

function setCanonical(html, url) {
  return html.replace(/(<link rel="canonical" href=")[^"]*(")/s, `$1${url}$2`);
}

function getPostUrl(post) {
  return `${SITE_URL}/blog/${post.slug}/`;
}

function buildBlogSchema(post, canonicalUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: SOCIAL_IMAGE,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    keywords: post.keywords,
    author: {
      '@type': 'Organization',
      name: 'LambertWorks',
      '@id': `${SITE_URL}/#business`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LambertWorks',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.svg` },
    },
    areaServed: ['Plymouth Meeting, PA', 'Blue Bell, PA', 'Skippack, PA', 'Montgomery County, PA'],
  };
}

function replaceJsonLd(html, schema) {
  const schemaBlock = `<!-- BlogPosting Schema -->\n    <script type="application/ld+json">\n    ${JSON.stringify(schema, null, 2).split('\n').join('\n    ')}\n    </script>`;
  return html.replace(/<!--[^\n]*Schema[^\n]*-->\n\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/s, schemaBlock);
}

const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf-8');

for (const post of posts) {
  const canonicalUrl = getPostUrl(post);
  let html = baseHtml;

  html = setTitle(html, post.seoTitle);
  html = setMetaAttr(html, 'name', 'description', post.metaDescription);
  html = setMetaAttr(html, 'name', 'keywords', post.keywords);
  html = setCanonical(html, canonicalUrl);

  html = setMetaAttr(html, 'property', 'og:type', 'article');
  html = setMetaAttr(html, 'property', 'og:title', post.seoTitle);
  html = setMetaAttr(html, 'property', 'og:description', post.metaDescription);
  html = setMetaAttr(html, 'property', 'og:url', canonicalUrl);
  html = setMetaAttr(html, 'property', 'og:image', SOCIAL_IMAGE);
  html = setMetaAttr(html, 'property', 'og:image:alt', post.title);

  html = setMetaAttr(html, 'name', 'twitter:title', post.seoTitle);
  html = setMetaAttr(html, 'name', 'twitter:description', post.metaDescription);
  html = setMetaAttr(html, 'name', 'twitter:image', SOCIAL_IMAGE);
  html = setMetaAttr(html, 'name', 'twitter:image:alt', post.title);

  html = replaceJsonLd(html, buildBlogSchema(post, canonicalUrl));

  const outDir = join(DIST, 'blog', post.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  console.log(`  ✓  /blog/${post.slug}/`);
}

console.log(`\nPrerender complete — ${posts.length} blog pages written to dist/blog/`);
