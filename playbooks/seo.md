# Playbook: SEO

For improving how any website shows up in search, for any client. General
rules only. Nafas: also follow the project's CLAUDE.md (nafas-seo) and
nafas-website.md to ship.

## 1. Understand
- Read the project's CLAUDE.md. Ask once which pages or texts are locked.
- Search Console (Google's search data): verify by domain (DNS record) if
  possible. Without data, do only the fixes that don't need it.

## 2. Audit (measure, don't guess)
- Save a baseline before changing anything: the commit hash, the image
  weight (`tools/image-weight.mjs`) and PageSpeed scores, in the project
  folder. The before/after report needs it; rebuilding it later from old
  commits costs an hour.
- Script every page in every region: title (unique, 60 characters or less),
  meta description (unique, 160 or less), share tags (og, twitter) match,
  one h1, canonical and hreflang, structured data, robots.txt and sitemap,
  image alt text, image weight.
- Speed: Google PageSpeed on the key pages, phone and desktop. If the free
  service is over its limit, open pagespeed.web.dev in Safari. Note real
  visitors' data (what Google ranks on) apart from the lab score.
- Don't test PageSpeed right after a deploy: the caches are still empty and
  scores drop by 10 to 20 points. Test the next day, or run twice and keep
  the second run.

## 3. Plan (wait for yes)
- A table of the exact new titles and descriptions per page, written from
  the page's own content. Use the brand's voice skill and translation
  guideline when it has them.
- Mark which changes are invisible (hidden head tags, structured data) and
  which change the look. Do the invisible ones first.

## 4. Fix, in this order
1. Titles, descriptions, share tags.
2. Structured data: Organization and WebSite on Home, FAQPage from the real
   questions, NewsArticle with real dates, BreadcrumbList.
3. One h1 per page, without changing the look.
4. Alt text: describe content photos, logos get the organization's name,
   background photos and icons keep alt="".
5. Speed:
   - Resize oversized images to the largest size any screen shows them.
     Measure cropped (object-fit: cover) boxes and tablets, at 2x and 3x.
   - Give phones their own smaller copies (srcset); computers keep the original.
   - The main image loads first: never lazy, high priority, video stills preloaded.

## 5. Check before showing Danny
- [ ] No duplicate titles in any region; titles and descriptions within length
- [ ] All structured data parses and links to real pages
- [ ] Images render at the same size at 360 to 1920, none below what the screen needs
- [ ] Nothing moved (`tools/layout-diff.mjs` before against after) and no
      broken images (`tools/broken-images.mjs`)
- [ ] Locked pages untouched (checked by script, not by eye)
- [ ] Every number and date has a source, or the owner chose it

## 6. Ship and follow up
- Small releases, one theme each. Verify on the live site after.
- Monthly with Search Console: match titles to real searches, find topics
  people search for that have no page yet.

## Don't
- guess dates, numbers or claims
- change the design for SEO without asking
- describe decorative images
- trust one screenshot: measure every instance
