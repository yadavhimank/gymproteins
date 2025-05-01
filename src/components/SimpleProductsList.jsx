"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { categories, products } from "./productdata";

export default function SimpleProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product already exists in cart
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        // Increase quantity if product already in cart
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    // Simple alert to show the cart action
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Simple Category Filter */}
        <div className="mb-8 flex justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple Product Card Component
function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      <div className="relative pt-[60%] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        ></img>
        {/* Category badge */}
        <div className="absolute bottom-0 left-0 m-3">
          <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <div className="text-lg font-bold text-black mb-2">
          ${product.price.toFixed(2)}
        </div>
        {/* Simple star rating */}
        <div className="flex text-yellow-400 mb-2">
          <span>★★★★★</span>
          <span className="text-xs text-gray-500 ml-1">(5)</span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-black text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
