// import React, { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

// const ServiceCard = ({ name, description }) => {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState();

//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   return (
//     <div
//       className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
//         mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
//       } hover:scale-105 link`}
//     >
//       <h1 className="text-3xl">{name ? name : "Heading"}</h1>
//       <p className="mt-5 opacity-40 text-xl">
//         {description
//           ? description
//           : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
//       </p>
//     </div>
//   );
// };

// export default ServiceCard;

// /components/ServiceCard.jsx

import React from "react";
// Giả định bạn đã cài đặt react-icons
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCodeBranch,
  FaPalette,
} from "react-icons/fa";

// Hàm chọn Icon và Màu nhấn dựa trên tiêu đề
const getServiceConfig = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("frontend")) {
    // Màu xanh lá cây/xanh biển cho Frontend
    return {
      icon: FaLaptopCode,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-700/50",
    };
  }
  if (lowerTitle.includes("mobile")) {
    // Màu vàng/cam cho Mobile
    return {
      icon: FaMobileAlt,
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-100 dark:bg-orange-700/50",
    };
  }
  if (lowerTitle.includes("ux") || lowerTitle.includes("design")) {
    // Màu tím cho UI/UX
    return {
      icon: FaPalette,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-700/50",
    };
  }
  // Mặc định
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
    // Card nổi bật, Dark/Light Mode linh hoạt
    <div
      className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20"
    >
      <div className="flex items-center mb-4">
        {/* Icon Circle */}
        <div
          className={`p-3 rounded-full ${config.bg} ${config.color} mr-4 shadow-md`}
        >
          <Icon className="w-6 h-6" />
        </div>

        {/* Tên dịch vụ */}
        <h2 className="text-xl font-bold text-black dark:text-white">{name}</h2>
      </div>

      {/* Mô tả */}
      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
