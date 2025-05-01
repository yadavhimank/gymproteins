"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { products, categories } from "@/components/productdata";

// Import your product data

const CategoryPage = ({ params }) => {
  const { category } = params;
  const decodedCategory = category ? decodeURIComponent(category) : null;

  const [selectedCategory, setSelectedCategory] = useState(
    decodedCategory || "All"
  );
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("popularity");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Subcategories for demonstration
  const subcategories = {
    Whey: ["Isolate", "Concentrate", "Hydrolyzed", "Blend"],
    Vegan: ["Pea Protein", "Rice Protein", "Hemp Protein", "Blend"],
    "Mass Gainer": ["High Calorie", "Lean Mass", "Extreme Mass"],
    "Pre-Workout": ["Stimulant", "Non-Stimulant", "Pump", "Energy"],
  };

  const subcategoryItems = subcategories[selectedCategory] || [];

  // Filter products based on category
  useEffect(() => {
    setIsLoading(true);

    // Simulate loading delay for smooth transitions
    setTimeout(() => {
      let filtered = [...products];

      if (selectedCategory !== "All") {
        filtered = filtered.filter(
          (product) => products.category === selectedCategory
        );
      }

      // Apply price filter
      filtered = filtered.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      // Apply sorting
      if (sortBy === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortBy === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 500);
  }, [selectedCategory, priceRange, sortBy]);

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
  };

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const headingText =
    selectedCategory === "All" ? "All Products" : selectedCategory;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-800">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-blue-800">
          Products
        </Link>
        {selectedCategory !== "All" && (
          <>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{selectedCategory}</span>
          </>
        )}
      </div>

      {/* Page Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {headingText}
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Filter Section */}
        <motion.div
          className="w-full lg:w-64 flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between lg:hidden mb-4 border p-3 rounded-md bg-gray-50">
            <div className="font-medium flex items-center gap-2">
              <FaFilter /> Filters
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-blue-800"
            >
              {showFilters ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>

          {/* Filter Section - Desktop always visible, mobile toggleable */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
            {/* Categories Filter */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full text-left py-1 ${
                      selectedCategory === "All"
                        ? "text-blue-800 font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All Products
                  </button>
                </li>
                {categories
                  .filter((cat) => cat !== "All")
                  .map((cat) => (
                    <li key={cat}>
                      <button
                        className={`w-full text-left py-1 ${
                          selectedCategory === cat
                            ? "text-blue-800 font-medium"
                            : "text-gray-700"
                        }`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Subcategories */}
            {subcategoryItems.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Types</h3>
                <ul className="space-y-2">
                  {subcategoryItems.map((subcat) => (
                    <li key={subcat} className="flex items-center">
                      <input
                        type="checkbox"
                        id={subcat.toLowerCase().replace(/\s+/g, "-")}
                        className="mr-2"
                      />
                      <label
                        htmlFor={subcat.toLowerCase().replace(/\s+/g, "-")}
                        className="text-gray-700"
                      >
                        {subcat}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Price Range</h3>
              <div className="px-2">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full mb-2"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Apply Filters Button (Mobile Only) */}
            <div className="lg:hidden">
              <button
                className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition-colors"
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort and Filter Section */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between mb-6 gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="text-gray-500">
              Showing {filteredProducts.length} products
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="sort" className="text-gray-500">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="bg-gray-200 h-48 rounded-md mb-4 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <div className="text-center p-10 border rounded-lg">
                  <h3 className="text-xl font-medium mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filter criteria
                  </p>
                </div>
              ) : (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                      variants={itemVariants}
                    >
                      <Link href={`/product/${product.id}`}>
                        <div className="h-48 bg-gray-200 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          ></img>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg">
                            {product.name}
                          </h3>
                          <div className="text-blue-800 font-bold my-2">
                            ${product.price.toFixed(2)}
                          </div>
                          <p className="text-gray-600 text-sm mb-4">
                            {product.description}
                          </p>
                          <button className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
