import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

import data from "../data/portfolio.json";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/Skill/SkillsSection";
import CoreValuesCard from "../components/Skill/CoreValueCard";

export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();

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
          role={data.headerTaglineOne}
          tags={data.tags}
          about={data.aboutpara}
          imageSrc="/images/mon.jpg"
        />

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-4xl font-extrabold mb-10 text-bold">Projects.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-8">
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

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0">
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

        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        <SkillsSection />

        <div className="mt-20 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="text-4xl font-extrabold mb-10 text-bold">About Me.</h1>

          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
            <div
              className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-xl 
                 border border-gray-300 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white border-b border-cyan-400/50 pb-2">
                My Story & Skills
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {data.aboutpara}
              </p>

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
            <CoreValuesCard />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
