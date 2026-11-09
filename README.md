# Quixta Website

The Quixta marketing website is built with Next.js App Router and React. It presents Quixta's services, team, work, industry coverage, and contact information in a responsive single-page experience.

## Requirements

- Node.js 20.9 or newer
- npm

## Getting started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build; run `npm run build` first. |
| `npm run lint` | The package script currently calls `next lint`. The installed Next.js 16 CLI does not provide a `lint` command, so this script needs an ESLint setup or an updated command before it can be used. |

## Site sections

The home page is assembled in `app/page.js` and currently includes:

- Hero and navigation
- Founder and team highlights
- Where You Are Now and services
- The Quixta approach and team photo section
- Selected work and case studies
- Partnership logos and industries served
- Contact details and footer

## Project structure

```text
app/                 App Router pages, route handlers, and global styles
components/          Reusable page sections and UI components
data/                Content used by work, services, industries, and partners
hooks/               Shared React hooks
public/              Images, logos, fonts, and other static assets
```

The `/loader-state` route returns a small CSS response used by the page loader. Static assets in `public/` are referenced from the site with paths beginning at `/`, such as `/team/4.png`.

## Content and styling

- Update section copy and lists in the matching files under `data/`.
- Update page composition in `app/page.js`.
- Update component markup in `components/`.
- Global and responsive styles are in `app/globals.css`.
- Place static images and logos in `public/` and reference them by their public URL path.
