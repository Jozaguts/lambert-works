import sharp from "sharp";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, extname } from "node:path";

// Only process images referenced by the app, plus the existing public blog gallery.
const files = new Set();
async function scan(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${item.name}`;
    if (item.isDirectory()) await scan(path);
    else if (/\.(jsx|js)$/.test(path)) {
      const source = await readFile(path, "utf8");
      for (const match of source.matchAll(/images\["([^"]+\.(?:jpg|png|webp))"\]/g)) {
        files.add(match[1] === "logo.png" ? "src/assets/logo.png" : `src/assets/images/${match[1]}`);
      }
      for (const match of source.matchAll(/(?:assets\/images\/|assets\/)([^"\n]+\.(?:jpg|png|webp))/g)) {
        files.add(match[1] === "logo.png" ? "src/assets/logo.png" : `src/assets/images/${match[1]}`);
      }
    }
  }
}
await scan("src");
for (const file of await readdir("public/images")) {
  if (/\.(jpg|png|webp)$/i.test(file)) files.add(`public/images/${file}`);
}
await mkdir("public/images/optimized", { recursive: true });
const manifest = {};
for (const file of [...files].sort()) {
  const name = basename(file);
  const key = file.startsWith("public/") ? file.replace("public", "") : name;
  const stem = name.slice(0, -extname(name).length).replaceAll(".", "-");
  const metadata = await sharp(file).rotate().metadata();
  const rotated = metadata.autoOrient ?? metadata;
  const width = Math.min(rotated.width, 1280);
  const widths = [...new Set([...(name === "logo.png" ? [64, 128] : []), 320, 640, 960, width].filter((size) => size <= width))].sort((a, b) => a - b);
  const variants = [];
  for (const size of widths) {
    const url = `/images/optimized/${stem}-${size}.webp`;
    const info = await sharp(file).rotate().resize({ width: size, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`public${url}`);
    variants.push({ src: url, width: info.width, height: info.height });
  }
  const largest = variants.at(-1);
  manifest[key] = { ...largest, srcSet: variants.map((variant) => `${variant.src} ${variant.width}w`).join(", ") };
  if (name === "collage.webp") {
    const avifVariants = [];
    for (const size of widths) {
      const url = `/images/optimized/${stem}-${size}.avif`;
      await sharp(file).rotate().resize({ width: size, withoutEnlargement: true }).avif({ quality: 48, effort: 5 }).toFile(`public${url}`);
      avifVariants.push(`${url} ${size}w`);
    }
    manifest[key].avifSrc = `/images/optimized/${stem}-${width}.avif`;
    manifest[key].avifSrcSet = avifVariants.join(", ");
  }
}
await mkdir("src/data", { recursive: true });
await writeFile("src/data/images.json", `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Optimized ${files.size} source images.`);
