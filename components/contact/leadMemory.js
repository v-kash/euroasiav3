// What this browser remembers about the visitor, so automatic popups stay polite.
// Storage can be blocked (private mode, strict settings), so every call is guarded
// and a failure just means "nothing remembered".

const DAY = 24 * 60 * 60 * 1000;
const KEYS = {
  leadSent: "ea_lead_sent_at", // localStorage: they sent an enquiry
  autoShown: "ea_auto_popup_at", // localStorage: an automatic popup was shown
  openedThisVisit: "ea_popup_opened", // sessionStorage: they opened the popup themselves
};

function read(storage, key) {
  try {
    return window[storage].getItem(key);
  } catch {
    return null;
  }
}

function write(storage, key, value) {
  try {
    window[storage].setItem(key, value);
  } catch {
    // ignore: storage unavailable
  }
}

const within = (key, days) => {
  const at = Number(read("localStorage", key));
  return at > 0 && Date.now() - at < days * DAY;
};

export const rememberLeadSent = () =>
  write("localStorage", KEYS.leadSent, String(Date.now()));
export const leadSentWithin = (days) => within(KEYS.leadSent, days);

export const rememberAutoPopup = () =>
  write("localStorage", KEYS.autoShown, String(Date.now()));
export const autoPopupWithin = (days) => within(KEYS.autoShown, days);

export const rememberOpenedThisVisit = () =>
  write("sessionStorage", KEYS.openedThisVisit, "1");
export const openedThisVisit = () =>
  read("sessionStorage", KEYS.openedThisVisit) === "1";
