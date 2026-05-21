export type Product = {
  slug: string;
  title: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  highlight: string;
};

export const products: Product[] = [
  {
    slug: "stormbreaker-9000",
    title: "Stormbreaker 9000",
    category: "Premium Rig",
    price: "$3,299",
    description:
      "An overclocked cyberpunk rig with liquid-cooling, AI tuning, and ultra-fast DDR5 memory.",
    features: [
      "RTX 5090 Ti-level graphics",
      "64GB DDR5 memory",
      "3TB hybrid NVMe storage",
      "Custom holographic chassis",
    ],
    highlight: "Built for 4K competitive gaming and creator workflows.",
  },
  {
    slug: "nightwave-compact",
    title: "Nightwave Compact",
    category: "Small Form Factor",
    price: "$1,799",
    description:
      "A sleek compact gaming hub with whisper-quiet cooling and bright neon details.",
    features: [
      "RTX 5080 Mobile-grade performance",
      "32GB dual-channel RAM",
      "1TB NVMe SSD",
      "ARGB glass side panel",
    ],
    highlight: "Perfect for desks with limited space and maximum style.",
  },
  {
    slug: "vaporcore-xt",
    title: "VaporCore XT",
    category: "Creator Studio",
    price: "$2,249",
    description:
      "Optimized for streaming and content creation with fast storage and adaptive cooling.",
    features: [
      "AI-assisted render boost",
      "48GB DDR5 RAM",
      "2x 2TB NVMe RAID",
      "Quiet blower cooling system",
    ],
    highlight: "Stream, edit, and encode without thermal throttling.",
  },
];

export const categories = [
  {
    title: "Custom Builds",
    description: "Choose a ready-made rig with cyberpunk performance and visual flair.",
  },
  {
    title: "Builder Lab",
    description: "Mix parts, compare scores, and design a rig for your next mission.",
  },
  {
    title: "Community"
    , description: "Join the squad, share setups, and explore curated upgrades.",
  },
];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
