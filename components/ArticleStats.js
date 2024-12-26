"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ArticleStats = ({ reactions, comments }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 3, type: "spring" }}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-6 z-50"
    >
      <div className="flex items-center space-x-6 bg-white dark:bg-gray-800 px-6 py-3 rounded shadow-lg">
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-red-500">❤️</span>
          <span className="font-medium">{reactions}</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>💬</span>
          <span className="font-medium">{comments}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleStats;
