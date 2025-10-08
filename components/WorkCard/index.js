import React from "react";
import Image from "next/image";
import TechTag from "../TechTag/TechTag";

const WorkCard = ({ img, name, description, onClick }) => {
  const ACCENT_COLOR = "text-cyan-600 dark:text-cyan-400";
  const HOVER_EFFECT =
    "hover:shadow-2xl hover:shadow-gray-300/60 dark:hover:shadow-cyan-500/40";

  const tags = description
    ? description.split(",").map((tag) => tag.trim())
    : [];

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 
                  border border-gray-200 dark:border-gray-800
                  transform transition-all duration-500 cursor-pointer 
                  group
                  ${HOVER_EFFECT}`}
      onClick={onClick}
    >
      <div
        className={`absolute inset-0 rounded-xl pointer-events-none 
                    border-2 border-transparent transition-all duration-500 z-10
                    group-hover:opacity-100 dark:group-hover:border-cyan-400/50
                    dark:group-hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.4)]`}
      ></div>

      <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      </div>

      <div className="p-5 tablet:p-6">
        <h2 className="text-2xl font-bold mb-3 text-black dark:text-white transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
          {name ? name : "Project Name"}
        </h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <TechTag key={index} techName={tag} />
          ))}
        </div>

        <div
          className={`flex items-center ${ACCENT_COLOR} font-semibold text-base pt-2 border-t border-gray-100 dark:border-gray-700 mt-2`}
        >
          View Project
          <svg
            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
