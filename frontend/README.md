# Neurema Frontend

This project is a Next.js 15 app router skeleton that recreates the look and feel of the `sample.jpeg` hero. It ships with the same color palette and layout structure so you can layer in interactions, content, or additional pages without having to rebuild the design foundation.

## Project structure
- `src/app/page.tsx` – marketing hero with navigation, callout chip, and headline styling.
- `src/app/page.module.css` – handcrafted styles that mirror the image colors (background mint, deep border, and magenta accents).
- `src/app/globals.css` – global color variables plus baseline resets.
- `public/` – place any static assets you add later (logos, SVGs, etc.).

## Getting started
```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the hero page. Live edits to files under `src/app` hot-reload automatically.

## Available scripts
- `npm run dev` – start the local development server.
- `npm run build` – create an optimized production build.
- `npm run lint` – run ESLint with the Next.js shareable config.
- `npm run start` – serve the production build.

## Customizing the skeleton
- Update the navigation links or button targets in `src/app/page.tsx`.
- Extend the layout by adding new sections below the existing hero or by using additional app router routes under `src/app/*`.
- Adjust the brand palette in `src/app/globals.css`; each color variable corresponds to a tone sampled from `sample.jpeg`.

Feel free to keep iterating—this setup is intentionally minimal so you can layer in components, state management, or data fetching as needed.
