# Neurema Flow

Neurema Flow is the marketing site for the Neurema BrainStorm product. It is a polished Next.js 15 application that recreates the "BrainStorm" hero, includes accessibility minded interactions, and ships with lightweight static policy pages so the site can be deployed as-is.

## What's inside
- **Next.js 15 + React 19** with the App Router and TypeScript for type safety.
- **Custom hero + sign-in modal** that mirrors the shared design reference while keeping the animation-free bundle lean.
- **React Bits Orb background** powered by shadcn/react-bits + OGL so the hero inherits an interactive, shader-driven canvas without bloating page logic.
- **Static supporting pages** (`/about-us`, `/terms-and-conditions`) that reuse a single info-page layout and CSS module.
- **Strict linting + modern tsconfig** to make future contributions straightforward.

## Repository layout
```
.
├── README.md            # This overview
├── .gitignore           # Consolidated ignore rules for the whole repo
└── frontend/
    ├── package.json     # Next.js app dependencies and scripts
    ├── next.config.ts   # Placeholder for framework config
    ├── src/app/         # App Router routes (hero + info pages)
    ├── public/          # Static assets (gitkeep placeholder for future uploads)
    └── tsconfig.json    # TypeScript configuration
```

## Getting started
1. Install dependencies (first time only):
   ```bash
   cd frontend
   npm install
   ```
2. Start the dev server with hot reload:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to browse the hero, modal, and supporting pages.

## Available scripts
- `npm run dev` &mdash; launch `next dev` with hot reloading.
- `npm run build` &mdash; generate an optimized production build via `next build`.
- `npm run start` &mdash; serve the production build created above.
- `npm run lint` &mdash; run ESLint using the flat Next.js config.

## Production build & deployment
```
npm run build
npm run start
```
The build output (`.next/`) is Git-ignored. Deploy the `frontend` folder to any platform that supports Next.js (Vercel, Netlify, Render, etc.).

## Environment variables
No secrets are required today. When you add API keys or other sensitive values, create an `.env.local` inside `frontend/`&mdash;the consolidated `.gitignore` already keeps them out of version control.