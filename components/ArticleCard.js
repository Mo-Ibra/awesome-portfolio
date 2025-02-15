import { FaClock, FaComment, FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({
  title,
  description,
  imageUrl,
  authorName = "Mohamed Ibrahim",
  publishedDate,
  reactions,
  comments,
  readTime,
  slug
}) => {
  return (
    <div className="items-center lg:items-start bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition hover:shadow-lg gap-4">
      {/* Left - Image */}
      <div className="w-full">
        <Link href={`/blog/${slug}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={1000}
            height={500}
            className="w-full h-auto rounded-lg object-cover"
          />
        </Link>
      </div>

      {/* Author and Date */}
      <div className="text-sm text-gray-600 dark:text-gray-400 my-3 mt-4">
        <span className="font-medium text-gray-800 dark:text-gray-200">
          {authorName}
        </span>{" "}
        <span>• {publishedDate}</span>
      </div>

      {/* Title and Description */}
      <div className="my-3">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>
      </div>

      {/* Reactions and Comments */}
      <div className="my-3 flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-4">
        <div className="flex items-center text-xs">
          <FaHeart className="mr-2 text-red-500" />
          <span>{reactions} reactions</span>
        </div>

        <div className="flex items-center text-xs">
          <FaComment className="mr-2 text-blue-500" />
          <span>{comments} comments</span>
        </div>

        <div className="flex items-center text-xs">
          <FaClock className="mr-2 text-blue-500" />
          <span>{readTime} min read</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
