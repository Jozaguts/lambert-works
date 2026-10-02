import test from "node:test";
import assert from "node:assert/strict";
import { umamiTags } from "../scripts/umami-config.js";

test("Umami stays disabled without configuration", () => {
  assert.deepEqual(umamiTags({}), []);
});

test("Umami validates paired HTTPS configuration", () => {
  assert.throws(() => umamiTags({ VITE_UMAMI_SCRIPT_URL: "https://cloud.umami.is/script.js" }));
  assert.throws(() => umamiTags({ VITE_UMAMI_SCRIPT_URL: "javascript:alert(1)", VITE_UMAMI_WEBSITE_ID: "test" }));
  const tags = umamiTags({ VITE_UMAMI_SCRIPT_URL: "https://cloud.umami.is/script.js", VITE_UMAMI_WEBSITE_ID: "11111111-2222-4333-8444-555555555555" });
  assert.equal(tags[0].attrs["data-domains"], "lambertworks.us,www.lambertworks.us");
  assert.equal(tags[0].attrs.defer, true);
});
