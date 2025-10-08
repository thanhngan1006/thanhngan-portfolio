import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaMobileAlt,
  FaFire,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiFlutter,
  SiMongodb,
} from "react-icons/si";

const getTechConfig = (tech) => {
  const lowerTech = tech.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (lowerTech) {
    case "reactjs":
    case "react":
      return {
        icon: FaReact,
        color: "bg-blue-300 dark:bg-blue-600",
        text: "text-black dark:text-white",
      };
    case "tailwindcss":
      return {
        icon: SiTailwindcss,
        color: "bg-cyan-300 dark:bg-cyan-700",
        text: "text-black dark:text-white",
      };
    case "javascript":
      return {
        icon: FaJsSquare,
        color: "bg-yellow-400 dark:bg-yellow-600",
        text: "text-black dark:text-black",
      };
    case "typescript":
      return {
        icon: SiTypescript,
        color: "bg-blue-500 dark:bg-blue-800",
        text: "text-white",
      };
    case "nodejs":
      return {
        icon: FaNodeJs,
        color: "bg-green-600 dark:bg-green-700",
        text: "text-white",
      };
    case "flutter":
      return {
        icon: SiFlutter,
        color: "bg-blue-400 dark:bg-blue-700",
        text: "text-white",
      };
    case "mongodb":
      return {
        icon: SiMongodb,
        color: "bg-green-500 dark:bg-green-800",
        text: "text-white",
      };
    case "firebase":
      return {
        icon: FaFire,
        color: "bg-red-500 dark:bg-green-800",
        text: "text-white",
      };

    case "vite":
      return {
        icon: SiVite,
        color: "bg-yellow-200 dark:bg-yellow-500",
        text: "text-black",
      };
    // Mặc định
    default:
      return {
        icon: FaMobileAlt,
        color: "bg-gray-200 dark:bg-gray-600",
        text: "text-black dark:text-white",
      };
  }
};

const TechTag = ({ techName }) => {
  const config = getTechConfig(techName);
  const Icon = config.icon;

  return (
    <div
      className={`flex items-center space-x-1 px-3 py-1 rounded-md text-xs font-semibold shadow-md 
                  transition-colors duration-300 ${config.color} ${config.text} whitespace-nowrap`}
    >
      <Icon className="w-3 h-3" />
      <span>{techName}</span>
    </div>
  );
};

export default TechTag;
