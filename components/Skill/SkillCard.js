// /components/SkillCard.jsx

import React from "react";
// Import các icons cần thiết
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDart } from "react-icons/si";

// Hàm cấu hình màu sắc và icon cho từng kỹ năng
const getSkillConfig = (skill) => {
  const lowerSkill = skill.toLowerCase().replace(".", "");

  switch (lowerSkill) {
    case "reactjs":
    case "react":
      return { icon: FaReact, color: "text-blue-400", bg: "bg-blue-900/30" };
    case "typescript":
      return {
        icon: SiTypescript,
        color: "text-blue-600",
        bg: "bg-blue-900/30",
      };
    case "dart":
      return { icon: SiDart, color: "text-cyan-500", bg: "bg-cyan-900/30" };
    case "tailwindcss":
      return {
        icon: SiTailwindcss,
        color: "text-cyan-400",
        bg: "bg-cyan-900/30",
      };
    case "nodejs":
      return { icon: FaNodeJs, color: "text-green-500", bg: "bg-green-900/30" };
    default:
      return { icon: FaReact, color: "text-gray-400", bg: "bg-gray-800/30" };
  }
};

const SkillCard = ({ skillName }) => {
  const config = getSkillConfig(skillName);
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Circle Icon - Phần trung tâm */}
      <div
        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center 
                    border-4 ${config.color} ${config.bg} shadow-lg 
                    transition-transform duration-300 hover:scale-110 cursor-pointer 
                    hover:shadow-xl ${config.color.replace(
                      "text",
                      "shadow"
                    )}/50`}
      >
        <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${config.color}`} />
      </div>

      {/* Tên kỹ năng */}
      <p className="mt-3 text-base font-semibold text-gray-700 dark:text-gray-300">
        {skillName}
      </p>
    </div>
  );
};

export default SkillCard;
