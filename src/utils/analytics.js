export const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
};

export const trackLead = (method, params = {}) => {
  trackEvent("generate_lead", {
    currency: "USD",
    transport_type: "beacon",
    value: 0,
    lead_method: method,
    ...params,
  });
};
