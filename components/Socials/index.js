// import React from "react";
// import Button from "../Button";

// import yourData from "../../data/portfolio.json";

// const Socials = ({ className }) => {
//   return (
//     <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
//       {yourData.socials.map((social, index) => (
//         <Button key={index} onClick={() => window.open(social.link)}>
//           {social.title}
//         </Button>
//       ))}
//     </div>
//   );
// };

// export default Socials;

// /components/Socials.jsx

import React from "react";
import Link from "next/link";
// Giả định bạn sẽ sử dụng react-icons hoặc icon SVG
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import data from "../../data/portfolio.json";
import { FaBlog, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const getSocialIcon = (title) => {
  // Chuyển title về chữ thường để so sánh không phân biệt hoa thường
  const lowerCaseTitle = title.toLowerCase();

  // Bạn có thể tùy chỉnh kích thước icon tại đây (w-5 h-5)
  const iconProps = { className: "w-5 h-5" };

  switch (lowerCaseTitle) {
    case "github":
      return <FaGithub {...iconProps} />;
    case "linkedin":
      return <FaLinkedinIn {...iconProps} />;
    case "twitter":
      return <FaTwitter {...iconProps} />;
    case "blog":
      return <FaBlog {...iconProps} />;
    case "email":
      return <AiOutlineMail {...iconProps} />;
    default:
      // Trả về null hoặc một icon mặc định nếu không khớp
      return null;
  }
};
const Socials = ({ className = "" }) => {
  // Giả định data.socials là một mảng các đối tượng { id, name, link }
  const socials = data.socials || [];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socials.map((social) => (
        <Link key={social.id} href={social.link} passHref legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 border border-gray-700 rounded-full hover:border-cyan-400 flex items-center justify-center w-10 h-10"
          >
            {getSocialIcon(social.title)}
          </a>
        </Link>
      ))}

      {socials.length === 0 && (
        <p className="text-gray-500 text-sm">
          Hãy thêm dữ liệu Socials vào portfolio.json
        </p>
      )}
    </div>
  );
};

export default Socials;
