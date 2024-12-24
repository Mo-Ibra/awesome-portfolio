"use client";

import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-40 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-200">
              Contact Me
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 w-3/4">
              Feel free to reach out to me via the form or connect with me on my
              social profiles, We can discuss about anything you want. And I'm
              open to work as freelancer as well.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex space-x-6">
              <a
                href="https://github.com/Mo-Ibra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-ibrahim-30x/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/MoIbrraa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaTwitter className="w-6 h-6" />
              </a>

              <a
                href="https://dev.to/moibra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaDev className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="8"
                className="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
