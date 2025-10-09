import SkillCard from "./SkillCard";
import { FaCode } from "react-icons/fa";

const SKILLS_LIST = [
  "Reactjs",
  "Typescript",
  "Dart",
  "Tailwind CSS",
  "Node.js",
];

const SkillsSection = () => {
  const ACCENT_COLOR_CLASS = "text-cyan-600 dark:text-cyan-400";
  const TEXT_COLOR_CLASS = "text-black dark:text-white";

  return (
    <section className="mt-20 laptop:mt-40 p-2 laptop:p-0">
      <div className="flex flex-col items-center justify-center mb-16">
        <FaCode className={`w-16 h-16 mb-4 ${ACCENT_COLOR_CLASS}`} />

        <h1 className="text-4xl font-extrabold mb-10 text-bold">
          Core Skills.
        </h1>

        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg text-center">
          I am striving to never stop learning and improving. These are the
          tools I use to build modern, scalable webs or applications.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-5xl mx-auto">
        {SKILLS_LIST.map((skill, index) => (
          <SkillCard key={index} skillName={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
