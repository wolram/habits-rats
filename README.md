# HabitRats — Turn habits into visible progress with gamification

A landing page and marketing website for HabitRats, a habit-tracking app featuring GitHub-style heatmaps, gamification (XP, levels, badges, streaks), and Apple Watch integration.

## Features

- GitHub-inspired daily progress heatmap
- Gamification system with XP, levels, badges, and streaks
- Apple Watch quick check-in support
- Integrated blog with health and productivity posts
- Fully responsive design (mobile, tablet, desktop)
- Design system documentation

## Tech Stack

- **Vue.js 3.4** — Frontend framework
- **Vue Router 4** — Client-side routing with lazy loading
- **Vite 5** — Build tool and dev server
- **ESLint + Prettier** — Code quality and formatting

## Getting Started

### Prerequisites

- Node.js 18+

### Install and Run

```bash
npm install
npm run dev       # Local development
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Lint code
npm run format    # Format code with Prettier
```

### Deploy

Run `npm run build` and upload the `dist/` folder to any static hosting provider (Vercel, Netlify, GitHub Pages).

## Project Structure

```
src/
├── main.js          # Entry point
├── App.vue          # Root component
├── router/          # Route configuration
├── views/           # Pages (Home, Blog, DesignSystem)
├── components/      # Modular components (Hero, Pricing, etc.)
└── assets/          # Global CSS, images, logos
```

## License

All rights reserved.
