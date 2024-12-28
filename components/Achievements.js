import SectionHeader from '@/components/SectionHeader';

const Achievements = () => {
  return (
    <section className="py-40 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        
        <SectionHeader title="Achievements" desc="Here are some of my achievements." />

        <div className="mt-12 grid gap-10 lg:gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {/* Achievement 1 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              15+ Projects Delivered
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Successfully developed and deployed various web applications and
              tools across multiple industries.
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Published 20+ Articles
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Shared knowledge on programming, web development, and best
              practices through technical blogs and tutorials.
            </p>
          </div>

          {/* Achievement 3 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              2 Years of Experience
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Gained expertise in full-stack development, working with modern
              frameworks like React and Node.js.
            </p>
          </div>

          {/* Achievement 4 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              500+ Hours of Teaching
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Created in-depth programming tutorials, helping students and
              developers enhance their skills.
            </p>
          </div>

          {/* Achievement 5 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Featured in Top Platforms
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Recognized on platforms like Dev.to and GitHub for valuable
              contributions to the developer community.
            </p>
          </div>

          {/* Achievement 6 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Community Contributions
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Actively participated in open-source projects and contributed to
              developer meetups and events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;