// styles/fonts.js
// The two new fonts for the redesign, self-hosted by next/font (no extra
// request to Google, no layout shift). Your existing Plus Jakarta Sans +
// Bebas Neue still load from globals.css, so nothing else on the site changes.
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";

export const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const ledgerFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-ledger",
  display: "swap",
});