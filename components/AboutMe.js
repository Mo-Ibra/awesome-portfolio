"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const AboutMe = () => {
  return (
    <section className="pt-40 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20 shadow-lg p-8 rounded-lg">
        <HeroHighlight>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl lg:text-5xl font-extrabold text-center text-blue-600 dark:text-blue-400"
          >
            <Highlight className="text-black dark:text-white">
              About Me
            </Highlight>
          </motion.h2>
        </HeroHighlight>
        <p className="mt-6 text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Hello! I&apos;m Mohamed Ibrahim, a passionate Full Stack Developer
          dedicated to crafting efficient and user-friendly web applications.
          With over{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            3 years of experience
          </span>
          , I&apos;ve completed{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            15+ successful projects
          </span>{" "}
          and published{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            20+ articles
          </span>{" "}
          to help others in the tech community. I aim to create meaningful
          digital experiences and share my knowledge with aspiring developers.
        </p>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              3+
            </h3>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Years of Experience
            </p>
          </div>
          {/* Stat 2 */}
          <div>
            <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              15+
            </h3>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Projects Completed
            </p>
          </div>
          {/* Stat 3 */}
          <div>
            <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
              20+
            </h3>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Articles Published
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
