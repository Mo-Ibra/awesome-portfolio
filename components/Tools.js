"use client";

import SectionHeader from "./SectionHeader";
import ToolsCard from "@/components/ToolsCard";
import tools from '@/constants/tools';

const Tools = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionHeader
          title="Tools I Use"
          desc="These are some of the technologies I work with to create amazing experiences."
        />

        {/* Tools Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          { tools.map((tool) => (
            <ToolsCard
              key={tool.id}
              imageUrl={tool.imageUrl}
              name={tool.name}
              desc={tool.desc}
            />
          )) }

        </div>
      </div>
    </section>
  );
};

export default Tools;
