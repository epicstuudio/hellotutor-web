# Design Agent Directives — HelloTutor.me

**MANDATORY.** Any agent or developer modifying the UI MUST follow these rules. Violations will break visual consistency.

---

## 1. Color System — STRICT RULES

All colors come from `design.md` → mapped in `styles/globals.css`.

### Semantic Tokens (USE THESE native Tailwind classes)

| Token | Class | Resolves To | Purpose |
|-------|-------------|-------------|---------|
| **Surface (bg-surface)** | `bg-surface` | gray-50 `#FFF5ED` | **Page body background.** This IS the page bg. |
| **Surface Alt (bg-surface-alt)** | `bg-surface-alt` | gray-100 `#FAF0E8` | Sections that need contrast against body (footer, cards, alternating sections) |
| **Surface Strong (bg-surface-strong)** | `bg-surface-strong` | gray-200 `#ECE3DB` | Deeper contrast areas, active states |
| **Surface Action (bg-surface-action)** | `bg-surface-action` | parrot-400 `#87E64B` | Primary CTA buttons ONLY |
| **Surface Brand (bg-brand)** | `bg-brand` | parrot-400 `#87E64B` | Brand-colored surfaces (banners, badges) |
| **Surface Hover (bg-surface-hover)** | `bg-surface-hover` | `rgba(0,0,0,0.08)` | Hover overlay on interactive elements |
| **Content (text-content)** | `text-content` | gray-950 `#191919` | Headings, important text |
| **Content Secondary (text-content-secondary)** | `text-content-secondary` | gray-800 `#403E3D` | Navigation links, sub-headings |
| **Content Tertiary (text-content-tertiary)** | `text-content-tertiary` | gray-600 `#6B6865` | Body text, descriptions |
| **Content Disabled (text-content-disabled)** | `text-content-disabled` | gray-400 `#9A9490` | Disabled/placeholder text |
| **Edge (border-edge)** | `border-edge` | gray-200 `#ECE3DB` | Standard borders and dividers |
| **Edge Subtle (border-edge-subtle)** | `border-edge-subtle` | gray-100 `#FAF0E8` | Subtle internal dividers |
| **Edge Focus (outline-edge-focus)** | `outline-edge-focus` | parrot-400 `#87E64B` | Focus rings, selected state |

| **Content Brand (text-content-brand)** | `text-content-brand` | parrot-500 | Brand text elements (e.g. Logo) |
| **Content Brand Strong (text-content-brand-strong)** | `text-content-brand-strong` | parrot-600 | Active/hover accent on nav links |
| **Content Brand Dark (text-content-brand-dark)** | `text-content-brand-dark` | parrot-700 | Badge text on brand-colored backgrounds |
| **Surface Brand Light (bg-surface-brand-light)** | `bg-surface-brand-light` | parrot-100 | Light brand badges/chips |
| **Edge Brand (border-edge-brand)** | `border-edge-brand` | parrot-500 | Brand colored borders (e.g. loaders) |

### ❌ FORBIDDEN Patterns — DO NOT USE

| What | Why |
|------|-----|
| `bg-gray-50` on sections/cards | That IS the body background — invisible. Use `bg-surface-alt` instead. |
| `bg-gray-100` for button hover | gray-100 = surface-alt (a surface color). Use `bg-surface-hover` for hover. |
| `to-white` or `#ffffff` in gradients | Pure white does NOT exist in this design system. Use `to-surface`. |
| `bg-green-*` for UI surfaces | `green` is ONLY for success status (badges, alerts). Use `parrot-*` for brand green. |
| `bg-background` | Tailwind's default — may not resolve to our custom token. Use `bg-surface`. |
| Raw `text-gray-800`, `text-gray-600` | Use `text-content-secondary` or `text-content-tertiary` instead. |
| **Direct Primitives (`text-parrot-600`, `bg-blue-50`)** | **NEVER use primitives directly. Everything must be mapped to a semantic token (e.g. `text-content-brand-strong`, `bg-surface-info-light`).** |
| **Raw Values (`bg-[#FDF4EC]`, `text-[14px]`)** | **STRICTLY FORBIDDEN. Never use raw hex/rgb/pixel values in Tailwind classes. Always use or create a semantic token.** |

### Status Colors (semantic only)

