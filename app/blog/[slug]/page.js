"use client";

import Navbar from "@/components/Navbar";

import ToggleThemeButton from "@/components/ToggleThemeButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SectionHeader from "@/components/SectionHeader";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const Page = () => {
  const { slug } = useParams();

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sanitizedContent, setSanitizedContent] = useState("");

  useEffect(() => {
    if (slug) {
      const fetchArticle = async () => {
        try {
          const response = await fetch(
            `https://dev.to/api/articles/moibra/${slug}`
          );
          const data = await response.json();
          setArticle(data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      fetchArticle();
    }
  }, [slug]);

  useEffect(() => {
    if (!loading) {
      // Sanitize the article body before setting it to the state
      const sanitizedHTML = DOMPurify.sanitize(article.body_html);
      setSanitizedContent(sanitizedHTML);

      // Highlight all code blocks after the content has been sanitized and injected
      const blocks = document.querySelectorAll("pre code");
      blocks.forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }, [article.body_html]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading article...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar className="top-2" />
      <section className="py-40 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-20">
          <SectionHeader title={article.title} desc="" />

          <div className="flex items-center mb-6 text-sm text-gray-600 dark:text-gray-400">
            <span>By {article.user.name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(article.published_at).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{article.reading_time_minutes} min read</span>
          </div>

          <div className="py-10">
            <div
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />

            <div className="mt-10 flex items-center space-x-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <span className="mr-2">❤️</span>
                <span>{article.public_reactions_count} reactions</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💬</span>
                <span>{article.comments_count} comments</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
