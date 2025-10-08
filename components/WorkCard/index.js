import React from "react";
import Image from "next/image";

const WorkCard = ({ img, name, description, onClick }) => {
  // Đồng bộ màu nhấn Cyan
  const ACCENT_COLOR = "text-cyan-400";
  // Thêm hiệu ứng nổi bật khi hover, giống như Hero Section
  const HOVER_EFFECT = "hover:shadow-2xl hover:shadow-cyan-500/30";

  return (
    // 1. Card tổng thể: Nền xám đậm, bo tròn, hiệu ứng hover
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg bg-gray-800 
                  transform transition-all duration-500 cursor-pointer 
                  ${HOVER_EFFECT} group`} // Sử dụng group để style hiệu ứng tương tác
      onClick={onClick}
    >
      {/* 2. Ảnh dự án (Lưu ý: Dùng object-cover để ảnh trông gọn hơn) */}
      <div className="relative w-full h-72 overflow-hidden bg-gray-900">
        {/* Đã giảm chiều cao từ 600px xuống 288px (h-72) để phù hợp với bố cục grid, và thêm bg-gray-900 làm nền khi ảnh không chiếm hết */}
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="contain" // Giữ nguyên object-contain để hiển thị toàn bộ mockup
          className="transition-transform duration-500 group-hover:scale-[1.02]" // Hiệu ứng zoom nhẹ hơn
        />

        {/* Overlay nhẹ để tạo chiều sâu */}
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* 3. Nội dung text */}
      <div className="p-5 tablet:p-6">
        {/* Tiêu đề dự án */}
        <h2 className="text-2xl font-bold mb-1 text-white transition-colors duration-300 group-hover:text-cyan-400">
          {name ? name : "Project Name"}
        </h2>

        {/* Công nghệ/Mô tả */}
        <p className="text-gray-400 text-base mb-4">
          {description ? description : "Description"}
        </p>

        {/* Dòng chữ "View Project" tinh tế */}
        <div
          className={`flex items-center ${ACCENT_COLOR} font-semibold text-sm`}
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
