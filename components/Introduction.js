const Introduction = () => {
  return (
    <section className="pt-60 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20 items-center gap-12">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
            Hi, I’m Mohamed Ibrahim!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            I’m a passionate Full Stack Developer with a knack for crafting
            user-friendly websites and applications. With a deep love for coding
            and problem-solving, I’ve spent the last{" "}
            <span className="text-blue-600 dark:text-blue-400">2 years</span>{" "}
            transforming ideas into functional, beautiful digital solutions.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            When I’m not coding, you’ll find me exploring the latest in tech,
            watching movies, or sharing my knowledge through blog posts and
            tutorials.
          </p>
          <div className="py-6">
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Let’s Work Together!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;