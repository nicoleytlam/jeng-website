# Editorial one-page website

A responsive Next.js App Router website inspired by the supplied moodboard: warm cream, maroon, olive, dusty rose, elegant locally hosted serif typography, fine rules, and restrained framing.

## Preview

Use Node.js 20.9 or newer (Node 22 LTS recommended).

```sh
npm ci
npm run dev
```

Open the local address printed in the terminal.

## Customize

Edit `app/content.ts` to replace the site name, descriptor, headline, introduction, biography, contact details, and the four five-sentence testimonial slots. The testimonials are editing prompts, not invented endorsements. Replace each title and paragraph with approved client copy. Remove the visible placeholder labels in `app/page.tsx` after replacing the content.

Put your headshot in `public/headshot.jpg`, set `headshot` to `/headshot.jpg`, and update `headshotAlt`. The current monogram frame is intentionally an image placeholder, not a stock portrait. Update the `YN` initials in `app/page.tsx` if keeping the frame, and customize `app/icon.svg` for your final brand.

Set `email` to your real address and `instagramUrl` to your full Instagram URL. Until configured, the page clearly identifies these as coming soon. The form validates name, email, and message, then opens a prefilled email in the visitor’s email app. It does not deliver messages through a server or claim they were sent. No API key or database is required. For direct in-page delivery, add a server-side email provider separately.

Palette, spacing, breakpoints, and typography live in `app/globals.css`. Fonts are installed locally through Fontsource; the site does not need to contact Google Fonts at runtime or build time.

## Deploy to Vercel

1. Add this project folder to a Git repository and import the repository into Vercel.
2. If the repository contains other folders, set Vercel’s Root Directory to this project folder.
3. Select the Next.js framework preset. Use `npm run build`; leave the output directory at the framework default. No environment variables are required.
4. Replace and approve all placeholder content and contact details, then change the `robots` setting in `app/layout.tsx` to `{ index: true, follow: true }` when ready for search engines.
5. Deploy through Vercel.

This delivery is ready to deploy; it has not been published to a Vercel account.

## Checks

```sh
npm run build
npm run typecheck
```

The implementation includes semantic landmarks, accessible form labels, native input validation, a skip link, visible keyboard focus, reduced-motion handling, and responsive layouts.

Framework setup follows the [official Next.js installation documentation](https://nextjs.org/docs/app/getting-started/installation).
