"use client";

import SectionHeader from "@/components/SectionHeader";
import ArticleCard from "@/components/ArticleCard";
import { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=moibra"
        );

        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="py-40 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-20">
          <SectionHeader
            title="Articles"
            desc="Here are some of the articles I've written."
          />
          <p className="mt-12 text-center text-gray-600 dark:text-gray-400">
            Loading articles...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-40 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-20">
          <SectionHeader
            title="Articles"
            desc="Here are some of the articles I've written."
          />
          <p className="mt-12 text-center text-red-600 dark:text-red-400">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-40 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionHeader
          title="Articles"
          desc="Here are some of the articles I've written."
        />

        <div className="mt-12 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.social_image}
                reactions={article.positive_reactions_count}
                comments={article.comments_count}
                readTime={article.reading_time_minutes}
                publishedDate={article.readable_publish_date}
                slug={article.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
