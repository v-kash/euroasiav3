# Blog Guide: How to Write and Publish a Blog Post

This guide covers everything about the Euroasia blog: how it works, the AI skills we use to write posts, and the exact steps to publish a new one.

**Short version:** one new post = one new file in `lib/blog/posts/` + one image + two lines in `lib/blog/posts/index.js`.

---

## 1. How the Blog Works

All blog posts live in one folder:

```
lib/blog/posts/
  index.js            ← list of all posts (you add new posts here)
  _template.js        ← copy this file to start a new post
  80-iac-tax-exemption-guide.js
  msme-udyam-registration-benefits.js
  ...one file per post
```

Images live in `public/images/blog/`.

When you add a post to `index.js`, it automatically shows up in all of these places:

| Place | What it shows |
|---|---|
| `/blog` | Blog list page (newest first, with search and category filter) |
| `/blog/<slug>` | The full post page, with SEO title, description and Google Article schema |
| Homepage | "Latest News & Articles" section: the 3 newest posts |
| Bottom of every post | "Related Articles": posts from the same category first |
| `/sitemap.xml` | So Google can find the new post |

Posts are sorted by `publishedAt`, newest first. The order of the list in `index.js` doesn't matter.

> **Admin panel note:** The site also has an admin panel at `/admin/blogs` that saves posts to a MySQL database. It is not in use right now (no `DATABASE_URL` is set). If it is ever switched on, posts published there will **replace** the file-based posts on the `/blog` list page. Use one system, not both.

---

## 2. One-Time Setup (New Computer or New Claude Account)

