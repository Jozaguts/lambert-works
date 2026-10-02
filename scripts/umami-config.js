export function umamiTags(env) {
  const src = env.VITE_UMAMI_SCRIPT_URL;
  const id = env.VITE_UMAMI_WEBSITE_ID;
  if (!src && !id) return [];
  if (!src || !id) throw new Error("Set both VITE_UMAMI_SCRIPT_URL and VITE_UMAMI_WEBSITE_ID.");
  const url = new URL(src);
  if (url.protocol !== "https:" || !/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(id)) {
    throw new Error("Umami requires an HTTPS script URL and a valid website UUID.");
  }
  return [{ tag: "script", attrs: { defer: true, src: url.href, "data-website-id": id, "data-domains": "lambertworks.us,www.lambertworks.us" }, injectTo: "head" }];
}
