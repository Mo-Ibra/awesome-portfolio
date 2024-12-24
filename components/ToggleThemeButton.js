"use client";
import React from "react";

import { useTheme } from "@/context/ThemeContext";

const ToggleThemeButton = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-yellow-400"
        >
          <path d="M12 2a1 1 0 01.993.883L13 3v2a1 1 0 01-1.993.117L11 5V3a1 1 0 011-1zm5.657 3.757a1 1 0 011.414 0l1.415 1.415a1 1 0 01-1.415 1.414l-1.414-1.415a1 1 0 010-1.414zm4.243 6.243a1 1 0 01.117 1.993L22 14h-2a1 1 0 01-.117-1.993L20 12h2zm-4.243 6.243a1 1 0 01.117 1.993l-1.414-.001-1.414-1.415a1 1 0 011.414-1.414zm-9.9.001a1 1 0 01.993-.117L10 18v2a1 1 0 01-1.993.117L8 20v-2a1 1 0 01.243-.757zM4.93 17.657a1 1 0 01.117 1.993L4 19.657l-1.414-1.415a1 1 0 011.414-1.414zm1.415-11.313a1 1 0 01.993.117L8 7l1.415-1.414a1 1 0 01-1.414-1.414L4.93 4.243zM12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-800"
        >
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16z" />
        </svg>
      )}
    </button>
  );
};

export default ToggleThemeButton;