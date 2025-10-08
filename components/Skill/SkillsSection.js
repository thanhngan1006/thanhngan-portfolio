// /components/SkillsSection.jsx

import React from "react";
import SkillCard from "./SkillCard"; // Import SkillCard
import { FaCode } from "react-icons/fa"; // Icon cho tiêu đề

const SKILLS_LIST = [
  "React.js",
  "Typescript",
  "Dart",
  "Tailwind CSS",
  "Node.js",
];

const SkillsSection = () => {
  // Màu Cyan là màu nhấn chủ đạo
  const ACCENT_COLOR_CLASS = "text-cyan-600 dark:text-cyan-400";
  const TEXT_COLOR_CLASS = "text-black dark:text-white";

  return (
    <section className="mt-20 laptop:mt-40 p-2 laptop:p-0">
      {/* Bố cục tiêu đề - Lấy cảm hứng từ mẫu UI */}
      <div className="flex flex-col items-center justify-center mb-16">
        {/* Icon lớn và nổi bật */}
        <FaCode className={`w-16 h-16 mb-4 ${ACCENT_COLOR_CLASS}`} />

        <h1 className={`text-4xl font-extrabold mb-2 ${TEXT_COLOR_CLASS}`}>
          Core Skills
        </h1>

        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg text-center">
          I am striving to never stop learning and improving. These are the
          tools I use to build modern, scalable applications.
        </p>
      </div>

      {/* 🌟 Hiển thị các Skill Cards 🌟 */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-5xl mx-auto">
        {SKILLS_LIST.map((skill, index) => (
          <SkillCard key={index} skillName={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
