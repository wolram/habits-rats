# CLAUDE.md — AI Assistant Guide for HabitsRats Website

## Project Overview

**HabitsRats Website** (`habitrats-website`) is a marketing/landing page for the HabitsRats iOS habit-tracking app. It is a static single-page application built with Vue 3 and Vite. All content is in Brazilian Portuguese (pt-BR). There is no backend, no database, and no API — all data is hardcoded in JavaScript.

- **Domain:** habitsrats.app
- **Target audience:** Brazilian iOS users
- **App Store link:** placeholder (`id1234567890`) — not yet live

## Tech Stack

| Layer        | Technology                          |
|-------------|--------------------------------------|
| Framework   | Vue 3.4 (Composition API, `<script setup>`) |
| Router      | Vue Router 4 (HTML5 History mode)    |
| Build       | Vite 5                               |
| Icons       | lucide-vue-next                      |
| Animations  | canvas-confetti, CSS @keyframes      |
| Linting     | ESLint 8 + eslint-plugin-vue         |
| Formatting  | Prettier 3                           |
| Module type | ESM (`"type": "module"`)             |

No state management library (Vuex/Pinia) — all state is component-local using `ref`/`computed`.

## Directory Structure

```
habits-rats/
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite config (base: './', vue plugin)
├── .eslintrc.cjs              # ESLint config (CJS format)
├── .prettierrc.json           # Prettier config
├── public/                    # Static assets (favicon, robots.txt, sitemap.xml)
├── content/blog/              # Markdown blog drafts (not used at runtime)
├── docs/                      # 27 reference/documentation files (mostly pt-BR)
├── dist/                      # Committed build output (non-standard)
├── src/
│   ├── main.js                # App entry: createApp + router + global CSS
│   ├── App.vue                # Root component (just <router-view />)
│   ├── assets/
│   │   ├── styles.css         # Global design system (~26KB, CSS custom properties)
│   │   ├── brand/             # Logo and badge images
│   │   └── screenshots/       # App screenshots (large JPEGs)
│   ├── components/            # Reusable/section components
│   │   ├── AppNavigation.vue  # Fixed top nav, auto-hide on scroll
│   │   ├── AppFooter.vue      # Site footer
│   │   ├── HeroSection.vue    # Hero with phone carousel + confetti
│   │   ├── FeaturesSection.vue
│   │   ├── HeatmapSection.vue # Interactive heatmap with color picker
│   │   ├── WatchSection.vue   # Apple Watch mockup
│   │   ├── PricingSection.vue # 4-tier pricing display
│   │   ├── CtaSection.vue     # Call-to-action banner
│   │   └── BlogSection.vue    # Blog preview (first 3 posts)
│   ├── data/
│   │   └── blogPosts.js       # 18 blog posts with inline HTML content
│   ├── router/
│   │   └── index.js           # 11 routes (HomeView eager, rest lazy-loaded)
│   └── views/
│       ├── HomeView.vue       # Assembles all section components
│       ├── BlogView.vue       # Blog listing with category filters
│       ├── BlogPostView.vue   # Single blog post (renders HTML via v-html)
│       ├── AboutView.vue
│       ├── ContactView.vue
│       ├── CareersView.vue
│       ├── UpdatesView.vue    # Changelog/release notes
│       ├── DesignSystemView.vue  # Live design system reference page
│       └── legal/
│           ├── PrivacyView.vue
│           ├── TermsView.vue
│           └── CookiesView.vue
```

## Commands

```bash
npm run dev       # Start Vite dev server (hot reload)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint with --fix on .vue,.js,.jsx,.cjs,.mjs files
npm run format    # Prettier --write on all files
```

## Routes

| Path            | View Component     | Loading |
|----------------|--------------------|---------|
| `/`            | HomeView           | Eager   |
| `/design-system` | DesignSystemView | Lazy    |
| `/blog`        | BlogView           | Lazy    |
| `/blog/:slug`  | BlogPostView       | Lazy    |
| `/updates`     | UpdatesView        | Lazy    |
| `/about`       | AboutView          | Lazy    |
| `/contact`     | ContactView        | Lazy    |
| `/careers`     | CareersView        | Lazy    |
| `/privacy`     | PrivacyView        | Lazy    |
| `/terms`       | TermsView          | Lazy    |
| `/cookies`     | CookiesView        | Lazy    |

