"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const categories = [
    "Proteins",
    "Pre Workouts",
    "Creatine",
    "Mass Gainers",
    "BCAAs",
    "Fat Burners",
    "Post Workout",
    "Vitamins",
    "Minerals",
    "Amino Acids",
    "Protein Bars",
    "Wellness",
  ];

  const quickLinks = [
    { name: "All Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10 ">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <div className="relative h-12 w-32">
                <Image
                  src="/logo.jpg"
                  alt="FitSupps Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, 128px"
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm pt-3">
              Premium supplements for fitness enthusiasts. Scientifically
              formulated for optimal results, quality, and performance.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaFacebookF size={16} />,
                  label: "Facebook",
                  href: "#",
                },
                { icon: <FaTwitter size={16} />, label: "Twitter", href: "#" },
                {
                  icon: <FaInstagram size={16} />,
                  label: "Instagram",
                  href: "#",
                },
                { icon: <FaYoutube size={16} />, label: "YouTube", href: "#" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-10 after:bg-black after:rounded pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 pt-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-900 transition-colors flex items-center gap-2"
                  >
                    <FaChevronRight size={10} />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-10 after:bg-black after:rounded pb-2">
              Contact Us
            </h3>
            <div className="space-y-3 pt-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  123 Fitness Avenue, Dwarka, New Delhi, 110001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 text-black flex-shrink-0" />
                <span className="text-gray-600 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-4 w-4 text-black flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  support@beinggeniune.com
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-10 after:bg-black after:rounded pb-2">
              Newsletter
            </h3>
            <p className="text-gray-600 text-sm pt-3">
              Subscribe to get updates on new products, exclusive offers, and
              fitness tips.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section - Categories */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-sm text-gray-600 hover:text-blue-900 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {year} FitSupps. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Shipping Policy", href: "/shipping-policy" },
                { name: "Refund Policy", href: "/refund-policy" },
              ].map((policy) => (
                <Link
                  key={policy.name}
                  href={policy.href}
                  className="text-sm text-gray-500 hover:text-blue-900 transition-colors"
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
