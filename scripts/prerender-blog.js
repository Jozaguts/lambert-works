import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { render, blogPosts } from "../.ssg/entry-server.js";
import images from "../src/data/images.json" with { type: "json" };
import { getPageSeo } from "../src/utils/seo.js";

const manifest = JSON.parse(readFileSync("dist/.vite/manifest.json", "utf8"));
const template = readFileSync("dist/index.html", "utf8");
const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

for (const path of ["/", ...blogPosts.map((post) => `/blog/${post.slug}/`)]) {
  const post = blogPosts.find((item) => path === `/blog/${item.slug}/`);
  const seo = getPageSeo(post);
  const assetTags = new Set();
  const seenChunks = new Set();
  function preloadChunk(key) {
    if (seenChunks.has(key)) return;
    seenChunks.add(key);
    const chunk = manifest[key];
    if (!chunk) throw new Error(`Missing route chunk: ${key}`);
    assetTags.add(`<link rel="modulepreload" crossorigin href="/${chunk.file}" />`);
    for (const css of chunk.css ?? []) assetTags.add(`<link rel="stylesheet" href="/${css}" />`);
    for (const imported of chunk.imports ?? []) preloadChunk(imported);
  }
  preloadChunk(post ? "src/pages/BlogPost.jsx" : "src/pages/Home.jsx");
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(seo.title)}</title>`);
  html = html.replace("</head>", `${[...assetTags].filter((tag) => !html.includes(tag.match(/href="([^"]+)"/)[1])).join("\n")}\n</head>`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${seo.canonical}$2`);
  for (const [name, value] of Object.entries(seo.meta)) {
    const attribute = name.startsWith("og:") ? "property" : "name";
    const pattern = new RegExp(`(<meta ${attribute}="${name}"\\s+content=")[^"]*(")`);
    html = html.replace(pattern, () => `<meta ${attribute}="${name}" content="${escape(value)}"`);
  }
  if (seo.schema) {
    html = html.replace("</head>", `<script id="blog-post-schema" type="application/ld+json">${JSON.stringify(seo.schema).replaceAll("<", "\\u003c")}</script>\n</head>`);
  }
  if (!post) {
    const hero = images["collage.webp"];
    html = html.replace("</head>", `<link rel="preload" as="image" href="${hero.avifSrc}" type="image/avif" imagesrcset="${hero.avifSrcSet}" imagesizes="(max-width: 1024px) 100vw, 536px" fetchpriority="high" />\n</head>`);
  }
  const content = await render(path);
  if (!/<h1[\s>]/.test(content) || !/<main[\s>]/.test(content)) {
    throw new Error(`Incomplete static render: ${path}`);
  }
  html = html.replace(/<div id="root"[^>]*><\/div>/, () => `<div id="root">${content}</div>`);
  const output = join("dist", path, "index.html");
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, html);
  console.log(`Prerendered ${path}`);
}
