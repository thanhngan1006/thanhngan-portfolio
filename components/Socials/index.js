import Link from "next/link";

import data from "../../data/portfolio.json";
import { FaBlog, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const getSocialIcon = (title) => {
  const lowerCaseTitle = title.toLowerCase();

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
      return null;
  }
};
const Socials = ({ className = "" }) => {
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
