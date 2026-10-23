// Where an enquiry came from. Shown as "Came from" in the enquiry email,
// so you can see which contact prompt brings in the most enquiries.
export const LEAD_SOURCES = {
  website: "Website",
  "contact-page": "Contact page",
  popup: "Popup (button)",
  "popup-timed": "Popup (timed)",
  "popup-exit": "Popup (exit)",
  "mobile-bar": "Mobile bar",
};

export const isLeadSource = (value) =>
  typeof value === "string" &&
  Object.prototype.hasOwnProperty.call(LEAD_SOURCES, value);

export const leadSourceLabel = (value) =>
  LEAD_SOURCES[value] || value || "Website";
