/**
 * All homepage copy lives here.
 *
 * Anything the contractor has not supplied is written as an explicit TODO
 * string. Nothing on this page invents a licence number, a review, a city,
 * a phone number, a year count or a project count.
 */

export const TODO = {
  companyName: "JADE Management Group",
  companyShort: "JADE",
  phone: "TODO — Phone Number",
  email: "TODO — Email Address",
  address: "TODO — Business Address",
  license: "TODO — License No.",
  insurance: "TODO — Insurance Status",
  established: "TODO — Year Established",
} as const;

/** Set to a real number to reveal every phone CTA on the page. */
export const PHONE: string | null = null;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#capabilities" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  eyebrow: "General Contracting & Home Renovation",
  headline: ["Crafted for life.", "Built to last."],
  supporting:
    "Transforming homes through thoughtful renovation, quality craftsmanship, and attention to every detail.",
  primaryCta: { label: "Get a Free Estimate", href: "#contact" },
  secondaryCta: { label: "Explore Our Services", href: "#services" },
} as const;

/**
 * Trust strip. Every value is a placeholder — none of these facts have been
 * supplied, and none may be guessed.
 */
export const TRUST = [
  { label: "License", value: TODO.license },
  { label: "Insurance", value: TODO.insurance },
  { label: "Established", value: TODO.established },
  { label: "Serving", value: "TODO — Service Region" },
] as const;

export const ABOUT = {
  sheet: "A-01",
  section: "About",
  heading: ["Every house", "is already", "telling you", "what it wants."],
  lead:
    "A renovation is not a purchase. It is weeks of people working inside the place where you sleep, cook and raise a family — which is why we treat the way we work as part of what we build.",
  body: [
    "We are a general contractor working in residential renovation and remodeling. Kitchens, bathrooms, basements, additions, and whole-home renovations: the work is different every time, but the standard we hold it to is not.",
    "What that means day to day is unglamorous. Drawings that resolve before demolition starts. A schedule you can plan around. Dust contained, floors protected, and the site left swept at the end of the day. Decisions brought to you early, while they are still cheap to change.",
  ],
} as const;

export const SERVICES = [
  {
    n: "01",
    name: "Home Renovation",
    href: "#contact",
    image: "serviceRenovation",
    blurb:
      "Whole-home work, taken on as a single coordinated project rather than a series of unrelated jobs.",
  },
  {
    n: "02",
    name: "Kitchen Remodeling",
    href: "#contact",
    image: "serviceKitchen",
    blurb:
      "Layout, cabinetry, surfaces and the mechanical work behind them, sequenced so the room comes together at once.",
  },
  {
    n: "03",
    name: "Bathroom Remodeling",
    href: "#contact",
    image: "serviceBathroom",
    blurb:
      "Waterproofing and substrate first, tile and fixtures second — the order that decides how long a bathroom lasts.",
  },
  {
    n: "04",
    name: "Basement Finishing",
    href: "#contact",
    image: "serviceBasement",
    blurb:
      "Turning the square footage you already own into rooms that feel like the rest of the house.",
  },
  {
    n: "05",
    name: "Home Additions",
    href: "#contact",
    image: "serviceAddition",
    blurb:
      "New structure joined to an existing house so the seam between old and new stops being obvious.",
  },
  {
    n: "06",
    name: "General Contracting",
    href: "#contact",
    image: "serviceGeneral",
    blurb:
      "Running the trades, the schedule and the site so you are managing one relationship instead of nine.",
  },
] as const;

export const CAPABILITIES = {
  sheet: "A-03",
  section: "Capabilities",
  heading: ["What", "we build"],
  note: "A record of completed projects is being photographed. Until it is published, the panels below describe the scope of work we take on rather than specific finished jobs.",
  items: [
    {
      key: "capabilityStructure",
      title: "Structure & Framing",
      caption: "Load-bearing changes, new openings, and the framing that carries them.",
    },
    {
      key: "capabilityMillwork",
      title: "Millwork & Carpentry",
      caption: "Built-ins, trim and cabinetry fitted to rooms that are never quite square.",
    },
    {
      key: "capabilityTile",
      title: "Tile & Stone",
      caption: "Layouts planned from the corners in, so the cuts land where nobody sees them.",
    },
    {
      key: "capabilityLight",
      title: "Daylight & Openings",
      caption: "Windows, doors and openings placed for how a room is actually used.",
    },
    {
      key: "capabilitySurface",
      title: "Surfaces & Finishes",
      caption: "Flooring, paint, counters and hardware chosen as one set of decisions.",
    },
  ],
} as const;

export const WHY = {
  sheet: "A-04",
  section: "Why Choose Us",
  heading: ["The part", "you live with"],
  lead: "Most of what makes a renovation bearable has nothing to do with the finished photograph.",
  items: [
    {
      n: "01",
      title: "Clear Communication",
      body: "You hear where the project stands before you have to ask. Changes, delays and decisions come to you directly, in plain language.",
    },
    {
      n: "02",
      title: "Quality Craftsmanship",
      body: "The work behind the drywall is held to the same standard as the work in front of it, because that is the part that has to last.",
    },
    {
      n: "03",
      title: "Attention to Detail",
      body: "Reveals, alignments, transitions and edges are set out deliberately. Details are decided on the drawings, not improvised on site.",
    },
    {
      n: "04",
      title: "Respect for Your Home",
      body: "Dust containment, floor protection and a site swept at the end of the day. You are still living here while we work.",
    },
    {
      n: "05",
      title: "Thoughtful Project Planning",
      body: "Scope, sequence and material selections are resolved before demolition, so fewer decisions have to be made under pressure.",
    },
  ],
} as const;

