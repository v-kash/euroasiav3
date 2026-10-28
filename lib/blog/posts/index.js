// Built-in blog posts, one file per post in this folder.
// The blog page, post pages, related posts, homepage section and sitemap all read from here.
//
// To add a post:
//   1. Copy _template.js to <your-slug>.js and fill it in.
//   2. Save its image as public/images/blog/<your-slug>.webp.
//   3. Import it below and add it to the `posts` list.
//
// Order in the list doesn't matter: posts are sorted by publishedAt, newest first.

import trademarkVsCopyright from "./trademark-vs-copyright-india";
import digitalSignatureCertificate from "./digital-signature-certificate-dsc-guide";
import taxExemption80Iac from "./80-iac-tax-exemption-guide";
import msmeUdyamRegistration from "./msme-udyam-registration-benefits";
import digitalMarketingB2b from "./digital-marketing-b2b-strategies";
import startupIndiaRegistration from "./startup-india-registration-guide";
import zedCertification from "./zed-certification-msme-guide";
import gemPortalRegistration from "./gem-portal-registration-guide";

const posts = [
  trademarkVsCopyright,
  digitalSignatureCertificate,
  taxExemption80Iac,
  msmeUdyamRegistration,
  digitalMarketingB2b,
  startupIndiaRegistration,
  zedCertification,
  gemPortalRegistration,
];

export const allPosts = [...posts].sort(
  (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
);

export function getPost(slug) {
  return allPosts.find((post) => post.slug === slug);
}

// Card fields only, so the full article text isn't sent to the browser.
function toCard({ content, metaTitle, metaDescription, keywords, ...card }) {
  return card;
}

export function getPostCards() {
  return allPosts.map(toCard);
}

// Posts from the same category first, then the latest of the rest.
export function getRelatedPosts(slug, category, limit = 3) {
  const others = allPosts.filter((post) => post.slug !== slug);
  return [
    ...others.filter((post) => post.category === category),
    ...others.filter((post) => post.category !== category),
  ]
    .slice(0, limit)
    .map(toCard);
}
