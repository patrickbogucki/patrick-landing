# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page Next.js 16 portfolio site (App Router). All content lives in `src/app/page.tsx` — there are no additional routes. The layout is locked to dark mode via `className="dark"` on `<html>` in `src/app/layout.tsx`.

**Key paths:**
- `src/app/page.tsx` — the entire portfolio page (hero + project cards)
- `src/app/globals.css` — Tailwind v4 setup, shadcn CSS variables, dark/light theme tokens
- `src/components/ui/` — shadcn components (button, card, badge, separator)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `designs/` — Pencil design files (`.pen`), not part of the build

**Import alias:** `@/` maps to `src/`.

## Style & Design Rules

From `.github/copilot-instructions.md`:

- **Components:** Always use shadcn/ui and Radix UI primitives. Do not write custom CSS if a shadcn component exists.
- **Icons:** Use `lucide-react` exclusively.
- **Colors:** Tailwind `slate` or `zinc` for neutrals; one primary accent (e.g. `indigo-600` or `sky-500`).
- **Typography:** Geist Sans / Geist Mono (loaded via `next/font/google`). Tight tracking on headings.
- **Animations:** Framer Motion for subtle entry transitions (fade-in, slide-up 20px). Keep under 0.3s.
- **Layout:** CSS Grid for complex layouts; all sections must be mobile-responsive (`sm`/`md`/`lg`).
- **Borders/Shadows:** Subtle borders (`border-muted/20`), soft layered shadows, no heavy outlines.

## Adding shadcn Components

```bash
npx shadcn@latest add <component>
```

Components land in `src/components/ui/`. They import from `radix-ui` (the unified package, not `@radix-ui/react-*`).
