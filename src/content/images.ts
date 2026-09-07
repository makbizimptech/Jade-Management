/**
 * Central registry for every image the homepage needs.
 *
 * No photography exists yet, so every slot renders a documented placeholder.
 * To go live with a real photo: drop the file at `dir/file`, then flip
 * `available` to true. Nothing else needs to change.
 */
export type ImageSpec = {
  /** Directory under /public, e.g. "/images/about". */
  dir: string;
  /** Exact filename to supply. */
  file: string;
  /** Recommended intrinsic size in pixels. */
  width: number;
  height: number;
  /** Human-readable aspect ratio, shown on the placeholder. */
  ratio: string;
  /** What the photograph should show. */
  description: string;
  /** Flip to true once the file exists in /public. */
  available: boolean;
};

const spec = (s: Omit<ImageSpec, "available"> & { available?: boolean }): ImageSpec => ({
  available: true,
  ...s,
});

export const IMAGES = {
  heroPoster: spec({
    dir: "/images",
    file: "hero-poster.webp",
    width: 1920,
    height: 1080,
    ratio: "16:9",
    description:
      "First-frame still of the hero video, used as poster and as the static experience for reduced-motion visitors.",
  }),

  aboutPrimary: spec({
    dir: "/images/about",
    file: "about-craft.webp",
    width: 1400,
    height: 1750,
    ratio: "4:5",
    description:
      "Vertical portrait of work in progress in an occupied home — hands, a tool, a partially finished surface. Natural light, no staged smiling crew.",
  }),
  aboutDetail: spec({
    dir: "/images/about",
    file: "about-detail.webp",
    width: 900,
    height: 900,
    ratio: "1:1",
    description:
      "Tight detail shot of a finished joint, edge or reveal — the kind of close-up that proves the standard of the finish work.",
  }),

  serviceRenovation: spec({
    dir: "/images/services",
    file: "service-renovation.webp",
    width: 1000,
    height: 1250,
    ratio: "4:5",
    description: "Whole-home renovation: an open, refinished living space photographed from a low, wide angle.",
  }),
  serviceKitchen: spec({
    dir: "/images/services",
    file: "service-kitchen.webp",
    width: 1000,
    height: 1250,
    ratio: "4:5",
    description: "Completed kitchen: cabinetry runs, counter edge and hardware in daylight.",
  }),
  serviceBathroom: spec({
    dir: "/images/services",
    file: "service-bathroom.webp",
    width: 1000,
    height: 1250,
    ratio: "4:5",
    description: "Completed bathroom: tile layout, niche and fixture detail. Avoid heavy wide-angle distortion.",
  }),
  serviceBasement: spec({
    dir: "/images/services",
    file: "service-basement.webp",
    width: 1000,
    height: 1250,
    ratio: "4:5",
    description: "Finished basement: full-height finished walls and lighting, showing usable ceiling height.",
  }),
  serviceAddition: spec({
    dir: "/images/services",
    file: "service-addition.webp",
    width: 1000,
    height: 1250,
    ratio: "4:5",
    description: "Home addition: exterior view where new structure meets the existing house.",
  }),
  serviceGeneral: spec({
    dir: "/images/services",
    file: "service-general.webp",
    width: 1000,
    height: 1250,
    ratio: "4:5",
    description: "General contracting: framing or rough-in stage, clean and organised site.",
  }),

  capabilityStructure: spec({
    dir: "/images/projects",
    file: "capability-structure.webp",
    width: 1600,
    height: 2000,
    ratio: "4:5",
    description: "Structural work — new framing, a beam, or a wall opening being formed. Shows what is behind the finish.",
  }),
  capabilityMillwork: spec({
    dir: "/images/projects",
    file: "capability-millwork.webp",
    width: 1600,
    height: 1067,
    ratio: "3:2",
    description: "Built-in cabinetry or trim carpentry, photographed square-on to show alignment.",
  }),
  capabilityTile: spec({
    dir: "/images/projects",
    file: "capability-tile.webp",
    width: 1200,
    height: 1500,
    ratio: "4:5",
    description: "Tile and stone: a layout where the grid lines resolve cleanly into corners and edges.",
  }),
  capabilityLight: spec({
    dir: "/images/projects",
    file: "capability-light.webp",
    width: 1200,
    height: 1500,
    ratio: "4:5",
    description: "A room where daylight is the subject — window, opening, or skylight changing how the space reads.",
  }),
  capabilitySurface: spec({
    dir: "/images/projects",
    file: "capability-surface.webp",
    width: 1600,
    height: 1067,
    ratio: "3:2",
    description: "Surfaces and materials laid together — flooring, counter, paint, hardware — as a materials study.",
  }),

  ctaBanner: spec({
    dir: "/images/cta",
    file: "cta-potential.webp",
    width: 2400,
    height: 1350,
    ratio: "16:9",
    description:
      "Wide, calm interior with real depth — a finished room shot toward a light source. Leave the left third quiet for the headline.",
  }),
} as const;

export type ImageKey = keyof typeof IMAGES;

export const src = (s: ImageSpec) => `${s.dir}/${s.file}`;

/** Ordered list used by the asset manifest in the README. */
export const IMAGE_MANIFEST: ImageSpec[] = Object.values(IMAGES);
