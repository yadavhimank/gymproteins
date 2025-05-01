"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook } from "lucide-react";

// Animated section component that triggers on scroll
function AnimatedSection({ children, direction = "right" }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
          y: direction === "up" ? 50 : 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="mb-10 w-full">
        <div className="w-full overflow-hidden rounded-lg relative">
          <img
            src="/about0.webp"
            alt="Product Banner"
            className="w-full object-cover h-[200px] sm:h-[300px] md:h-[500px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3">
              <span className="">About Us</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedSection direction="right">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  At PureProtein, we&apos;re dedicated to empowering your
                  fitness journey through premium quality supplements that
                  deliver real results. We believe that everyone deserves access
                  to clean, effective nutrition that supports their health and
                  wellness goals.
                </p>
                <p className="text-lg text-gray-600">
                  Our mission is simple: create the purest, most effective
                  protein supplements on the market while maintaining
                  transparency about our ingredients and manufacturing
                  processes. We&apos;re not just selling supplements &apos;
                  we&apos;re promoting a lifestyle of health, strength, and
                  personal achievement.
                </p>
              </AnimatedSection>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection direction="left">
                  <img
                    src="/about1.jpg"
                    alt="Team discussing product formulation"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </AnimatedSection>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection direction="right">
                  <img
                    src="/about2.jpg"
                    alt="Founders in the gym"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </AnimatedSection>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <AnimatedSection direction="left">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  PureProtein began in 2018 when two fitness enthusiasts, Mike
                  and Sarah, became frustrated with the lack of transparency in
                  the supplement industry. After years of struggling to find
                  products without fillers and artificial ingredients, they
                  decided to create their own.
                </p>
                <p className="text-lg text-gray-600">
                  Starting in a small kitchen with a passion for nutrition
                  science, they developed formulas that prioritized purity and
                  effectiveness. What began as a small operation serving local
                  fitness communities has grown into a global brand trusted by
                  athletes and fitness enthusiasts worldwide, but our core
                  values remain unchanged.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedSection direction="right">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Quality Commitment
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that what goes into your body matters. That&apos;s
                  why every ingredient in our products is carefully selected,
                  third-party tested, and fully disclosed on our labels. No
                  proprietary blends, no hidden fillers—just pure nutrition
                  designed to help you reach your goals.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-semibold">Lab Tested</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-semibold">100% Natural</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-8 h-8 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-semibold">Science-Backed</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection direction="left">
                  <img
                    src="/about3.jpg"
                    alt="Laboratory testing"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </AnimatedSection>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="py-16 md:py-24 bg-gray-100 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection direction="right">
                  <img
                    src="/about4.jpg"
                    alt="Fitness community"
                    className="rounded-lg shadow-lg w-full h-auto"
                  ></img>
                </AnimatedSection>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <AnimatedSection direction="left">
                <h2 className="text-3xl font-bold mb-6 text-black">
                  Join Our Community
                </h2>
                <p className="text-lg mb-8 text-black">
                  Be part of a community that&apos;s passionate about health,
                  fitness, and personal growth. Connect with like-minded
                  individuals, access exclusive content, and stay up to date on
                  our latest products and promotions.
                </p>
                <div className="mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-black/80"
                    >
                      Join Our Newsletter
                    </Button>
                  </motion.div>
                </div>
                <div className="flex space-x-4">
                  <motion.div whileHover={{ y: -3 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white text-black hover:bg-white hover:text-blue-600"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white text-black hover:bg-white hover:text-blue-600"
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white text-black hover:bg-white hover:text-blue-600"
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
