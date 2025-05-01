"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { products } from "./productdata";
import Link from "next/link";

// Featured Products Section for Home Page
export default function FeaturedProducts() {
  // Get 4 featured products (you can adjust this logic as needed)
  const featuredProducts = products.slice(0, 4);

  // State for tracking which product is being hovered
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-200 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Premium supplements designed to help you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredProduct === product.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-gray-300 flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  ></img>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-black">
                    ${product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black hover:bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/products" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition duration-200 inline-flex items-center"
            >
              View All Products
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
