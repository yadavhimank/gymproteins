"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import {
  FaChevronDown,
  FaSearch,
  FaUserCircle,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import CrazyDeals from "./carzydeals";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDealsDropdown, setShowDealsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const dealsButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dealsButtonRef.current &&
        !dealsButtonRef.current.contains(event.target)
      ) {
        setShowDealsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Refs for handling outside clicks
  const categoriesRef = useRef(null);
  const accountRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setShowAccount(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMobileMenu]);

  // Handle escape key for modals
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        if (showSearch) setShowSearch(false);
        if (showCart) setShowCart(false);
        if (showMobileMenu) setShowMobileMenu(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showSearch, showCart, showMobileMenu]);

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (showSearch || showCart || showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSearch, showCart, showMobileMenu]);

  const categories = [
    "Proteins",
    "Pre Workouts",
    "Creatine",
    "Mass Gainers",
    "BCAAs",
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-white px-4 sm:px-6 md:px-12 flex justify-between items-center py-3 shadow-lg sticky top-0 z-40">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="h-12 w-auto sm:h-16 relative">
              {/* Using img for better compatibility */}
              <img
                src="/logo.jpg"
                className="h-full object-contain"
                alt="FitSupps Logo"
              ></img>
            </div>
          </Link>
        </div>

        <div className="relative">
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-black font-medium">
            <Link href="/" className="hover:text-blue-800 transition-colors">
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-blue-800 transition-colors"
            >
              Products
            </Link>
            <div className="relative" ref={dealsButtonRef}>
              <button
                className="text-black hover:text-blue-800 focus:outline-none"
                onClick={() => setShowDealsDropdown(!showDealsDropdown)}
                onMouseEnter={() => setShowDealsDropdown(true)}
              >
                Crazy Deals
              </button>
            </div>
            <div className="relative" ref={categoriesRef}>
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center gap-1 hover:text-blue-800 transition-colors"
                aria-expanded={showCategories}
                aria-haspopup="true"
              >
                <span>Categories</span> <FaChevronDown size={12} />
              </button>

              {showCategories && (
                <div className="absolute bg-white w-56 shadow-lg rounded-md mt-2 py-2 z-50">
                  {categories.map((item) => (
                    <Link
                      href={`/category/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      key={item}
                      onClick={() => setShowCategories(false)}
                    >
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                        {item}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="hover:text-blue-800 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-800 transition-colors"
            >
              Contact
            </Link>
          </nav>
          {showDealsDropdown && (
            <div
              ref={dropdownRef}
              className="absolute  left-1/2 -translate-x-1/2 top-full z-50 shadow-lg w-[1000px]"
              onMouseEnter={() => setShowDealsDropdown(true)}
              onMouseLeave={() => setShowDealsDropdown(false)}
            >
              <CrazyDeals />
            </div>
          )}
        </div>

        {/* Icons Section */}
        <div className="flex gap-4 sm:gap-5 items-center">
          {/* Cart Icon */}
          <button
            onClick={() => setShowCart(true)}
            className="hover:text-blue-800 transition-colors relative"
            aria-label="Shopping Cart"
          >
            <IoCartOutline size={26} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Search Icon */}
          <button
            onClick={() => setShowSearch(true)}
            className="hover:text-blue-800 transition-colors"
            aria-label="Search"
          >
            <FaSearch size={18} />
          </button>

          {/* Account Dropdown - Desktop */}
          <div className="hidden md:block relative" ref={accountRef}>
            <button
              onClick={() => setShowAccount(!showAccount)}
              className="flex items-center gap-1 hover:text-blue-800 transition-colors"
              aria-expanded={showAccount}
              aria-haspopup="true"
            >
              <span>Account</span>
              <FaChevronDown className="h-3 w-3" />
            </button>

            {showAccount && (
              <div className="absolute right-0 bg-white w-48 shadow-lg rounded-md mt-2 py-2 z-50">
                <Link href="/profile" onClick={() => setShowAccount(false)}>
                  <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors">
                    <FaUserCircle /> Profile
                  </div>
                </Link>
                <Link href="/orders" onClick={() => setShowAccount(false)}>
                  <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors">
                    <FaClipboardList /> Orders
                  </div>
                </Link>
                <Link href="/settings" onClick={() => setShowAccount(false)}>
                  <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors">
                    <FaCog /> Settings
                  </div>
                </Link>
                <div className="border-t my-1"></div>
                <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden hover:text-blue-800 transition-colors"
            aria-label={showMobileMenu ? "Close Menu" : "Open Menu"}
            aria-expanded={showMobileMenu}
          >
            {showMobileMenu ? <IoClose size={26} /> : <IoMenu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed top-0 right-0 w-full sm:w-3/4 md:w-1/2 h-full bg-white shadow-lg z-50 overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setShowMobileMenu(false)}>
              <IoClose size={24} />
            </button>
          </div>

          <nav className="p-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="block py-2 hover:text-blue-800"
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </Link>

              <Link
                href="/products"
                className="block py-2 hover:text-blue-800"
                onClick={() => setShowMobileMenu(false)}
              >
                Products
              </Link>

              <Link
                href="/crazydeals"
                className="block py-2 hover:text-blue-800"
                onClick={() => setShowMobileMenu(false)}
              >
                Crazy Deals
              </Link>

              <div className="py-2">
                <div className="font-medium mb-2">Categories</div>
                <div className="pl-4 space-y-2">
                  {categories.map((item) => (
                    <Link
                      key={item}
                      href={`/category/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block py-1 hover:text-blue-800"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="block py-2 hover:text-blue-800"
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block py-2 hover:text-blue-800"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </Link>

              <div className="border-t my-4 pt-4">
                <div className="font-medium mb-2">Account</div>
                <div className="space-y-3 pl-4">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 py-1 hover:text-blue-800"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <FaUserCircle /> Profile
                  </Link>
                  <Link
                    href="/orders"
                    className="flex items-center gap-2 py-1 hover:text-blue-800"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <FaClipboardList /> Orders
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center gap-2 py-1 hover:text-blue-800"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <FaCog /> Settings
                  </Link>
                  <button className="flex items-center gap-2 py-1 text-red-600">
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Search Popup */}
      {showSearch && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {searchQuery && (
                <div className="mt-4 max-h-80 overflow-y-auto">
                  <div className="text-sm text-gray-500 mb-2">Products</div>
                  <div className="space-y-2">
                    {[
                      "Whey Protein Isolate",
                      "Creatine Monohydrate",
                      "Pre-workout",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-gray-200 rounded-md mr-3"></div>
                        <div>
                          <div className="font-medium">{item}</div>
                          <div className="text-sm text-gray-500">₹2999</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                  onClick={() => setShowSearch(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end"
          onClick={() => setShowCart(false)}
        >
          <div
            className="w-full sm:w-96 lg:w-1/3 h-full bg-white shadow-lg overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Your Cart (2)</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoClose size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Cart Items */}
              <div className="flex border-b pb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-3 flex-shrink-0">
                  <img
                    src="/protein.jpg"
                    className="w-full h-full object-cover"
                    alt="Protein"
                  ></img>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Quantum Whey Isolate</h3>
                  <p className="text-sm text-gray-600">
                    Size: 1.5 lbs | Chocolate
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="font-bold">₹4999</div>
                    <div className="flex items-center border rounded-md">
                      <button className="px-3 py-1 hover:bg-gray-100">-</button>
                      <span className="px-3 py-1 border-x">1</span>
                      <button className="px-3 py-1 hover:bg-gray-100">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex border-b pb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden mr-3 flex-shrink-0">
                  <img
                    src="/creatine.jpg"
                    className="w-full h-full object-cover"
                    alt="Creatine"
                  ></img>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Power Creatine</h3>
                  <p className="text-sm text-gray-600">
                    Size: 300g | Unflavored
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="font-bold">₹1299</div>
                    <div className="flex items-center border rounded-md">
                      <button className="px-3 py-1 hover:bg-gray-100">-</button>
                      <span className="px-3 py-1 border-x">2</span>
                      <button className="px-3 py-1 hover:bg-gray-100">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t p-4 bg-gray-50">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal (3 items)</span>
                  <span>₹7597</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹7597</span>
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    Inclusive of all taxes
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <button
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-md transition-colors"
                  onClick={() => setShowCart(false)}
                >
                  Checkout
                </button>
              </Link>

              <Link href="/cart">
                <button
                  className="w-full mt-2 border border-blue-800 text-blue-800 py-2 rounded-md hover:bg-blue-50 transition-colors"
                  onClick={() => setShowCart(false)}
                >
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
