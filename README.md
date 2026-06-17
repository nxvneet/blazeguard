# Blazeguard® Website

**Live:** https://blazeguard-ten.vercel.app · **Repo:** https://github.com/nxvneet/blazeguard


A React + framer-motion rebuild of the Sienna real-estate template's
[`home-v2-construction`](https://sienna-real-estate-template.webflow.io/home-v2-construction)
page — every section and scroll animation recreated and populated with Blazeguard
fire-protection content drafted from the `Blazeguard Website.pptx` brief and the
reference sites (hero-group / firetec).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in /dist
```

## Sections (mirrors the template, in order)

1. **Navbar** — fixed, blur-on-scroll, mobile drawer
2. **Hero** — full-screen, word-rise heading reveal (template SplitText)
3. **About** — scroll-driven word-by-word opacity wipe
4. **Stats** — "Trusted across the Gulf" + animated counters + clip-path image reveal
5. **Process** — 7-step fire-protection approach, sticky heading
6. **Services** — Glazing / Installation / Certification cards
7. **Testimonial** — single large quote
8. **Projects** — "Latest Projects" fire-glass case cards
9. **Stories** — "Success Stories We're Proud Of"
10. **CTA** — "Protect What Matters Most" over mesh texture
11. **Footer** — brand, navigation, certifications

## Design system (lifted from the template CSS)

| Token | Value |
|-------|-------|
| Warm near-black | `#16110e` |
| Darkest sections | `#070504` |
| Brunswick green accent | `#1d4b45` |
| Silver / beige neutral | `#c1bbaf` / `#ebe3dd` |
| Body font | Questrial (same as template) |
| Display font | **Fraunces** — free stand-in for the template's paid **Coconat** serif |

### Blazeguard brand (sampled from the logo PDF)

The accent palette comes straight from the supplied logo artwork — the template's
original green accent was replaced with the logo's fire gradient.

| Token | Value |
|-------|-------|
| Ember red | `#cb4b40` |
| Ember orange (primary accent) | `#cf5d3c` |
| Amber | `#de9044` |
| Gold | `#e6ac5a` |
| Ink | `#1a1919` |

The logo (`public/images/blazeguard-logo-dark.png` / `-light.png`) is used in the
navbar and footer; `public/favicon.svg` is a fire-gradient lightning brand mark.
Primary CTAs use the `.btn-fire` fire-gradient button.

> The template's display typeface "Coconat" is a commercial Atipo font and can't be
> embedded freely. **Fraunces** (Google Fonts) is used as the closest high-contrast
> serif. Swap the `--serif` variable in `src/index.css` if a Coconat licence is acquired.

## Assets

The 7 images come from the PPTX brief (`public/images/`): fire-glass panels, furnace
test, glazing cross-section, installation, fire-test panel and the mesh texture.
