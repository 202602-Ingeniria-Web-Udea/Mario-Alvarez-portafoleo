# Portfolio — Rayan Adlard, Front-End Developer

Single-page portfolio built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Purpose

Personal portfolio showcasing knowledge areas, education, and recent interface work.
All editable content lives in `data/profile.ts` (name, contact, languages,
skills, knowledge, education, projects, socials).

## Project info

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS only, no UI kit
- Icons: inline SVG set in `components/icons.tsx` (no external package)
- Images: profile photo served from `public/Profile.jpg`
- Architecture: atomic design — `components/atoms`, `components/molecules`,
  `components/organisms`, with content in `data/`

## How to run

```bash
npm install
npm run dev     # development server at http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # lint with next lint
```

## Layout

- Desktop: fixed left profile sidebar, scrollable center column, fixed right
  social rail (rails collapse below the `lg` breakpoint).
- Mobile: sticky header with social shortcuts plus a compact contact summary
  below the main content.
- Sections: Hero → My Knowledge → Education → Portfolio carousel → Footer.
- Dialogs: "Hire me" opens the contact dialog; "Learn more" on a project card
  opens the project details dialog.
