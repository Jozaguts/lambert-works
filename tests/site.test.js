import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const home = () => readFileSync("dist/index.html", "utf8");
const slugs = ["handyman-plymouth-meeting-pa", "drywall-repair-plymouth-meeting-pa", "basement-remodeling-plymouth-meeting-pa", "deck-patio-repair-whitemarsh-conshohocken", "wood-deck-staining-plymouth-meeting-pa", "basement-ceiling-painting-plymouth-meeting-pa"];

test("home ships readable content, one H1 and one main without JavaScript", () => {
  const html = home();
  assert.match(html, /<h1[^>]*>\s*Handyman in Plymouth Meeting, PA\s*<\/h1>/);
  assert.equal((html.match(/<main[\s>]/g) || []).length, 1);
  assert.match(html, /href="\/blog\/drywall-repair-plymouth-meeting-pa\/"/);
  assert.match(html, /<title>Handyman in Plymouth Meeting, PA \| LambertWorks<\/title>/);
  const description = html.match(/name="description"\s+content="([^"]+)"/)[1];
  assert.ok(description.length <= 160);
  assert.match(description, /Free estimate/);
  assert.doesNotMatch(html, /unpkg.com\/cally/);
});

for (const slug of slugs) {
  test(`${slug} ships its own complete article and canonical`, () => {
    const html = readFileSync(`dist/blog/${slug}/index.html`, "utf8");
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.equal((html.match(/<main[\s>]/g) || []).length, 1);
    assert.match(html, /Request a local estimate/);
    assert.match(html, new RegExp(`rel="canonical" href="https://lambertworks.us/blog/${slug}/"`));
    assert.match(html, /"@type":"BlogPosting"/);
    const description = html.match(/name="description"\s+content="([^"]+)"/)[1];
    assert.ok(description.length <= 160);
  });
}

test("hero uses responsive modern images, explicit dimensions and high priority", () => {
  const html = home();
  const hero = html.match(/<img[^>]+fetchPriority="high"[^>]*>/i)?.[0];
  assert.ok(hero);
  assert.match(hero, /srcSet="[^"]+\.webp/);
  assert.match(hero, /width="\d+"/);
  assert.match(hero, /height="\d+"/);
  assert.match(html, /rel="preload" as="image"/);
});

test("deployment runs the same complete build", () => {
  const pkg = JSON.parse(readFileSync("package.json"));
  assert.match(pkg.scripts.deploy, /^pnpm build &&/);
});

test("all links have destinations and icon links have names", () => {
  for (const link of home().match(/<a\s[^>]*>/g) || []) {
    assert.match(link, /href="[^"]+"/);
    assert.doesNotMatch(link, /href="#!"/);
  }
  assert.match(home(), /aria-label="Visit LambertWorks on Instagram"/);
});

test("contact inputs have accessible labels", () => {
  for (const input of home().match(/<input\s[^>]*>/g) || []) {
    assert.match(input, /aria-label="[^"]+"/);
  }
});

test("fonts are self-hosted and every image has dimensions and responsive sources", () => {
  assert.doesNotMatch(home(), /fonts\.googleapis\.com/);
  for (const path of ["dist/index.html", ...slugs.map((slug) => `dist/blog/${slug}/index.html`)]) {
    const html = readFileSync(path, "utf8");
    for (const img of html.match(/<img\s[^>]*>/g) || []) {
      assert.match(img, /width="\d+"/);
      assert.match(img, /height="\d+"/);
      assert.match(img, /srcSet="[^"]+\.webp/);
    }
  }
});

test("static HTML includes route CSS before JavaScript runs", () => {
  assert.match(home(), /<link rel="stylesheet" href="\/assets\/Home-[^"]+\.css"/);
});

test("hero offers AVIF with a WebP fallback", () => {
  assert.match(home(), /<source[^>]+type="image\/avif"[^>]+srcSet="[^"]+\.avif/);
});

test("home and honey-do guide have distinct titles, headings and intent", () => {
  const article = readFileSync("dist/blog/handyman-plymouth-meeting-pa/index.html", "utf8");
  const title = (html) => html.match(/<title>([^<]*)<\/title>/)[1];
  assert.notEqual(title(home()), title(article));
  assert.equal(title(article), "Honey-Do List Repairs in Plymouth Meeting, PA | LambertWorks");
  assert.match(article, /<h1[^>]*>\s*Honey-Do List Repairs in Plymouth Meeting, PA\s*<\/h1>/);
  assert.match(article, /Organize your home repair list/);
});

test("global CSS avoids duplicate and unused theme bundles", () => {
  const href = home().match(/href="(\/assets\/index-[^"]+\.css)"/)[1];
  assert.ok(readFileSync(`dist${href}`).byteLength < 80000);
});
