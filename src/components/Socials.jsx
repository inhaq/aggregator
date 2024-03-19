import React from "react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex items-center space-x-6 mr-2">
      <a
        href="https://twitter.com/inhaq_"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://github.com/inhaq"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-600"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/inhaq"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-800"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default Socials;
