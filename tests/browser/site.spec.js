import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const slugs = ["handyman-plymouth-meeting-pa", "drywall-repair-plymouth-meeting-pa", "basement-remodeling-plymouth-meeting-pa", "deck-patio-repair-whitemarsh-conshohocken", "wood-deck-staining-plymouth-meeting-pa", "basement-ceiling-painting-plymouth-meeting-pa"];

test.beforeEach(async ({ page }) => {
  await page.route(/googletagmanager\.com|google-analytics\.com/, (route) => route.abort());
});

for (const path of ["/", ...slugs.map((slug) => `/blog/${slug}/`)]) {
  test(`static HTML hydrates without errors: ${path}`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error" && /hydrat|Minified React error/.test(message.text())) errors.push(message.text());
    });
    await page.goto(path);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
    await page.locator("footer, #contact").first().scrollIntoViewIfNeeded().catch(() => {});
    await expect.poll(() => errors).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

for (const path of ["/", "/blog/drywall-repair-plymouth-meeting-pa/"]) {
  test(`mobile accessibility: ${path}`, async ({ page }) => {
    await page.goto(path);
    await page.locator("main").waitFor();
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(results.violations.map(({ id, nodes }) => ({ id, targets: nodes.map((node) => node.target) }))).toEqual([]);
  });
}

test("article remains readable with JavaScript disabled", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/blog/drywall-repair-plymouth-meeting-pa/");
  await expect(page.locator("h1")).toContainText("Drywall");
  await expect(page.getByRole("heading", { name: "Request a local estimate" })).toBeVisible();
  await context.close();
});

test("client navigation restores home SEO and renders contact navigation", async ({ page }) => {
  await page.goto("/blog/drywall-repair-plymouth-meeting-pa/");
  await page.getByRole("link", { name: "Back to LambertWorks" }).click();
  await expect(page).toHaveTitle("Handyman in Plymouth Meeting, PA | LambertWorks");
  await expect(page.locator("#blog-post-schema")).toHaveCount(0);
  await page.getByRole("link", { name: "Contact", exact: true }).first().click();
  await expect(page.locator("#contact")).toBeInViewport();
});

test("repair notes support native scrolling and keyboard-accessible controls", async ({ page }) => {
  await page.goto("/");
  const carousel = page.getByRole("region", { name: "Home repair notes" });
  await carousel.scrollIntoViewIfNeeded();
  const list = carousel.getByRole("list");
  await carousel.getByRole("button", { name: "Next Home repair notes" }).click();
  await expect.poll(() => list.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
  await expect(carousel.getByRole("button", { name: "Previous Home repair notes" })).toBeEnabled();
});


test("desktop home is accessible and images load with correct dimensions", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(results.violations.map(({ id }) => id)).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("local preview does not send visits to production GA4", async ({ page }) => {
  const requests = [];
  page.on("request", (request) => {
    if (/googletagmanager\.com|google-analytics\.com/.test(request.url())) requests.push(request.url());
  });
  await page.goto("/");
  expect(await page.evaluate(() => typeof window.gtag)).toBe("undefined");
  expect(requests).toEqual([]);
});
