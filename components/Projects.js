"use client";

import React from "react";
import { ProjectAnimationCard } from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section className="py-40 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-200">
          Projects I Did
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Here are some of the projects I've worked on.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Project Box */}
          <ProjectAnimationCard
            title="Full Stack Crud Application"
            desc="This is a full stack web application for create, edit, delete, update approach .. I Hope You enjoy it"
            imageSrc="/images/projects/project-1.jpg"
            demoUrl="https://github.com"
            gitUrl="https://github.com"
          />
          <ProjectAnimationCard
            title="Full Stack Crud Application"
            desc="This is a full stack web application for create, edit, delete, update approach .. I Hope You enjoy it"
            imageSrc="/images/projects/project-2.jpg"
            gitUrl="https://github.com"
          />
          <ProjectAnimationCard
            title="Full Stack Crud Application"
            desc="This is a full stack web application for create, edit, delete, update approach .. I Hope You enjoy it"
            imageSrc="/images/projects/project-3.jpg"
            demoUrl="https://github.com"
            gitUrl="https://github.com"
          />
          <ProjectAnimationCard
            title="Full Stack Crud Application"
            desc="This is a full stack web application for create, edit, delete, update approach .. I Hope You enjoy it"
            imageSrc="/images/projects/project-3.jpg"
            gitUrl="https://github.com"
          />
          <ProjectAnimationCard
            title="Full Stack Crud Application"
            desc="This is a full stack web application for create, edit, delete, update approach .. I Hope You enjoy it"
            imageSrc="/images/projects/project-5.jpg"
            demoUrl="https://github.com"
            gitUrl="https://github.com"
          />
          <ProjectAnimationCard
            title="Full Stack Crud Application"
            desc="This is a full stack web application for create, edit, delete, update approach .. I Hope You enjoy it"
            imageSrc="/images/projects/project-6.jpg"
            demoUrl="https://github.com"
            gitUrl="https://github.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;