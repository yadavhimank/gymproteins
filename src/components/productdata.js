// Simple product data for our protein supplement store
export const products = [
  {
    id: "1",
    name: "Premium Whey Isolate",
    price: 59.99,
    category: "Whey",
    description: "25g of protein per serving with minimal carbs and fat.",
    image: "/whey-banner-.webp",
  },
  {
    id: "2",
    name: "Mass Gainer 5000",
    price: 64.99,
    category: "Mass Gainer",
    description:
      "1250 calories per serving with 50g of protein for maximum gains.",
    image: "/whey-banner-.webp",
  },
  {
    id: "3",
    name: "Plant Power Protein",
    price: 49.99,
    category: "Vegan",
    description: "100% plant-based protein blend with 24g protein per serving.",
    image: "/whey-banner-.webp",
  },
  {
    id: "4",
    name: "Pre-Workout Energize",
    price: 39.99,
    category: "Pre-Workout",
    description:
      "Explosive energy formula with creatine, caffeine, and B-vitamins.",
    image: "/whey-banner-.webp",
  },
  {
    id: "5",
    name: "Whey Protein Concentrate",
    price: 45.99,
    category: "Whey",
    description: "Classic whey formula with 22g protein per scoop.",
    image: "/whey-banner-.webp",
  },
  {
    id: "6",
    name: "Vegan Mass Builder",
    price: 54.99,
    category: "Vegan",
    description: "Plant-based mass gainer with 800 calories per serving.",
    image: "/whey-banner-.webp",
  },
];

// Extract unique categories and add "All" option
export const categories = [
  "All",
  ...Array.from(new Set(products.map((product) => product.category))),
];
