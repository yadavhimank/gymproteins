"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";

// Mock data for deals
const dealsData = {
  999: {
    id: "999",
    title: "BUY ANY 3",
    price: "₹999",
    originalPrice: "₹1,499",
    subtitle: "CHOOSE FROM 40+ WELLNESS PRODUCTS",
    description:
      "Mix and match any 3 products from our wellness collection at an unbeatable price. Perfect for beginners or those looking to try new supplements.",
    image: "/images/deals/deal-999.jpg",
    savings: "Save 30%",
    tag: "Most Popular",
    maxProducts: 3,
    categories: ["Proteins", "Vitamins", "Wellness"],
    availableProducts: [
      {
        id: 1,
        name: "Whey Protein Isolate",
        category: "Proteins",
        price: "₹499",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Multivitamin Complex",
        category: "Vitamins",
        price: "₹399",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "Omega-3 Fish Oil",
        category: "Wellness",
        price: "₹349",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Vitamin D3",
        category: "Vitamins",
        price: "₹299",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 5,
        name: "Protein Bars (Box of 6)",
        category: "Proteins",
        price: "₹449",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 6,
        name: "Ashwagandha Extract",
        category: "Wellness",
        price: "₹399",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  1299: {
    id: "1299",
    title: "BUY ANY 4",
    price: "₹1299",
    originalPrice: "₹1,999",
    subtitle: "CHOOSE FROM 45+ FITNESS AND WELLNESS PRODUCTS",
    description:
      "Select any 4 products from our extensive range of fitness and wellness supplements. Great value for regular gym-goers.",
    image: "/images/deals/deal-1299.jpg",
    savings: "Save 35%",
    tag: "Best Value",
    maxProducts: 4,
    categories: ["Proteins", "Pre-Workout", "Recovery", "Wellness"],
    availableProducts: [
      {
        id: 1,
        name: "Whey Protein Isolate",
        category: "Proteins",
        price: "₹499",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Pre-Workout Energy",
        category: "Pre-Workout",
        price: "₹449",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "BCAA Recovery Mix",
        category: "Recovery",
        price: "₹399",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Vitamin D3",
        category: "Wellness",
        price: "₹299",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 5,
        name: "Protein Bars (Box of 6)",
        category: "Proteins",
        price: "₹449",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 6,
        name: "Creatine Monohydrate",
        category: "Pre-Workout",
        price: "₹399",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },

  3299: {
    id: "3299",
    title: "BUY 3 @",
    price: "₹3299",
    originalPrice: "₹4,399",
    subtitle: "CHOOSE FROM 55+ FITNESS & WELLNESS PRODUCTS",
    description:
      "Our premium bundle featuring 3 top-tier fitness and wellness products. Perfect for serious athletes and fitness professionals.",
    image: "/images/deals/deal-3299.jpg",
    savings: "Save 25%",
    tag: "Premium",
    maxProducts: 3,
    categories: ["Elite Proteins", "Performance", "Recovery"],
    availableProducts: [
      {
        id: 1,
        name: "Hydrolyzed Whey Isolate",
        category: "Elite Proteins",
        price: "₹1499",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Pre-Workout Elite",
        category: "Performance",
        price: "₹1299",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "Advanced Recovery Matrix",
        category: "Recovery",
        price: "₹1199",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Micellar Casein (2kg)",
        category: "Elite Proteins",
        price: "₹1399",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 5,
        name: "Intra-Workout Complete",
        category: "Performance",
        price: "₹1099",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 6,
        name: "Joint & Recovery Pro",
        category: "Recovery",
        price: "₹999",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
};

export default function DealPage({ params }) {
  const { dealid } = params;

  const deal = dealsData[dealid];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState([]);

  if (!deal) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Deal not found</h1>
        <p className="mb-8">
          The deal you&apos;re looking for doesn&apos;t exist or has expired.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-black hover:bg-black/70 text-white px-6 py-3 rounded-md"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    );
  }

  const categories = ["All", ...deal.categories];

  const filteredProducts =
    selectedCategory === "All"
      ? deal.availableProducts
      : deal.availableProducts.filter(
          (product) => product.category === selectedCategory
        );

  const handleProductSelect = (product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      if (selectedProducts.length < deal.maxProducts) {
        setSelectedProducts([...selectedProducts, product]);
      }
    }
  };

  const isProductSelected = (productId) => {
    return selectedProducts.some((p) => p.id === productId);
  };

  const remainingSelections = deal.maxProducts - selectedProducts.length;

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 md:h-80 lg:h-96"
        style={{
          backgroundImage: `url(${deal.image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>
            {deal.tag && (
              <span className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {deal.tag}
              </span>
            )}
            <span className="bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {deal.savings}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            {deal.title} <span className="text-white/90">{deal.price}</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl">
            {deal.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {/* Deal Description */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-wrap items-baseline gap-3 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">{deal.price}</h2>
              <span className="text-lg text-gray-500 line-through">
                {deal.originalPrice}
              </span>
              <div className="flex items-center gap-1 ml-auto">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(128 reviews)</span>
              </div>
            </div>
            <p className="text-gray-700 mb-6">{deal.description}</p>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <ShoppingCart size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-blue-800">
                  How this deal works
                </h3>
                <p className="text-sm text-blue-700">
                  Select {deal.maxProducts} products from the available options
                  below. All {deal.maxProducts} products for just {deal.price}!
                </p>
              </div>
            </div>
          </div>

          {/* Product Selection */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold">
                Select Your Products
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({remainingSelections}{" "}
                  {remainingSelections === 1 ? "selection" : "selections"}{" "}
                  remaining)
                </span>
              </h3>

              {/* Category Filter */}
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Filter by:</span>
                  <div className="relative inline-block">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {filteredProducts.map((product) => {
                const isSelected = isProductSelected(product.id);

                return (
                  <div
                    key={product.id}
                    className={`border rounded-lg overflow-hidden transition-all ${
                      isSelected
                        ? "border-blue-500 shadow-md shadow-blue-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex p-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        ></img>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{product.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">
                          {product.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold">{product.price}</span>
                          <button
                            onClick={() => handleProductSelect(product)}
                            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300 text-gray-600"
                            }`}
                          >
                            {isSelected ? (
                              <Check size={14} />
                            ) : (
                              <Plus size={14} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Products Summary */}
            {selectedProducts.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 mb-8">
                <h3 className="font-medium mb-3">Your Selected Products</h3>
                <div className="space-y-3">
                  {selectedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden mr-3 flex-shrink-0">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          ></img>
                        </div>
                        <span>{product.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{product.price}</span>
                        <button
                          onClick={() => handleProductSelect(product)}
                          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                        >
                          <Minus size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t pt-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{deal.price}</span>
                  <span className="text-gray-500 line-through">
                    {deal.originalPrice}
                  </span>
                  <span className="text-green-600 font-medium">
                    {deal.savings}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Free shipping on orders over ₹999
                </p>
              </div>

              <button
                disabled={selectedProducts.length !== deal.maxProducts}
                className={`flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-white font-medium transition-colors ${
                  selectedProducts.length === deal.maxProducts
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                <ShoppingCart size={18} />
                <span>Add Bundle to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
