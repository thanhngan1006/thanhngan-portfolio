import {
  FaHeart,
  FaLightbulb,
  FaLaptopCode,
  FaHandsHelping,
  FaRocket,
} from "react-icons/fa";

const CORE_VALUES = [
  {
    title: "User-Centric Design",
    description: "Focusing on intuitive UI/UX for exceptional user experience.",
    icon: FaHeart,
  },
  {
    title: "Code Integrity",
    description: "Writing clean, scalable, and maintainable code.",
    icon: FaLaptopCode,
  },
  {
    title: "Collaborative Growth",
    description:
      "Seeking team environments to share knowledge and build together.",
    icon: FaHandsHelping,
  },
  {
    title: "Eagerness to Explore",
    description: "Always welcoming new technologies and innovative solutions.",
    icon: FaRocket,
  },
];

const CoreValuesCard = () => {
  const ACCENT_COLOR = "text-cyan-600 dark:text-cyan-400";
  const DIVIDER_COLOR = "border-gray-300 dark:border-gray-600";

  return (
    <div
      className="laptop:col-span-1 p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-xl 
                       border border-gray-300 dark:border-gray-700 h-fit"
    >
      <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
        My Core Values
      </h2>

      {CORE_VALUES.map((value, index) => {
        const Icon = value.icon;
        return (
          <div
            key={index}
            className={`py-3 ${
              index < CORE_VALUES.length - 1 ? `border-b ${DIVIDER_COLOR}` : ""
            }`}
          >
            <div className="flex items-center mb-1">
              <Icon className={`w-5 h-5 mr-3 ${ACCENT_COLOR}`} />
              <h3 className="text-lg font-bold text-black dark:text-white">
                {value.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 ml-8">
              {value.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CoreValuesCard;
