# Image assets required by the homepage

No photography exists yet, so every image slot on the homepage renders a
documented placeholder — a fine diagonal hatch (the drawing convention for
"material to be specified") printed with the filename, the size to supply and
a brief. Nothing is downloaded from the internet and nothing is presented as a
finished client project.

## How to install a photograph

1. Save the file at the exact path below, under `public/`.
2. Open `src/content/images.ts`, find the matching entry, and set
   `available: true`.

That is the only change needed. `MediaSlot` swaps the placeholder for a
`next/image` with the right `sizes` and `priority` already set.

## Formats and sizing

- **Format:** WebP. Quality 78–82 is the right trade-off at these dimensions.
- **Dimensions below are the intrinsic size to supply** — Next.js generates the
  smaller variants. Supplying larger than listed wastes bytes; smaller will
  soften on high-density screens.
- **Colour:** sRGB. The palette is warm-neutral, so photographs with a cool
  blue cast will fight the page. Warm daylight suits it.
- **Never composite text into an image.** All type is live.

---

## Hero

| File | Directory | Pixels | Ratio | What it should show |
|---|---|---|---|---|
| `hero-poster.webp` | `/public/images` | 1920 × 1080 | 16:9 | First-frame still of the hero video. Used as the video poster and as the static frame for reduced-motion visitors. Export it from `media/hero.mp4` so it matches the footage exactly. |

Until this file exists, the hero paints a graphite plate under the video (no
broken-poster request is made) and reduced-motion visitors are shown a real
frame held from the video itself at the one-second mark.

## About

| File | Directory | Pixels | Ratio | What it should show |
|---|---|---|---|---|
| `about-craft.webp` | `/public/images/about` | 1400 × 1750 | 4:5 | Vertical portrait of work in progress in an occupied home — hands, a tool, a partially finished surface. Natural light. No staged smiling crew. |
| `about-detail.webp` | `/public/images/about` | 900 × 900 | 1:1 | Tight detail of a finished joint, edge or reveal — the close-up that proves the standard of the finish work. |

## Services

Each of these appears as the plate that develops when its row is hovered on
desktop. They are not shown on mobile, so they only need to read at ~300 px
wide.

| File | Directory | Pixels | Ratio | What it should show |
|---|---|---|---|---|
| `service-renovation.webp` | `/public/images/services` | 1000 × 1250 | 4:5 | Whole-home renovation: an open, refinished living space from a low, wide angle. |
| `service-kitchen.webp` | `/public/images/services` | 1000 × 1250 | 4:5 | Completed kitchen: cabinetry runs, counter edge and hardware in daylight. |
| `service-bathroom.webp` | `/public/images/services` | 1000 × 1250 | 4:5 | Completed bathroom: tile layout, niche and fixture detail. Avoid heavy wide-angle distortion. |
| `service-basement.webp` | `/public/images/services` | 1000 × 1250 | 4:5 | Finished basement: full-height finished walls and lighting, showing usable ceiling height. |
| `service-addition.webp` | `/public/images/services` | 1000 × 1250 | 4:5 | Home addition: exterior view where new structure meets the existing house. |
| `service-general.webp` | `/public/images/services` | 1000 × 1250 | 4:5 | General contracting: framing or rough-in stage, clean and organised site. |

## Capabilities

These are the largest images on the page and carry the section. They are
labelled "What we build" rather than "Projects" precisely because they are not
yet documented client work — do not caption them as completed jobs unless they
are.

| File | Directory | Pixels | Ratio | What it should show |
|---|---|---|---|---|
| `capability-structure.webp` | `/public/images/projects` | 1600 × 2000 | 4:5 | Structural work — new framing, a beam, or a wall opening being formed. Shows what is behind the finish. |
| `capability-millwork.webp` | `/public/images/projects` | 1600 × 1067 | 3:2 | Built-in cabinetry or trim carpentry, photographed square-on so alignment reads. |
| `capability-tile.webp` | `/public/images/projects` | 1200 × 1500 | 4:5 | Tile and stone: a layout where the grid lines resolve cleanly into corners and edges. |
| `capability-light.webp` | `/public/images/projects` | 1200 × 1500 | 4:5 | A room where daylight is the subject — window, opening or skylight changing how the space reads. |
| `capability-surface.webp` | `/public/images/projects` | 1600 × 1067 | 3:2 | Surfaces and materials laid together — flooring, counter, paint, hardware — as a materials study. |

## Large image CTA

| File | Directory | Pixels | Ratio | What it should show |
|---|---|---|---|---|
| `cta-potential.webp` | `/public/images/cta` | 2400 × 1350 | 16:9 | Wide, calm interior with real depth — a finished room shot toward a light source. **Leave the left third quiet**: the headline and button sit there over a dark scrim. |

---

## Video

The hero video is already in place. It was found at `media/hero.mp4` and copied
to `public/videos/hero-contractor.mp4`; the original is untouched.

- 1920 × 1080, H.264 + AAC, 7.99 s, 5.4 MB
- Loaded during browser idle time after first paint, so it does not compete
  with the initial render
- Muted, looping, `playsInline`, no controls, `object-cover`

If you replace it, keep it short and quiet — the loop is 8 seconds and any
audio track is muted and never surfaced.
