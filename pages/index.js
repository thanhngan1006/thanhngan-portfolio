import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/Skill/SkillsSection";
import CoreValuesCard from "../components/Skill/CoreValueCard";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // useIsomorphicLayoutEffect(() => {
  //   stagger(
  //     [textOne.current, textTwo.current, textThree.current, textFour.current],
  //     { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
  //     { y: 0, x: 0, transform: "scale(1)" }
  //   );
  // }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <HeroSection
          name={data.name}
          role={data.headerTaglineOne} // Lấy một Tagline làm vai trò chính
          tags={data.tags} // Giả định bạn thêm trường 'tags' vào portfolio.json cho TypeAnimation
          about={data.aboutpara} // Sử dụng đoạn giới thiệu ngắn
          imageSrc="/images/mon.jpg" // Giả định bạn thêm trường 'heroImage' vào portfolio.json
        />

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          {/* <h1 className="text-4xl font-extrabold mb-12 text-black dark:text-white">
            Projects.
          </h1> */}

          {/* <h1 className=" text-2xl text-bold">Projects.</h1> */}
          <h1 className="text-4xl font-extrabold mb-10 text-bold">Projects.</h1>

          {/* Lưới dự án */}
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-8">
            {/* Tăng gap từ gap-4 lên gap-8 để Card không bị dính nhau */}
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className=" text-2xl text-bold">Services.</h1>
          <div className="mt-5  grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0">
          {/* Tiêu đề Services: To, Đậm, Chuyển đổi màu */}
          {/* <h1 className="text-4xl font-extrabold mb-12 text-black dark:text-white">
            Services.
          </h1> */}

          <h1 className="text-4xl font-extrabold mb-10 text-bold">Services.</h1>

          <div className="mt-5 grid grid-cols-1 tablet:grid-cols-2 gap-8">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        <SkillsSection />

        {/* <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className=" text-2xl text-bold ">About.</h1>
          <p className=" mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div> */}

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          {/* TIÊU ĐỀ CHÍNH */}
          {/* <h1 className="text-4xl font-extrabold mb-12 text-black dark:text-white">
            About Me.
          </h1> */}

          <h1 className="text-4xl font-extrabold mb-10 text-bold">About Me.</h1>

          {/* ✨ BỐ CỤC 2 CARD MỚI ✨ */}
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
            {" "}
            {/* Đổi thành grid-cols-2 */}
            {/* ✨ CARD GIỚI THIỆU CHÍNH (THAY THẾ CỘT 1 & 2 CŨ) */}
            <div
              className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-xl 
                 border border-gray-300 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b border-cyan-400/50 pb-2">
                My Story & Skills
              </h2>

              {/* Đoạn giới thiệu (data.aboutpara) */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {data.aboutpara}
              </p>

              {/* Các Kỹ năng chính (dạng bullet) */}
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                Key Expertise:
              </h3>
              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-y-3 gap-x-6 text-gray-600 dark:text-gray-400">
                <p className="flex items-center text-base">
                  <span className="text-cyan-500 mr-2 text-xl">•</span> Reactjs
                  Dev
                </p>
                <p className="flex items-center text-base">
                  <span className="text-cyan-500 mr-2 text-xl">•</span>{" "}
                  TypeScript for Robustness
                </p>

                <p className="flex items-center text-base">
                  <span className="text-cyan-500 mr-2 text-xl">•</span> Modern
                  UI/UX Principles
                </p>
                <p className="flex items-center text-base">
                  <span className="text-cyan-500 mr-2 text-xl">•</span>{" "}
                  Responsive Web Design
                </p>
              </div>
            </div>
            {/* Cột phải: Core Values Card (giữ nguyên) */}
            <CoreValuesCard />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