We use [Claude Code](https://claude.com/claude-code) with a few add-on "skills" to plan and write posts.

### Skills that come with the project

These are saved in `.claude/skills/` inside this repository. When you open the project in Claude Code, they load automatically. You don't need to install anything.

| Skill | What it does | Source |
|---|---|---|
| `content-strategy` | Decides **what** to write: topics people search for, grouped by our services, scored by how likely they are to bring enquiries | [coreyhaines31/marketingskills](https://skills.sh/coreyhaines31/marketingskills/content-strategy) |
| `article-writing` | Writes the post. It cuts AI-sounding filler and never makes up facts | [affaan-m/ecc](https://skills.sh/affaan-m/ecc/article-writing) |
| `find-skills` | Searches for new skills if we ever need one | [vercel-labs/skills](https://skills.sh/vercel-labs/skills/find-skills) |

If the `.claude/skills/` folder is missing (for example, someone deleted it), reinstall the skills from inside the project folder:

```bash
npx skills add coreyhaines31/marketingskills --skill content-strategy -a claude-code -y
npx skills add affaan-m/ecc --skill article-writing -a claude-code -y
npx skills add https://github.com/vercel-labs/skills --skill find-skills -a claude-code -y
```

The file `skills-lock.json` records exactly which skills and versions we use.

### Plugin you install yourself (once per Claude account)

The SEO plugin is not stored in the project, so each person installs it once. Type these two commands **inside Claude Code**:

```
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
```

We use two of its skills:

| Skill | What it does |
|---|---|
| `/claude-seo:seo-content-brief` | Builds a keyword brief before writing: target keywords, headings, questions to answer |
| `/claude-seo:seo-content` | Reviews a finished post for quality, expertise and trust signals |

After installing, **restart Claude Code** so everything loads. To check, type `/` in Claude Code and look for `content-strategy`, `article-writing` and `claude-seo:seo-content-brief` in the list.

### Business profile

`.claude/product-marketing.md` describes our company, services, customers and content rules. The `content-strategy` skill reads it automatically. Lines marked **TODO** still need real answers from the team (common customer questions, competitors). The better this file is, the better the topic ideas.

---

## 3. Writing a New Post, Step by Step

### Fastest way

Open Claude Code in this project and say:

> Follow docs/BLOG_GUIDE.md and write a new blog post about **&lt;topic&gt;**.

Claude will run all the steps below. Read the draft carefully before publishing (see step 6).

### Step 1: Pick a topic

Skip this if you already know the topic.

> Use content-strategy to suggest 10 blog topics for Euroasia.

Good topics:
- answer **one specific question** our customers search for ("PMEGP subsidy for women entrepreneurs", "how to get ZED certification bronze level")
- connect to one of our services, so the post can link to it
- are not already covered by an existing post

### Step 2: Build the keyword brief

```
/claude-seo:seo-content-brief <your topic>
```

Keep the brief. It gives you the main keyword, the headings and the questions the post must answer.

### Step 3: Collect the facts

Before writing, gather official sources for every number, limit and date: government portals (udyamregistration.gov.in, kviconline.gov.in, startupindia.gov.in, gem.gov.in and others), notifications and circulars. Laws and scheme limits change often, so use the current ones.

The `article-writing` skill will **not** invent facts. If you don't give it sources, it will leave gaps or ask.

### Step 4: Write the draft

> Use article-writing to write the blog post from this brief. Audience: Indian MSME owners and founders. Simple English. Follow the content rules in docs/BLOG_GUIDE.md section 5. Sources: &lt;paste links&gt;

### Step 5: Add the post to the website

1. **Copy the template.** Copy `lib/blog/posts/_template.js` to `lib/blog/posts/<your-slug>.js`.
2. **Fill in every field** (see section 4) and paste the article into `content`.
3. **Add the image** as `public/images/blog/<your-slug>.webp` (see section 6).
4. **Register the post** in `lib/blog/posts/index.js`. Add an import at the top and the name in the `posts` list:

   ```js
   import pmegpWomenEntrepreneurs from "./pmegp-subsidy-women-entrepreneurs";

   const posts = [
     pmegpWomenEntrepreneurs,
     taxExemption80Iac,
     // ...
   ];
   ```

   The import name can be anything, but the text in quotes must be the exact file name (without `.js`).

### Step 6: Check it

1. Run `npm run dev` and open `http://localhost:3000/blog/<your-slug>`.
2. Check that the title, image, tables and links look right, and that the post appears on `/blog` and the homepage.
3. Review the post with the SEO plugin:
   ```
   /claude-seo:seo-content http://localhost:3000/blog/<your-slug>
   ```
4. Run `npm run build`. It must finish with no errors.
5. **Read the whole post yourself.** Check every number against its source. You are responsible for what gets published, not the AI.

### Step 7: Publish

Commit the new post file, the image and the `index.js` change, then deploy as usual. The sitemap updates automatically.

After it's live, open [Google Search Console](https://search.google.com/search-console), paste the new post's URL into the search bar at the top and click **Request indexing**. Google usually picks it up faster this way.

---

## 4. Post File Fields

Every field in the post file, with rules:

| Field | Rules | Example |
|---|---|---|
| `title` | Clear, includes the main keyword. Shown as the big heading on the post and on cards. | `"PMEGP Subsidy for Women: Eligibility and Process"` |
| `slug` | The web address: lowercase words joined with hyphens, no spaces. Must be **exactly** the same as the file name and the image name. Never change it after publishing. | `"pmegp-subsidy-women-entrepreneurs"` |
| `excerpt` | 1–2 sentences, shown on blog cards and used for search on `/blog`. | |
| `category` | Exactly one of: `Certifications`, `Compliance`, `Tax`, `Digital Marketing`, `Tenders`, `Business Advisory`. Spelling and capitals must match, or the category filter won't find it. | `"Certifications"` |
| `author` | Keep `"Euroasia Team"` unless a named expert wrote it. | |
| `publishedAt` | Date in `YYYY-MM-DD` format. Decides the order (newest first). | `"2026-11-05"` |
| `featuredImage` | Path to the image. | `"/images/blog/pmegp-subsidy-women-entrepreneurs.webp"` |
| `metaTitle` | Title shown in Google results. About 50–60 characters, main keyword near the start. | |
| `metaDescription` | Description shown in Google results. About 140–155 characters. Say what the reader will get. | |
| `keywords` | 3–6 search phrases, separated by commas. | `"PMEGP for women, PMEGP subsidy, ..."` |
| `content` | The article in Markdown (see section 5). | |

---

## 5. Writing the Content

### Markdown you can use

```markdown
## Section heading
### Sub-heading

Normal paragraph with **bold text** and a [link to a service](/services/pmegp).

- Bullet point
- Another point

1. Numbered step
2. Next step

| Column 1 | Column 2 |
|---|---|
| Value | Value |
```

**Rules:**
- **Never use a single `#` heading.** The page already shows the `title` as the main heading. Start sections with `##`.
- **Don't type a backtick (`` ` ``) or `${` inside `content`.** Either one breaks the file. If you really need them, write `` \` `` and `\${`.
- **Write links to our own pages without the domain:** `/services/pmegp`, not `https://www.euroasias.com/services/pmegp`.

### Structure that works

Our newer posts (80-IAC, MSME Udyam, B2B Digital Marketing) follow this pattern. Use them as examples.

1. **Opening (2–3 short paragraphs).** Say what the topic is, who it is for, and what the reader will learn. No long warm-up.
2. **`## Quick Summary`.** 4–6 bullet points with the key facts (benefit, who qualifies, cost, time, documents).
3. **Main sections.** Eligibility, benefits, a step-by-step process, documents needed. Use a table when you compare things.
4. **`## Common Mistakes to Avoid`.**
5. **`## Frequently Asked Questions`.** 4–6 real questions, written like this:
   ```markdown
   **Is Udyam registration free?**
   Yes. Registration on the official portal costs nothing.
   ```
6. **`## Conclusion`.** A short recap, then link to the matching service page and to [Contact us](/contact).
7. **Date note at the end** for anything about laws or limits:
   `*Rules as of November 2026. Always confirm current limits on the official portal.*`

### Content rules

- **Simple English** for Indian business owners. Short sentences and short paragraphs.
- **Explain every scheme name or acronym** the first time it appears: "PMEGP (Prime Minister's Employment Generation Programme)".
- **Facts need sources.** Every number, limit, percentage and date comes from an official source. No guesses, no made-up statistics, no fake client stories.
- **Link to at least one service page** from the table below, and end with a contact call to action.
- **Length:** 1,200–2,000 words is typical for a full guide. Don't pad. A short post that fully answers the question beats a long one that repeats itself.
- **Don't edit the older posts** already on the site. Only add new ones.

### Service pages to link to

| Topic | Link |
|---|---|
| PMEGP | `/services/pmegp` |
| MUDRA loans | `/services/mudra` |
| CGTMSE | `/services/cgtmse` |
| Government grants | `/services/government-grants` |
| Business funding | `/services/business-funding` |
| MSME / Udyam | `/services/msme-registration` |
| Startup India / DPIIT | `/services/startup-india` |
| 80-IAC | `/services/80-iac` |
| Tax exemptions | `/services/tax-exemption` |
| GST | `/services/gst-compliance` |
| ZED certification | `/services/zed-certification` |
| Business certifications | `/services/business-certifications` |
| IEC code | `/services/iec-registration` |
| GeM portal | `/services/gem-registration` |
| Tenders | `/services/tender-assistance` |
| Company compliance / legal | `/services/compliance-legal` |
| Business advisory | `/services/business-advisory` |
| Website / digital marketing | `/services/digital-marketing` |
| All schemes | `/schemes` |
| Eligibility checker | `/check-eligibility` |
| Contact | `/contact` |

---

## 6. Images

- **Size:** 1672 × 941 pixels (16:9), the same as our existing blog images
- **Format:** `.webp`, under about 100 KB. To convert a PNG or JPG, use [squoosh.app](https://squoosh.app): choose WebP, quality around 75.
- **File name:** exactly `<your-slug>.webp`, lowercase. File names are case-sensitive on the server, so `PMEGP.webp` and `pmegp.webp` are different files.
- **Location:** `public/images/blog/`
- **Content:** a clear image related to the topic. Avoid text-heavy images, because the image is cropped on blog cards. Only use images we own or are allowed to use.

---

## 7. Checklist Before Publishing

- [ ] The slug is the same in the file name, the `slug` field and the image name
- [ ] `category` is one of the six allowed values
- [ ] `metaTitle` is about 60 characters or less; `metaDescription` is about 155 or less
- [ ] No `#` heading in `content`, only `##` and `###`
- [ ] Every number or rule is checked against an official source
- [ ] At least one link to a service page, plus a link to `/contact`
- [ ] Image added, in WebP format, under about 100 KB
- [ ] Post imported and added to the `posts` list in `index.js`
- [ ] Post looks right on `npm run dev`
- [ ] `npm run build` passes

---

## 8. Troubleshooting

| Problem | Cause and fix |
|---|---|
| Post doesn't appear anywhere | It isn't in `lib/blog/posts/index.js`. Add the import **and** the name in the `posts` list. |
| `/blog/<slug>` shows "Not Found" | The `slug` field doesn't match the URL. Check for typos and capital letters. |
| Image is missing | The image file name or folder is wrong, or the capital letters differ from `featuredImage`. |
| Build fails with a syntax error in the post file | There is a backtick or `${` inside `content`, or a missing comma or quote. Compare with `_template.js`. |
| Post doesn't show under a category filter | `category` is spelled differently from the six allowed values. |
| Post appears in the wrong order | Check `publishedAt` is in `YYYY-MM-DD` format. |
| Skills don't show in Claude Code | Restart Claude Code. If they're still missing, run the install commands in section 2. |
