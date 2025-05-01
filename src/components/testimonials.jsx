"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Professional Bodybuilder",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote:
        "I've tried dozens of supplements over my 10-year career, but Power Supplements stands head and shoulders above the rest. The quality and results are unmatched.",
      rating: 5,
      before:
        "https://images.unsplash.com/photo-1534368786749-b63e05c90863?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      after:
        "https://images.unsplash.com/photo-1534368786749-b63e05c90863?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Fitness Coach",
      image:
        "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote:
        "I recommend Power Supplements to all my clients. The results speak for themselves, and the clean ingredients make me confident in what I'm putting in my body.",
      rating: 5,
      before:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      after:
        "https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Competitive Athlete",
      image:
        "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote:
        "The pre-workout formula has been a game-changer for my training. I've seen significant improvements in my strength and endurance since making the switch.",
      rating: 4.5,
      before:
        "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      after:
        "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial, autoplay]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Pause autoplay when user interacts
  const handleManualNavigation = (callback) => {
    setAutoplay(false);
    callback();
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6  text-black">
            Success Stories
          </h2>
          <p className="text-gray-700 text-lg">
            See the real results from real people who have transformed their
            bodies and performance with our premium supplements.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Testimonial Card */}
            <motion.div
              key={testimonials[currentTestimonial].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
                {/* Before/After Images */}
                <div className="relative md:col-span-1 h-80 md:h-full">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="relative h-1/2 w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                      <Image
                        src={testimonials[currentTestimonial].before}
                        alt="Before transformation"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 text-xs font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative h-1/2 w-full bg-gray-100 overflow-hidden">
                      <Image
                        src={testimonials[currentTestimonial].after}
                        alt="After transformation"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 text-xs font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i <
                              Math.floor(
                                testimonials[currentTestimonial].rating
                              )
                                ? "text-amber-400"
                                : i < testimonials[currentTestimonial].rating
                                ? "text-amber-400 opacity-50"
                                : "text-gray-300"
                            }
                            size={20}
                          />
                        ))}
                        <span className="ml-2 text-gray-500 text-sm">
                          {testimonials[currentTestimonial].rating.toFixed(1)}
                        </span>
                      </div>
                      <FaQuoteLeft className="text-blue-400 text-4xl opacity-20" />
                    </div>

                    <motion.blockquote
                      key={`quote-${testimonials[currentTestimonial].id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl font-medium italic mb-8 text-gray-800 leading-relaxed"
                    >
                      &quot;{testimonials[currentTestimonial].quote}&quot;
                    </motion.blockquote>
                  </div>

                  <div className="flex items-center border-t border-gray-100 pt-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100 mr-4 shadow-md">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleManualNavigation(prevTestimonial)}
              className="bg-black hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </motion.button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentTestimonial(index);
                    setTimeout(() => setAutoplay(true), 10000);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-black w-10"
                      : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleManualNavigation(nextTestimonial)}
              className="bg-black hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
