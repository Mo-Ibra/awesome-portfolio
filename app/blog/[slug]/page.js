"use client";

import Navbar from "@/components/Navbar";

import ToggleThemeButton from "@/components/ToggleThemeButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SectionHeader from "@/components/SectionHeader";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

import DOMPurify from "dompurify";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/vs2015.css';
import ArticleStats from "@/components/ArticleStats";
import Comments from "@/components/Comments";
import LoadingSpinner from "@/components/LoadingSpinner";

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('css', css);
hljs.registerLanguage('typescript', typescript);

const SingleArticlePage = () => {
  const { slug } = useParams();

  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sanitizedContent, setSanitizedContent] = useState("");

  // Fetch Article
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
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchArticle();
    }
  }, [slug]);

  // Fetch Comment
  useEffect(() => {
    if (article.id) {
      const fetchComments = async () => {
        try {

          const response = await fetch(`https://dev.to/api/comments?a_id=${article.id}`);

          const data = await response.json();
          setComments(data);
          console.log(data);

        } catch (err) {
          console.log(err);
        }
      }
      fetchComments();
    };
  }, [article.id]);


  useEffect(() => {
    if (!loading) {
      // Sanitize the article body before setting it to the state
      const sanitizedHTML = DOMPurify.sanitize(article.body_html);
      setSanitizedContent(sanitizedHTML);

      // Wait for next tick to ensure DOM is updated
      setTimeout(() => {
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightElement(block);
        });
      }, 0);
    }
  }, [article.body_html, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <Navbar className="top-2" />
      <section className="py-40 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto container px-6 lg:px-20">
          <SectionHeader title={article.title} desc="" />

          <div className="flex items-center mb-6 text-sm text-gray-600 dark:text-gray-400">
            <span>By {article.user.name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(article.published_at).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{article.reading_time_minutes} min read</span>
          </div>

          <div className="py-10 prose-container">
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

            {/* Comments */}
            { comments && comments.length > 0 && <Comments comments={comments} /> }

          </div>
        </div>
      </section>

      <ArticleStats
        reactions={article.public_reactions_count}
        comments={article.comments_count}
      />

      <ToggleThemeButton />
      <ScrollToTopButton />
    </div>
  );
};

export default SingleArticlePage;
