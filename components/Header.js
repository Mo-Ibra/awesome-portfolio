"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function Header() {
  return (
    <header className="h-screen relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

      <div className="container mx-auto px-6 lg:px-20 py-20 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 h-full">

        <div className="space-y-6 text-center md:text-left flex-1 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Mohamed Ibrahim
            </span>
          </h1>
          <p className="text-lg lg:text-2xl text-gray-600 dark:text-gray-400">
            Full Stack Developer • Creating delightful user experiences
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <a
              href="#portfolio"
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block flex-1">
          <Image
            src="/images/hero-banner.png"
            width={656}
            height={800}
            alt="Hero Image"
          />
        </div>
      </div>

      {/* Decorative Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl -top-10 -left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-purple-400 opacity-20 rounded-full blur-3xl -bottom-10 -right-10 animate-pulse"></div>
      </div>
    </header>
  );
}

export default Header;
