# Academic Portfolio

A personal academic portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.
Deployed automatically to GitHub Pages.

## Live site

<!-- Replace with your deployed URL after the first successful Pages run -->
> The published URL follows the pattern `https://<your-username>.github.io/<repo-name>/`
> and is printed in the output of the **Deploy to GitHub Pages** workflow.

## Highlights

- **Single-file production build** — `vite-plugin-singlefile` inlines the JS and CSS into one `index.html`.
- **Dark mode** with a persisted toggle, driven entirely by the existing `navy` / `accent` colour tokens.
- **Scroll reveal animations** via a shared `Reveal` component using `IntersectionObserver`, respecting `prefers-reduced-motion`.
- **Projects section** with data-driven project cards and an accessible detail modal (focus restore, `Escape` to close, scroll lock).
- **Embedded project demo** with a YouTube thumbnail facade — the iframe only loads on click.
- **Education documents** with automatically generated first-page PDF previews.
- Fully responsive and keyboard accessible, with semantic HTML and a skip link.

## Sections

Home · About · Brand · Experiences & Evidence · Education · Academic Performance ·
Educational Documents · Coursework · Skills · Interests · Projects · Career Progress ·
Growth & Reflection · CV · Contact · Footer

## Project structure

```
src/
  components/        One component per section, plus shared SectionHeading / Reveal
  data/              All site content lives here as typed data objects
  hooks/             useTheme, useActiveSection
  utils/             URL helpers (placeholder detection, YouTube embed conversion)
education-pdfs/      Academic PDFs and images shown in the documents section
scripts/             generate-education-previews.mjs (PDF -> PNG previews)
public/              Static assets copied verbatim (CV, photo, favicon)
```

## Getting started

```bash
npm install
npm run dev        # start the dev server
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Generate previews, then start the Vite dev server |
| `npm run build` | Generate previews, type-check with `tsc -b`, and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run generate-previews` | Regenerate PDF page previews only |

On Windows, `start.cmd` builds the site and copies the output into the `website/` folder.

## Adding content

All copy and data are defined in `src/data/`. To add a project, append an entry to the
`projects` array in `src/data/projects.ts` — the card, detail modal, technology badges,
statistics, architecture diagram, and team section are all generated from that object.

Links use placeholder tokens such as `GITHUB_REPOSITORY_URL`. Buttons stay hidden until
replaced with a real absolute `http(s)` URL, so the site never shows a broken link.

To add academic documents, drop PDFs or JPGs into `education-pdfs/` and rebuild.
PDFs are converted to first-page PNG previews automatically.

## Deployment

The site is published to two targets, both driven by the same push to `main`:

| Target | URL | Trigger |
| --- | --- | --- |
| GitHub Pages | `https://nethradisanayaka.github.io/my_portfolio_website/` | `.github/workflows/deploy.yml` |
| Netlify | `https://nethradhananjali.netlify.app/` | `deploy-netlify` job in the same workflow |

`.github/workflows/deploy.yml` builds the site once, then publishes `dist/` to GitHub Pages
and to Netlify through the official Netlify CLI. To enable Pages, in the repository go to
**Settings → Pages → Build and deployment → Source → GitHub Actions**.

The Netlify job uses the `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` repository secrets.
`netlify.toml` pins the Node version and installs `poppler-utils` so the PDF previews are
generated on the build image.

To deploy manually from a local machine:

```bash
npm run build
netlify deploy --dir=dist --prod
```

## Stack

React 19 · TypeScript 5.8 · Vite 6 · Tailwind CSS 4 · lucide-react
