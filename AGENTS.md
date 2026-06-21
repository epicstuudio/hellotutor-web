<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design Tokens Rule
**CRITICAL**: Do NOT use raw or hex color values (e.g., `#FFF7F0`, `rgb(...)`) ever, period. Always use the predefined semantic classes from Tailwind (e.g., `bg-surface`, `text-content-secondary`) defined in `globals.css`. Always follow this rule before starting a section.

# Language Rule
**CRITICAL**: Always use British English spelling (e.g., "analyse" instead of "analyze", "colour" instead of "color", "centre" instead of "center"). If you are provided with screenshots, copy, or text that uses American English, you MUST automatically convert it to British English before writing code.
