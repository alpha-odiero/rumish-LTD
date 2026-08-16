import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "building-materials",
    name: "Building Materials",
    icon: "Layers",
    tint: "bg-blue-50 text-blue-600",
    shortDescription: "Cement, sand, ballast, blocks and essential construction materials.",
    description:
      "Explore cement, sand, ballast, blocks and other essential construction materials for foundations, walls and finishing work.",
    featured: true,
  },
  {
    slug: "roofing",
    name: "Roofing",
    icon: "Warehouse",
    tint: "bg-orange-50 text-orange-600",
    shortDescription: "Iron sheets, roofing nails, gutters and roof fittings.",
    description:
      "Iron sheets, roofing nails, gutters and everything needed for a strong, watertight roof.",
    featured: true,
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    icon: "Droplet",
    tint: "bg-cyan-50 text-cyan-700",
    shortDescription: "Taps, fittings, water tanks and bathroom essentials.",
    description:
      "Taps, fittings, water storage tanks and bathroom essentials for reliable plumbing systems.",
    featured: true,
  },
  {
    slug: "electrical",
    name: "Electrical",
    icon: "Zap",
    tint: "bg-amber-50 text-amber-600",
    shortDescription: "Cables, switches, sockets and electrical accessories.",
    description:
      "Electrical cables, switches, sockets, conduits and accessories for safe wiring installations.",
    featured: true,
  },
  {
    slug: "paints",
    name: "Paints",
    icon: "Paintbrush",
    tint: "bg-rose-50 text-rose-600",
    shortDescription: "Emulsion, enamel, primers, brushes and painting tools.",
    description:
      "Emulsion, enamel, primers, paint brushes and everything you need for a clean, lasting finish.",
    featured: true,
  },
  {
    slug: "tools-equipment",
    name: "Tools & Equipment",
    icon: "Hammer",
    tint: "bg-stone-100 text-stone-700",
    shortDescription: "Hand tools and equipment for building and repairs.",
    description:
      "Hammers, saws, measuring tools, wheelbarrows and general equipment for every job.",
    featured: true,
  },
  {
    slug: "timber-wood",
    name: "Timber & Wood",
    icon: "TreePine",
    tint: "bg-green-50 text-green-700",
    shortDescription: "Structural timber, plywood and wood products.",
    description:
      "Structural timber, plywood and treated wood products for framing, roofing and carpentry.",
  },
  {
    slug: "steel-metal",
    name: "Steel & Metal",
    icon: "Fence",
    tint: "bg-slate-100 text-slate-700",
    shortDescription: "Steel bars, wire, gates and metal fabrication supplies.",
    description:
      "Steel bars, binding wire, metal sections and supplies for reinforcement and fabrication.",
  },
  {
    slug: "doors-windows",
    name: "Doors & Windows",
    icon: "DoorOpen",
    tint: "bg-orange-50 text-orange-700",
    shortDescription: "Doors, door locks, handles and window fittings.",
    description:
      "Doors, door locks, handles, hinges and window fittings for secure and finished openings.",
  },
  {
    slug: "tiles-flooring",
    name: "Tiles & Flooring",
    icon: "LayoutGrid",
    tint: "bg-violet-50 text-violet-600",
    shortDescription: "Floor and wall tiles, cement and tiling accessories.",
    description:
      "Floor and wall tiles, tile cement, spacers and accessories for durable, attractive surfaces.",
  },
  {
    slug: "pipes-fittings",
    name: "Pipes & Fittings",
    icon: "GitBranch",
    tint: "bg-teal-50 text-teal-700",
    shortDescription: "PVC pipes, connectors, elbows and plumbing fittings.",
    description:
      "PVC pipes, connectors, elbows, valves and a full range of plumbing fittings.",
  },
  {
    slug: "general-hardware",
    name: "General Hardware",
    icon: "Package",
    tint: "bg-blue-50 text-blue-600",
    shortDescription: "Nails, screws, fasteners and everyday hardware items.",
    description:
      "Nails, screws, fasteners, hinges, wire and everyday hardware items for any project.",
  },
];

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryName = (slug: string) =>
  getCategory(slug)?.name ?? "General Hardware";
