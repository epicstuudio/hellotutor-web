# HelloTutor Architecture

## Core Tech Stack
- Framework: Next.js 16.2.x (App Router)
- Language: TypeScript 6.0.x
- Styling: Tailwind CSS v4.3.x (Inline @theme config)
- Internationalization: next-intl (en, ar)
- CMS: Prepared for Sanity CMS (Headless)

## Directory Structure
- `app/[locale]/`: Root of all routes. We use dynamic routing for i18n out-of-the-box (`/en/path`, `/ar/path`).
- `components/layout/`: Global wrappers (`Header`, `Footer`, `Section`, `Container`).
- `components/ui/`: Dumb, reusable visual elements (`Button`, `Logo`).
- `components/seo/`: Schema generators (`JsonLd`).
- `config/`: Hardcoded routing trees, metadata defaults, environment checks.
- `hooks/`: Global shared custom hooks (like `useMediaQuery` implementing the 3-tier breakpoint system).
- `lib/`: Utility libraries, CSS merge logic, CMS integration stubs.
- `styles/`: Core global CSS mapping `design.md` to Tailwind v4.
- `messages/`: Translation files.

## Philosophy
- **RTL-first:** Everything handles LTR and RTL via Tailwind's `rtl:` prefixes and `[dir="rtl"]` attributes.
- **Design System First:** Hardcoded utility mappings from `design.md` exist directly in `styles/globals.css`. Do not add arbitrary px values, use tokens.
- **Component Scalability:** All pages should compose existing UI/Layout components rather than building ad-hoc DOM structures.