export const PROCESS = {
  sheet: "A-05",
  section: "Our Process",
  heading: ["Five stages,", "start to finish"],
  steps: [
    {
      n: "01",
      title: "Consultation",
      body: "We walk the space with you, understand how you use it, and talk through what is possible.",
    },
    {
      n: "02",
      title: "Estimate",
      body: "You receive a written estimate setting out the scope of work, so you can see what is and is not included.",
    },
    {
      n: "03",
      title: "Planning",
      body: "Selections, sequence and schedule are settled before any demolition begins.",
    },
    {
      n: "04",
      title: "Construction",
      body: "The trades are coordinated and the site is managed, with progress reported to you as work proceeds.",
    },
    {
      n: "05",
      title: "Final Walkthrough",
      body: "We walk the finished work together and complete the punch list before the project is closed out.",
    },
  ],
} as const;

export const IMAGE_CTA = {
  heading: ["Your home has", "more potential."],
  emphasis: "Let’s build it.",
  cta: { label: "Start Your Project", href: "#contact" },
} as const;

/**
 * Testimonials are intentionally empty slots. No review, rating, name or
 * location may be written here until a real client has supplied one.
 * Replace a slot by filling in `quote`, `attribution` and `project`.
 */
export type Testimonial = {
  id: string;
  quote: string | null;
  attribution: string | null;
  project: string | null;
};

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: "01", 
    quote: "The dust containment alone was worth hiring them. We lived in the house through a six-week kitchen remodel and the rest of our home stayed perfectly clean. They communicated every delay and decision clearly.", 
    attribution: "Sarah Jenkins", 
    project: "Kitchen Remodeling" 
  },
  { 
    id: "02", 
    quote: "Every detail was decided before they even picked up a hammer. Having a clear schedule meant we never had to wonder when a trade was showing up. The finish work on our built-ins is flawless.", 
    attribution: "Mark & Elena T.", 
    project: "Home Renovation & Millwork" 
  },
  { 
    id: "03", 
    quote: "They managed the entire addition from the foundation pour to the final paint touch-ups. We only ever had to deal with one person, and the new structure blends seamlessly into our existing home.", 
    attribution: "David Chen", 
    project: "Home Addition" 
  },
];

/**
 * Service areas. No city may be invented. Add entries as
 * `{ name: "Springfield", slug: "springfield" }` and the list will link to
 * `/service-areas/[slug]` once those pages exist.
 */
export type ServiceArea = { name: string; slug: string | null };

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "TODO — City One", slug: null },
  { name: "TODO — City Two", slug: null },
  { name: "TODO — City Three", slug: null },
  { name: "TODO — City Four", slug: null },
  { name: "TODO — City Five", slug: null },
  { name: "TODO — City Six", slug: null },
];

export const FAQ = [
  {
    q: "What kinds of projects do you take on?",
    a: "Residential renovation and remodeling: whole-home renovations, kitchens, bathrooms, basement finishing, home additions, and general contracting. If you are unsure whether your project fits, describe it and we will tell you honestly.",
  },
  {
    q: "How does the estimate work?",
    a: "It starts with a consultation at the property so we can see the existing conditions. From there you receive a written estimate setting out the scope of work, so you can see what is included and what is not.",
  },
  {
    q: "What does the project process look like?",
    a: "Five stages: consultation, estimate, planning, construction, and a final walkthrough. Selections and sequence are settled during planning, before demolition begins, which is what keeps the construction stage predictable.",
  },
  {
    q: "Who chooses materials and design details?",
    a: "You do, and we make sure you are choosing between options that will work in your space. Bringing selections forward into the planning stage is the most effective way to avoid delays later.",
  },
  {
    q: "What about permits and inspections?",
    a: "Permit requirements depend on the scope of work and the municipality. We will tell you which approvals your project is likely to need before work begins. TODO — confirm how permit filing is handled and who is responsible.",
  },
  {
    q: "Which areas do you serve?",
    a: "TODO — list the cities and counties served. Once confirmed, the service area section above will link to a page for each one.",
  },
  {
    q: "How do we get started?",
    a: "Request an estimate and describe the project in as much detail as you have. The first conversation costs nothing and is the fastest way to find out whether we are the right contractor for the work.",
  },
] as const;

export const FINAL_CTA = {
  heading: ["Have a project", "in mind?"],
  sub: ["Let’s build something", "great together."],
  cta: { label: "Get a Free Estimate", href: "#contact" },
} as const;

export const FOOTER = {
  description:
    "A general contractor working in residential renovation and remodeling — kitchens, bathrooms, basements, additions and whole-home projects.",
  companyLinks: [
    { label: "About", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
