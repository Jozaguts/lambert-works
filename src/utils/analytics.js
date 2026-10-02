const allowedKeys = new Set(["placement", "article_slug", "platform", "contact_method", "lead_method", "project_type", "currency", "value", "transport_type"]);
const projectTypes = new Set(["DRYWALL REPAIR", "INTERIOR PAINTING", "CONCRETE WORK", "CARPENTRY", "BASEMENT REMODELING", "OUTDOOR UPGRADES"]);

export const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined") return;
  // Never send form names, emails, locations or free-text project details.
  const safeParams = Object.fromEntries(Object.entries(params).filter(([key]) => allowedKeys.has(key)));
  if (safeParams.project_type && !projectTypes.has(safeParams.project_type)) {
    safeParams.project_type = "other";
  }
  if (typeof window.gtag === "function") window.gtag("event", eventName, safeParams);
  if (typeof window.umami?.track === "function") window.umami.track(eventName, safeParams);
};

// An estimate-request intent, not proof that a mailto message was delivered.
export const trackLead = (method, params = {}) => {
  trackEvent("generate_lead", {
    currency: "USD",
    transport_type: "beacon",
    value: 0,
    lead_method: method,
    ...params,
  });
};

export const trackContactClick = (method, params = {}) => {
  trackEvent("contact_click", { contact_method: method, ...params });
};
