import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const script = readFileSync("index.html", "utf8").match(/<script>([\s\S]*?)<\/script>/)[1];
for (const hostname of ["lambertworks.us", "www.lambertworks.us", "localhost", "127.0.0.1"]) {
  test(`GA4 domain guard: ${hostname}`, () => {
    const scripts = [];
    const window = { location: { hostname } };
    runInNewContext(script, { window, document: { createElement: () => ({}), head: { appendChild: (tag) => scripts.push(tag) } } });
    const production = hostname.includes("lambertworks.us");
    assert.equal(scripts.length, production ? 1 : 0);
    if (production) {
      assert.equal(scripts[0].async, true);
      assert.equal(window.dataLayer[1][0], "config");
      assert.equal(window.dataLayer[1][1], "G-670S7XVRPK");
    } else assert.equal(window.gtag, undefined);
  });
}
