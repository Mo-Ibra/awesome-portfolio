"use client";

import React from "react";
import { ProjectAnimationCard } from "@/components/ProjectCard";

import myProjects from '@/constants/projects';
import SectionHeader from '@/components/SectionHeader';

const Projects = () => {
  return (
    <section className="py-40 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-6 lg:px-20">

        <SectionHeader title="Projects I Did" desc="Here are some of the projects I've worked on." />

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          { myProjects.map((project) => (
            <ProjectAnimationCard
              key={project.id}
              title={project.title}
              desc={project.desc}
              imageSrc={project.imageSrc}
              demoUrl={project.demoUrl}
              gitUrl={project.gitUrl}
            />
          )) }
        </div>
      </div>
    </section>
  );
};

export default Projects;