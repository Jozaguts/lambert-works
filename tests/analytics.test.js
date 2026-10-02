import test from "node:test";
import assert from "node:assert/strict";
import { trackContactClick, trackLead, trackEvent } from "../src/utils/analytics.js";

test("contact clicks are not conversions and lead payload excludes personal fields", () => {
  const calls = [];
  globalThis.window = { gtag: (...args) => calls.push(args) };
  trackContactClick("email", { placement: "footer" });
  trackLead("contact_form", { project_type: "DRYWALL REPAIR", name: "Private Name", email: "private@example.com", details: "Private details" });
  assert.equal(calls[0][1], "contact_click");
  assert.equal(calls[1][1], "generate_lead");
  assert.equal(calls[1][2].name, undefined);
  assert.equal(calls[1][2].email, undefined);
  assert.equal(calls[1][2].details, undefined);
  assert.equal(calls[1][2].project_type, "DRYWALL REPAIR");
  delete globalThis.window;
});

test("Umami receives events even without GA4", () => {
  const calls = [];
  globalThis.window = { umami: { track: (...args) => calls.push(args) } };
  trackEvent("social_click", { platform: "instagram", placement: "floating_button" });
  assert.equal(calls[0]?.[0], "social_click");
  delete globalThis.window;
});

test("analytics is safe with no browser or provider", () => {
  delete globalThis.window;
  assert.doesNotThrow(() => trackLead("contact_form"));
  globalThis.window = {};
  assert.doesNotThrow(() => trackEvent("social_click"));
  delete globalThis.window;
});
