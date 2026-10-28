// Copy this file to <your-slug>.js, fill it in, then add it to index.js.
// This template itself is not imported anywhere.

const post = {
  title: "Your Post Title",
  // Must match the file name and the image name. Lowercase words joined by hyphens.
  slug: "your-post-slug",
  // One or two sentences, shown on the blog cards.
  excerpt: "A short summary of the post.",
  // One of: Certifications, Compliance, Tax, Digital Marketing, Tenders, Business Advisory
  category: "Compliance",
  author: "Euroasia Team",
  // YYYY-MM-DD. Newest posts appear first.
  publishedAt: "2026-01-01",
  featuredImage: "/images/blog/your-post-slug.webp",

  // SEO
  metaTitle: "Title shown in Google results (about 60 characters)",
  metaDescription: "Description shown in Google results (about 155 characters).",
  keywords: "keyword one, keyword two, keyword three",

  // Article body, written in Markdown.
  // Don't type a backtick or a dollar sign followed by { here; write \` and \${ instead.
  content: `
Opening paragraph that says what the reader will learn.

## First Section

Text with **bold**, [a link to a service](/services) and lists:

- Point one
- Point two

## Conclusion

Closing paragraph. [Contact us](/contact) for help.
`,
};

export default post;
