# JADE — general contractor homepage

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons.

Only the homepage is built. Nothing else is scaffolded yet.

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Where things live

| Path | What it is |
|---|---|
| `src/app/page.tsx` | Section order for the homepage |
| `src/app/globals.css` | Design tokens, the width-axis utilities, base styles |
| `src/content/site.ts` | **All copy**, and every TODO placeholder |
| `src/content/images.ts` | Every image the page needs, and whether it exists yet |
| `src/components/site/` | One component per homepage section |
| `src/components/ui/` | `SheetMark`, `DimensionRule`, `MediaSlot`, buttons, `Section` |
| `IMAGE-ASSETS.md` | Photography brief — filenames, sizes, what each shot should show |

## The design system, briefly

**One family, two extremes.** Archivo is loaded with its `wdth` variable axis.
Headlines are set genuinely expanded (`wdth` 118) and annotations genuinely
condensed (`wdth` 74) — that contrast is the site's signature, and it is why
there is no second sans and no monospace label face. Newsreader is loaded for
one job only: running prose (the About text, quotes, FAQ answers).

**Drawing-set structure.** Sections are labelled with a sheet marker (`A-01`,
`A-02`…) placed in the left margin rail beside the heading rather than stacked
above it as an eyebrow. Dividers with end ticks read as dimension lines. The
process timeline uses station ticks on a continuous rule.

**Numbers mean two different things.** In Services they are catalogue indices
in the margin. In Process they are genuinely sequential and get the oversized
treatment. Nothing else on the page is numbered for decoration.

**Nothing is a rounded card.** `border-radius: 0` is set globally.

## Filling in the placeholders

Everything the contractor has not supplied is a visible `TODO` string, never a
plausible-looking invention. Search the repo for `TODO` to find them all.

- **Company name, phone, email, address, licence, insurance, year established**
  — `TODO` object at the top of `src/content/site.ts`. The page title in
  `src/app/layout.tsx` also needs the real name.
- **Phone CTAs** are hidden until real. Set `PHONE` in `src/content/site.ts` to
  a real number and the header, final CTA and footer phone links all appear.
- **Testimonials** are empty slots by design — no invented review appears
  anywhere. Fill `quote`, `attribution` and `project` in the `TESTIMONIALS`
  array and a slot renders as a finished testimonial.
- **Service areas** are placeholders. Add `{ name: "Springfield", slug:
  "springfield" }` and the entry becomes a link to `/service-areas/springfield`,
  ready for city pages to be added later.
- **Images** — see `IMAGE-ASSETS.md`.

## Accessibility and motion

- Reduced motion is respected: the hero video loads but is held paused on a
  frame one second in, so those visitors see a real still from the footage
  rather than a blank plate. Transitions and the load sequence collapse.
- The FAQ uses native `<details>` elements — keyboard and screen-reader correct
  with no JavaScript. Browsers supporting `::details-content` animate the panel.
- Focus is visible everywhere; interactive targets are at least 44–48 px.
- Verified with no horizontal overflow at 375, 430, 768, 1024, 1440 and 1920.