| Purpose | Background | Border | Text |
|---------|-----------|--------|------|
| Success | `bg-surface-success-light` / `bg-surface-success` | `border-edge-success` | `text-content-success` |
| Danger | `bg-surface-danger-light` / `bg-surface-danger` | `border-edge-danger` | `text-content-danger` |
| Warning | `bg-surface-warning-light` / `bg-surface-warning` | `border-edge-warning` | — |
| Info | `bg-surface-info-light` / `bg-surface-info` | `border-edge-info` | — |

---

## 2. Typography Hierarchy

Use utility classes from `styles/globals.css`. **Never use raw Tailwind `text-xl`, `text-2xl` etc.** for content typography.

| Class | Size | Weight | Use Case |
|-------|------|--------|----------|
| `text-display-hero` | 72px (responsive) | 700 | Page hero H1 |
| `text-display-lg` | 64px (responsive) | 700 | Major section H1 |
| `text-title-screen` | 56px (responsive) | 600 | Full-screen titles |
| `text-title-section` | 28px (responsive) | 600 | Section headings |
| `text-title-subsection` | 24px | 600 | Sub-section headings |
| `text-title-body` | 18px | 600 | Card titles, list headers |
| `text-title-group` | 14px | 600 | Group labels, footer column headers |
| `text-body-xl-regular` | 20px | 400 | Hero sub-text |
| `text-body-lg-regular` | 18px | 400 | Leading paragraphs |
| `text-body-base-regular` | 16px | 400 | Standard body text |
| `text-body-sm-regular` | 14px | 400 | Small text, footer links |
| `text-label-sm` | 12px | 600 | Badges, chips |

**Exception:** Navigation menu items use `text-sm font-medium` (Tailwind native) for consistent 14px/500 weight across all nav elements.

---

## 3. Breakpoints

Three-tier responsive system:

| Tier | Range | Tailwind Prefix |
|------|-------|----------------|
| Mobile | `< 768px` | Default (no prefix) |
| Tablet | `768px–1279px` | `md:` |
| Desktop | `≥ 1280px` | `xl:` |

- `sm:` (640px) is available but rarely used
- `lg:` (1024px) is available for intermediate layouts
- Header/Footer navigation switches at `xl:` (1280px)

---

## 4. Interactions & Animation

| Class | Effect | When to use |
|-------|--------|-------------|
| `animate-fade-in-up` | Fade + slide up | Section content on page load |
| `stagger-children` | Sequential fade-in | Wrap children in hero/feature sections |
| `hover-lift` | Y-translate + shadow | Cards, testimonials |
| `hover-scale` | Scale 1.02× | CTA buttons |
| `animate-slide-down` | Dropdown reveal | Desktop dropdown menus |
| `animate-slide-in-right` | Panel slide | Mobile menu |

**Focus states:** All interactive elements MUST have `focus-visible:outline-2 focus-visible:outline-edge-focus`.

---

## 5. Spacing & Layout

- **Always** use `Container` + `Section` for page-level layout
- **Never** add manual `px-*` padding to page content — `Container` handles it
- Section vertical rhythm: `section-padding` utility (4rem → 5rem → 6rem)

---

## 6. Component Token Usage Reference

| Component | Background | Hover | Text | Border |
|-----------|-----------|-------|------|--------|
| **Page body** | `bg-surface` | — | `text-content` | — |
| **Header** | `bg-surface` (80% opacity + blur) | — | `text-content-secondary` | `border-edge` on scroll |
| **Footer** | `bg-surface-alt` | — | `text-content-tertiary` | `border-edge` |
| **Primary Button** | `bg-surface-action` | opacity:0.9 | `text-content` | — |
| **Secondary Button** | `bg-surface-alt` | `bg-surface-strong` | `text-content` | `border-edge` |
| **Outline Button** | transparent | `bg-surface-hover` | `text-content` | `border-edge` |
| **Ghost Button** | transparent | `bg-surface-hover` | `text-content-secondary` | — |
| **Nav Links** | — | — | `text-content-secondary` → `parrot-600` on hover | — |
| **Mobile Menu** | `bg-surface` | — | `text-content` | `border-edge-subtle` |
| **Cards** | `bg-surface-alt` | `hover-lift` | `text-content` | `border-edge` |
| **Badges** | `bg-parrot-100` | — | `text-parrot-700` | — |
| **Input Fields** | `bg-surface` | — | `text-content` | `border-edge` |

---

## 7. Icon Library

Use `lucide-react` for all icons. Never use inline SVGs for standard icons.

```tsx
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
```

Flags (UK/UAE) in `LanguageSwitcher` are the **only exception** — they use inline SVGs.
