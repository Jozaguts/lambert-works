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
      'Need help with a honey-do list in Plymouth Meeting, PA? LambertWorks handles drywall, paint, trim, repairs, patios, and home projects near Blue Bell and Skippack.',
    keywords:
      'honey do list handyman Plymouth Meeting PA, handyman Plymouth Meeting PA, home repair Plymouth Meeting PA, local handyman Montgomery County, handyman near Blue Bell PA, handyman near Skippack PA',
  },
  {
    slug: 'drywall-repair-plymouth-meeting-pa',
    seoTitle: 'Drywall Repair Plymouth Meeting, PA | LambertWorks',
    title: 'Drywall Repair in Plymouth Meeting, PA: Patch, Sand, Paint, and Finish',
    metaDescription:
      'LambertWorks provides drywall and sheetrock repair in Plymouth Meeting, PA, including patches, sanding, paint prep, and clean wall finishing near Blue Bell and Skippack.',
    keywords:
      'drywall repair Plymouth Meeting PA, sheetrock repair Plymouth Meeting PA, wall repair Montgomery County, drywall patch and paint',
  },
  {
    slug: 'basement-remodeling-plymouth-meeting-pa',
    seoTitle: 'Basement Remodeling Plymouth Meeting, PA | LambertWorks',
    title: 'Basement Remodeling Near Plymouth Meeting, PA Without Wasting Space',
    metaDescription:
      'Plan a practical basement remodel near Plymouth Meeting, PA with drywall, paint, trim, storage, and finishing work by LambertWorks, serving Blue Bell and Skippack.',
    keywords:
      'basement remodeling Plymouth Meeting PA, basement finishing Plymouth Meeting PA, basement drywall, basement paint and trim',
  },
  {
    slug: 'deck-patio-repair-whitemarsh-conshohocken',
    seoTitle: 'Deck & Patio Repair Near Plymouth Meeting, PA | LambertWorks',
    title: 'Deck, Patio, and Exterior Repairs Around Whitemarsh and Conshohocken',
    metaDescription:
      'LambertWorks handles deck, patio, concrete, steps, and exterior repair projects near Plymouth Meeting, PA, Whitemarsh Township, and Conshohocken.',
    keywords:
      'patio repair Plymouth Meeting PA, deck repair Whitemarsh, exterior handyman Conshohocken, concrete repair Montgomery County',
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

function buildBlogSchema(post, canonicalUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: SOCIAL_IMAGE,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
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
  const schemaBlock = `<script type="application/ld+json">\n    ${JSON.stringify(schema, null, 2).split('\n').join('\n    ')}\n    </script>`;
  return html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/s, schemaBlock);
}

const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf-8');

for (const post of posts) {
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
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
  console.log(`  ✓  /blog/${post.slug}`);
}

console.log(`\nPrerender complete — ${posts.length} blog pages written to dist/blog/`);
