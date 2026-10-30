/*
  Diwali seasonal layer — the one place to switch it on, off or re-date it.

  Diwali mode is ON when `enabled` is true AND any of:
    - today falls inside startDate…endDate
    - `forceDiwali` is true
    - the page was opened with ?diwali=true (lasts for that browser tab;
      ?diwali=false turns it back off)
  Otherwise the site looks exactly as it does today.

  What it adds:
    - the "light the diya" intro, every time the home page is opened or
      reloaded (a full-screen opening, skippable with any click or key)
    - the offer bar at the top of every public page
    - a sparkler cursor and a small diya in the corner, on computers with a mouse
    - a greeting in the footer
*/
export const DIWALI = {
  /* Master switch. `false` removes the whole feature, previews included. */
  enabled: true,

  /* Preview override: show Diwali even outside the dates below. */
  forceDiwali: true,

  /* First and last day, inclusive, as read on a clock in `timeZone`. Diwali is Sun 8 Nov 2026. */
  startDate: "2026-11-01",
  endDate: "2026-11-11",
  timeZone: "Asia/Kolkata",

  /* Footer greeting (the ✦ marks are added around it). */
  greeting: "शुभ दीपावली",

  /* Offer bar background — see public/images. The bar falls back to a navy-and-gold gradient. */
  offerImage: "/images/diwali-offer-bg.png",
};