## Code Conventions

### Vue Components
- Use Composition API with `<script setup>` syntax exclusively
- Single-word component names are allowed (ESLint rule `vue/multi-word-component-names` is off)
- Components use `<style scoped>` for component-specific styles
- Section components are assembled in `HomeView.vue` and share no global state
- Lazy-load all views except HomeView via dynamic `() => import(...)` in the router

### JavaScript / Formatting
- **ESM** throughout (`import`/`export`, `"type": "module"` in package.json)
- **Prettier rules:** single quotes, semicolons, 2-space indent, trailing commas (es5)
- **ESLint extends:** `eslint:recommended`, `plugin:vue/vue3-recommended`, `prettier`
- Config files (`.eslintrc.cjs`) use CJS format since ESLint 8 requires it

### CSS / Styling
- Dark-only theme — no light mode
- Global design tokens via CSS custom properties in `src/assets/styles.css`
- No CSS preprocessors (Sass/Less) — plain CSS only
- Brand palette:
  - Green (primary): `--brand-green: #39D353`
  - Teal (secondary): `--brand-teal: #00D2D3`
  - Purple (accent): `--brand-purple: #A855F7`
- Backgrounds: `--bg-primary: #0D0D0D`, `--bg-secondary: #1A1A1A`, `--bg-tertiary: #242424`
- Fonts: `Space Grotesk` (body/display), `JetBrains Mono` (monospace/data)
- Responsive breakpoints: `1024px`, `768px`, `640px`

### Animation Patterns
- Intersection Observer + `fade-in`/`visible` CSS class pattern for scroll reveals
- CSS `@keyframes` for repeating animations (`fadeInUp`, `phoneFloat`, `pulse`, `rainbowSlide`)
- `canvas-confetti` for the App Store button click effect

### Data Layer
- Blog posts are hardcoded in `src/data/blogPosts.js` as an array of objects
- Each post has: `id`, `category`, `title`, `slug`, `excerpt`, `date`, `readTime`, `color`, `content` (HTML string)
- Blog content is rendered via `v-html` — be cautious about XSS if content sources change
- `content/blog/` contains Markdown drafts that are **not** used by the running application

## Testing

There are no tests configured. No test framework, no test files, no test scripts.

## CI/CD

There is no CI/CD pipeline. No GitHub Actions, no Netlify/Vercel config files. Deployment is manual per `docs/DEPLOY.md`.

## Known Issues / Caveats

- `dist/` and `node_modules/` are committed to the repository (`.gitignore` only excludes `.DS_Store`)
- App Store URL uses a placeholder ID (`id1234567890`)
- Google Analytics is not configured (placeholder `G-XXXXXXXXXX` in docs)
- Images in `src/assets/screenshots/` are large and unoptimized (1.4–1.8MB each)
- The logo `full-logo-rainbow-dark.png` is 2.15MB
- `v-html` is used to render blog content — safe only while content is developer-controlled

## Deployment

Static site. Three documented options in `docs/DEPLOY.md`:
1. **Vercel:** `vercel --prod`
2. **Netlify:** `netlify deploy --prod --dir dist`
3. **Self-hosted:** Nginx with SPA fallback (`try_files $uri /index.html`)

Vite `base: './'` produces relative asset paths, compatible with subdirectory hosting.

## Documentation Reference

The `docs/` directory contains extensive reference material (mostly in Portuguese):
- `SUMMARY.md` — executive project summary
- `STATUS.md` — technical status and quality scores
- `DEPLOY.md` — deployment guide with checklists
- `CODE_REVIEW.md` — code review findings
- `DESIGN_SYSTEM_README.md` — design token documentation
- `STRATEGY_SEO_AEO.md` — SEO/AEO content strategy
- `ARCHITECTURE_SUBSCRIPTIONS.md` — iOS app subscription architecture (StoreKit 2)
- `CHECKLIST.md`, `SUBMISSION_CHECKLIST.md` — App Store submission checklists
