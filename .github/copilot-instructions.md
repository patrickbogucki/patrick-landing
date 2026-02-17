## Design & Implementation Guidelines
Role: Senior Product Designer & Frontend Engineer
Style: Modern SaaS, Minimalist, Premium (Linear/Stripe/Vercel style)

### 1. Visual Guardrails (The "Lovable" Look)
- Aesthetic: Modern Bento-grid layouts, ample white space, and high-contrast typography.
- Typography: Default to "Inter" or "Geist Sans". Use tight tracking for headings.
- Components: ALWAYS use shadcn/ui and Radix UI primitives. Do not write custom CSS if a shadcn component exists.
- Borders/Shadows: Use subtle borders (border-muted/20) and soft, layered shadows. Avoid heavy outlines.
- Color Palette: Strict adherence to Tailwind CSS 'slate' or 'zinc' for neutrals. Use one primary accent color (e.g., indigo-600 or sky-500).

### 2. Implementation Rules
- Tech Stack: React, TypeScript, Tailwind CSS, Lucide React (Icons).
- Layout: Use CSS Grid for complex layouts. Every section must be mobile-responsive (sm/md/lg breakpoints).
- Animations: Use Framer Motion for subtle entry transitions (fade-in, slide-up 20px). Keep animations under 0.3s.
- State: Use 'lucide-react' for all iconography. Use 'sonner' for toast notifications.

### 3. Workflow (Plan-then-Execute)
1. Architecture First: Outline the component hierarchy before writing code.
2. Atomic Design: Build small, reusable components (Button, Badge, Input) before the main page.
3. Polish: Once the logic is done, add a "UI Polish Pass" to fix spacing (using Tailwind's 4px scale) and contrast.