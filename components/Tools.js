"use client";

const Tools = () => {
  return (
    <section className="py-40 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-200">
          Tools I Use
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          These are some of the technologies I work with to create amazing
          experiences.
        </p>

        {/* Tools Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
            <img
              src="/images/tools/react.svg"
              alt="React"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                React
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                UI Library
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
            <img
              src="/images/tools/nodejs.svg"
              alt="Node.js"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Node.js
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Backend Tool
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
            <img
              src="/images/tools/tailwindcss.svg"
              alt="Tailwind CSS"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Tailwind CSS
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                CSS Framework
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
            <img
              src="/images/tools/javascript.svg"
              alt="Figma"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                JavaScript
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Programming Language
              </p>
            </div>
          </div>
          
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
            <img
              src="/images/tools/expressjs.svg"
              alt="React"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Express JS
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Node JS Framework
              </p>
            </div>
          </div>
          
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
            <img
              src="/images/tools/css3.svg"
              alt="Node.js"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                CSS
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Styling Language
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
            <img
              src="/images/tools/mongodb.svg"
              alt="Tailwind CSS"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                MongoDB
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                NoSQL Database
              </p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg justify-center sm:justify-normal">
            <img
              src="/images/tools/figma.svg"
              alt="Figma"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Figma
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Design Tool
              </p>
            </div>
          </div>

          {/* Add more tools here */}
        </div>
      </div>
    </section>
  );
};

export default Tools;