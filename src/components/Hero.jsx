import React from "react";
import { FileDownloadIcon } from "./Icons";
import TypeWriter from "./TypeWriter";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative">
      <img
        src="/milestone.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5" />
      <div className="relative z-10 flex flex-col justify-center h-screen xl:px-20 lg:px-10 md:px-8 px-4">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl  text-4xl font-bold text-white sm:mb-4 ">
          Rajat Jain
        </h1>
        <p className="sm:text-xl md:text-2xl lg:text-3xl text-lg text-gray-300 lg:mb-8 md:mb-6 sm:mb-4 mb-4">
          {" "}
          <span className="mr-3">I'am</span>
          <TypeWriter text="Full-Stack Developer" />
        </p>
        <a
          href="/path-to-your-resume.pdf"
          download
          className="inline-flex items-center sm:px-6 sm:py-3 md:px-2 md:py-2 px-3 py-2 bg-[#149ddd] hover:bg-[#149ddd]-600 text-white text-sm sm:text-xs rounded-lg transition-colors duration-200 w-fit"
        >
          <FileDownloadIcon className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
