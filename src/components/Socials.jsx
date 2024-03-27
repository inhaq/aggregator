import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="items-center justify-around hidden w-32 mr-2 space-y-4 sm:flex ">
      <a
        href="https://twitter.com/inhaq_"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 hover:text-blue-500"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://github.com/inhaq"
        target="_blank"
        rel="noopener noreferrer"
        className="m-0 hover:text-gray-600"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/inhaq"
        target="_blank"
        rel="noopener noreferrer"
        className="m-0 hover:text-blue-800"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default Socials;
