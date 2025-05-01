"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { categories } from "./productdata";

const CategorySection = () => {
  const router = useRouter();

  // Remove "All" from categories for this display
  const displayCategories = categories.filter((cat) => cat !== "All");

  // Category images with fixed Vegan image
  const categoryImages = {
    Whey: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=500&auto=format&fit=crop",
    "Mass Gainer":
      "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=500&auto=format&fit=crop",
    // Fixed Vegan image with a more reliable URL
    Vegan:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500&auto=format&fit=crop",
    "Pre-Workout":
      "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=500&auto=format&fit=crop",
  };

  const handleCategoryClick = (category) => {
    router.push(`/category/${category.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Shop By Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Browse our premium selection of supplements designed to help you
            reach your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {displayCategories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="relative h-72">
                  <img
                    src={
                      categoryImages[category] ||
                      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=500&auto=format&fit=crop"
                    }
                    alt={category}
                    className="w-full h-full object-cover"
                  ></img>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h3 className="text-white text-3xl font-bold">
                      {category}
                    </h3>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    Premium {category} Supplements
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center w-full transition-colors text-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(category);
                    }}
                  >
                    Shop Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
