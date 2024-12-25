import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ title, imageSrc, URL }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Project Image */}
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
        width={560}
        height={560}
      />

      {/* Project Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>

        {/* Project Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="px-4 py-2 dark:bg-gray-900 cursor-pointer text-sm font-medium shadow-lg border border-slate-200 dark:border-slate-700 rounded-full">
            JavaScript
          </span>
          <span className="px-4 py-2 dark:bg-gray-900 cursor-pointer text-sm font-medium shadow-lg border border-slate-200 dark:border-slate-700 rounded-full">
            Tailwind
          </span>
          <span className="px-4 py-2 dark:bg-gray-900 cursor-pointer text-sm font-medium shadow-lg border border-slate-200 dark:border-slate-700 rounded-full">
            React
          </span>
        </div>

        {/* Button */}
        <div className="mt-4 flex justify-end">
          <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectAnimationCard = ({
  title,
  desc,
  imageSrc,
  demoUrl,
  gitUrl,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc}
            width={560}
            height={560}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </CardItem>
        <div className="my-4">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {desc}
          </CardItem>
        </div>

        {demoUrl ? (
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href={gitUrl}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <Button>GitHub Repo</Button>
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href={demoUrl}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              View Project →
            </CardItem>
          </div>
        ) : (
          <div className="flex justify-start items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href={gitUrl}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <Button>GitHub Repo</Button>
            </CardItem>
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
