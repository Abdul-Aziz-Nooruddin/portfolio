# React + TypeScript + Tailwind + shadcn Setup

This workspace currently contains a static site (`index.html`, `script.js`, `style.css`) and does not yet have React, TypeScript, Tailwind, or shadcn initialized.

## What was integrated

These component files were added without changing your existing website content:

- `components/ui/splite.tsx`
- `components/ui/demo.tsx`
- `components/ui/spotlight.tsx`
- `components/ui/spotlight-motion.tsx`
- `components/ui/card.tsx`
- `lib/utils.ts`

## Why `/components/ui` matters

The shadcn ecosystem expects reusable UI building blocks to live in `components/ui`.

Benefits:

- Predictable import paths (`@/components/ui/...`).
- Consistent organization between generated shadcn components and custom UI.
- Easier maintenance and team onboarding.

## Default style path

In a Next.js + shadcn setup, global Tailwind styles are usually in:

- `app/globals.css` (App Router), or
- `src/app/globals.css` when using `src/` structure.

## Recommended setup commands (from this folder)

1. Initialize a Next.js app with TypeScript and Tailwind:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

2. Initialize shadcn:

```bash
npx shadcn@latest init
```

3. Ensure `components.json` resolves to these aliases:

- `components`: `@/components`
- `utils`: `@/lib/utils`

4. Install requested external dependencies:

```bash
npm install @splinetool/runtime @splinetool/react-spline framer-motion
```

5. Install utility dependencies required by `lib/utils.ts`:

```bash
npm install clsx tailwind-merge
```

## Tailwind note for `animate-spotlight`

`components/ui/spotlight.tsx` uses `animate-spotlight`. Add a keyframe and animation entry in `tailwind.config.ts` if not already present.

Example:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
      },
    },
  },
  plugins: [],
}

export default config
```

## Where to render the demo component

After React setup is complete, render in:

- `src/app/page.tsx` (App Router default)

Example usage:

```tsx
import { SplineSceneBasic } from '@/components/ui/demo'

export default function Page() {
  return (
    <main className="p-6">
      <SplineSceneBasic />
    </main>
  )
}
```

## Implementation checklist against your request

- Component structure analyzed: yes.
- Required dependencies identified: yes.
- State/hooks reviewed: yes (`lazy`, `Suspense`, mouse tracking in motion spotlight).
- Context providers: none required by these files.
- Requested npm dependencies listed: yes.
- Existing website content changed: no.

## Questions to confirm before final usage

1. What props/data should be dynamic (for example the Spline `scene` URL and text content)?
2. Do you want the static SVG spotlight or the mouse-follow spotlight variant by default?
3. Should the demo be full-width section, hero block, or embedded card on the homepage?
4. What responsive behavior do you prefer below `md` breakpoint (stack columns or keep split view)?
5. Do you want any image assets added in surrounding sections, and if yes which sections should use Unsplash images?
