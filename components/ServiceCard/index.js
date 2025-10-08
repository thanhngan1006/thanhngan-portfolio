import {
  FaLaptopCode,
  FaMobileAlt,
  FaCodeBranch,
  FaPalette,
} from "react-icons/fa";

const getServiceConfig = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("frontend")) {
    return {
      icon: FaLaptopCode,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-700/50",
    };
  }
  if (lowerTitle.includes("mobile")) {
    return {
      icon: FaMobileAlt,
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-100 dark:bg-orange-700/50",
    };
  }
  if (lowerTitle.includes("ux") || lowerTitle.includes("design")) {
    return {
      icon: FaPalette,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-700/50",
    };
  }
  return {
    icon: FaCodeBranch,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-700/50",
  };
};

const ServiceCard = ({ name, description }) => {
  const config = getServiceConfig(name);
  const Icon = config.icon;

  return (
    <div
      className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20"
    >
      <div className="flex items-center mb-4">
        <div
          className={`p-3 rounded-full ${config.bg} ${config.color} mr-4 shadow-md`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <h2 className="text-xl font-bold text-black dark:text-white">{name}</h2>
      </div>

      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
