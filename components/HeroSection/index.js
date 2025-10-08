// /components/HeroSection.jsx

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

import Socials from "../Socials";
import Button from "../Button";

const HeroSection = ({ name, role, tags, about, imageSrc }) => {
  const ACCENT_COLOR_CLASS = "text-cyan-400";
  const ACCENT_SHADOW_CLASS = "hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.4)]";
  const BORDER_COLOR_CLASS = "border-cyan-400";

  const defaultTags = [
    "Frontend Developer",
    1500,
    "Frontend Developer",
    1000,
    "Frontend Developer",
    1000,
    "Frontend Developer",
    1000,
    "Frontend Developer",
    1000,
  ];

  const animationSequence = (
    tags && tags.length > 0
      ? tags.flatMap((tag) => [tag, 1500])
      : defaultTags.flatMap((tag) => [tag, 1500])
  ).slice(0, -1);

  //   return (
  //     <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 py-12">
  //       {/* Cột 1: Ảnh đại diện */}
  //       <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
  //         <div
  //           className={`w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden
  //                       border-2 ${BORDER_COLOR_CLASS} shadow-xl
  //                       transition duration-500 ease-in-out transform hover:scale-105 ${ACCENT_SHADOW_CLASS}
  //                       relative`}
  //         >
  //           <Image
  //             src={imageSrc}
  //             alt={name || "Vo Thi Thanh Ngan"}
  //             layout="fill"
  //             objectFit="cover"
  //             priority={true}
  //           />
  //         </div>
  //       </div>

  //       {/* Cột 2: Thông tin giới thiệu */}
  //       <div className="md:w-1/2 text-center md:text-left">
  //         <h1 className="text-4xl sm:text-6xl font-extrabold mb-2 text-white">
  //           Hi, I&apos;m{" "}
  //           <span className={ACCENT_COLOR_CLASS}>{name || "Thanh Ngan"}</span>
  //         </h1>

  //         <h3 className="text-xl sm:text-3xl font-semibold mb-6 text-gray-200">
  //           I&apos;m a{" "}
  //           <span className={ACCENT_COLOR_CLASS}>
  //             <TypeAnimation
  //               sequence={animationSequence}
  //               speed={50}
  //               repeat={Infinity}
  //             />
  //           </span>
  //         </h3>

  //         <p className="text-sm sm:text-lg mb-8 text-gray-400 max-w-lg md:max-w-none">
  //           {about ||
  //             "Aspiring Frontend Developer passionate about creating responsive, user-friendly interfaces for both web and mobile applications. Seeking opportunities to apply modern frameworks and grow in a collaborative development environment."}
  //         </p>

  //         <Socials className="mb-6 flex justify-center md:justify-start" />

  //         <Link href="#contact" passHref legacyBehavior>
  //           <Button
  //             type="primary"
  //             className={`!bg-cyan-500 text-black font-bold py-3 px-8
  //                         hover:!bg-cyan-600 transition duration-300 ${ACCENT_SHADOW_CLASS}
  //                         focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50`}
  //           >
  //             Hire Me
  //           </Button>
  //         </Link>
  //       </div>
  //     </section>
  //   );
  // };

  // export default HeroSection;

  return (
    // Toàn bộ Hero Section sẽ có nền đen hoặc xám đậm
    <section
      className="flex flex-col md:flex-row items-center justify-center min-h-screen 
                 px-6 py-16 md:py-12 bg-gray-900 md:bg-black w-full" // Màu nền đen/xám cho section
    >
      {/* Cột 1: Ảnh đại diện */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative order-2 md:order-1">
        <div
          className={`w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden 
                      border-4 ${BORDER_COLOR_CLASS} shadow-xl 
                      transition duration-500 ease-in-out transform hover:scale-105 ${ACCENT_SHADOW_CLASS}
                      relative bg-gray-800`} // Thêm bg-gray-800 cho div chứa ảnh để ảnh luôn có nền tối
        >
          <Image
            src={imageSrc}
            alt={name || "Vo Thi Thanh Ngan"}
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>

      {/* Cột 2: Thông tin giới thiệu */}
      <div className="md:w-1/2 text-center md:text-left order-1 md:order-2 md:pl-16 lg:pl-24">
        {/* Đổi thứ tự ở mobile: text trên ảnh */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 text-white leading-tight">
          {" "}
          {/* Kích thước chữ lớn hơn */}
          Hi, I&apos;m{" "}
          <span className={ACCENT_COLOR_CLASS}>{name || "Thanh Ngan"}</span>
        </h1>
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-8 text-gray-200 leading-snug">
          {" "}
          {/* Kích thước chữ lớn hơn */}
          I&apos;m a{" "}
          <span className={ACCENT_COLOR_CLASS}>
            <TypeAnimation
              sequence={animationSequence}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h3>
        <p className="text-base sm:text-xl mb-10 text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
          {" "}
          {/* Kích thước chữ lớn hơn, max-width cho đoạn văn */}
          {about ||
            "Aspiring Frontend Developer passionate about creating responsive, user-friendly interfaces for both web and mobile applications. Seeking opportunities to apply modern frameworks and grow in a collaborative development environment."}
        </p>
        <Socials className="mb-8 flex justify-center md:justify-start" />{" "}
        {/* Khoảng cách lớn hơn */}
        <Link href="#contact" passHref legacyBehavior>
          <Button
            onClick={() => window.open("mailto:thanhngan10604@gmail.com")}
            type="primary"
            className={`!bg-cyan-500 text-black font-extrabold py-4 px-10 text-lg rounded-full 
                        hover:!bg-cyan-600 transition duration-300 ${ACCENT_SHADOW_CLASS}
                        focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50`}
          >
            Hire Me
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
