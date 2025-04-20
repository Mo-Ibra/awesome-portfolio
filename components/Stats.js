"use client";

import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

const Stats = () => {

  const [stats, setStats] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchStats = async () => {
      try {

        setLoading(true);

        const response = await fetch("/api/stats");

        if (!response.ok) {
          throw new Error("Failed to fetch Dev.to stats");
        }

        const data = await response.json();
        setStats(data);

        console.log(data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.error("Error fetching Dev.to stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-20">
          <SectionHeader title="DEV.to Stats" desc="Here are some of my stats." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <h2 className="text-2xl font-bold mb-4">My Dev.to Stats</h2>
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionHeader title="DEV.to Stats" desc="Here are some of my stats." />

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <h2 className="text-2xl font-bold mb-4">My Dev.to Stats</h2>
          <ul className="list-disc pl-5">
            <li>Followers: {stats.followers_count}</li>
            <li>Posts: {stats.posts_count}</li>
            <li>Reactions: {stats.reactions_count}</li>
            <li>Articles Published: {stats.articles_count}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;