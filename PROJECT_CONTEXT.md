# Project Context: HelloTutor.me

## Background
HelloTutor is an online tutoring platform connecting students in the UK and UAE with expert tutors.
The web application (platform) lives at `app.hellotutor.me`.
This repository `hellotutor-web` is the marketing and business front-end site meant to drive SEO, acquisition, and conversion.

## Current State (May 2026)
- **Phase 1 Complete:** Core boilerplate scaffolded. Next.js 16, App Router, i18n, design system, and global UI components are built.
- **Phase 2 Pending:** Page creation. There are 28 unique URLs specified in the site architecture.
- **Phase 3 Pending:** CMS Integration.

## Critical Business Rules
- **CTA:** The primary action is "Book a Free Consultation" which points to a WhatsApp API link. Secondary is "Login" pointing to the app subdomain.
- **Localization:** Must support English (UK focus) and Arabic (UAE focus) natively.
- **Navigation:** Deeply nested. "Science" is an overview page, but acts as a parent for Physics, Chemistry, Biology.
- **SEO First:** Every page must emit unique Meta descriptions, Canonical URLs, OpenGraph images, and `JsonLd` schema.
