"use client";

import { useState } from "react";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";

import ContactIcon from '@/components/ContactIcon';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    const response = await fetch(process.env.NEXT_PUBLIC_GETFORM_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok === true) {
      setName("");
      setEmail("");
      setMessage("");
      window.open("https://getform.io/thank-you", "_blank")

      toast.success("Message sent successfully!", { position: "bottom-right" });
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-200">
              Contact Me
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 w-3/4">
              Feel free to reach out to me via the form or connect with me on my
              social profiles, We can discuss about anything you want. And I&apos;m
              open to work as freelancer as well.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex space-x-6">
              <ContactIcon icon={<FaGithub className="w-6 h-6" />} link={"https://github.com/Mo-Ibra"} ariaLabel="Visit my GitHub profile" />
              <ContactIcon icon={<FaLinkedin className="w-6 h-6" />} link={"https://www.linkedin.com/in/mohamed-ibrahim-30x/"} ariaLabel="Visit my LinkedIn profile" />
              <ContactIcon icon={<FaTwitter className="w-6 h-6" />} link={"https://x.com/MoIbrraa"} ariaLabel="Visit my Twitter profile" />
              <ContactIcon icon={<FaDev className="w-6 h-6" />} link={"https://dev.to/moibra"} ariaLabel="Visit my Dev.to profile" />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form
            onSubmit={formSubmit}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 space-y-6"
          >
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
                  value={name}
                  className="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  className="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                className="mt-1 block w-full px-4 py-2 text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Hidden Input */}
            <input type="hidden" name="_gotcha" className="hidden" />

            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
