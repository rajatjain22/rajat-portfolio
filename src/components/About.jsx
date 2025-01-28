import React from "react";
import {
  TeamIcon,
  FaceSmileIcon,
  HeadsetIcon,
  ArrowForwardIcon,
  ProjectIcon,
} from "./Icons";

const About = () => {
  const stats = [
    {
      icon: <FaceSmileIcon className="sm:w-11 sm:h-11 w-10 h-10" />,
      count: "11",
      label: (
        <>
          <span className="font-bold">Happy Clients</span> Transformed my
          visioninto reality!
        </>
      ),
    },
    {
      icon: <ProjectIcon className="sm:w-11 sm:h-11 w-10 h-10" />,
      count: "50 +",
      label: (
        <>
          <span className="font-bold">Projects</span> worked on 50+ projects.
        </>
      ),
    },
    {
      icon: <HeadsetIcon className="sm:w-11 sm:h-11 w-10 h-10" />,
      count: "24/7",
      label: (
        <>
          <span className="font-bold">Hours Of Support</span> dedicately
          available on 24/7.
        </>
      ),
    },
    {
      icon: <TeamIcon className="sm:w-11 sm:h-11 w-10 h-10" />,
      count: "23",
      label: (
        <>
          <span className="font-bold">Team</span> Proudly Worked with 23
          Exceptional Team Members.
        </>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="xl:py-20 xl:px-20 lg:py-10 lg:px-10 md:py-8 md:px-8 py-4 px-4"
    >
      <h2 className="relative sm:text-3xl text-2xl font-bold lg:mb-12 sm:mb-6 mb-5 sm:pb-2 pb-1">
        About
        <span className="absolute bottom-0 left-0 w-[50px] h-[2px] bg-[#149ddd]"></span>
      </h2>
      <p className="text-gray-600 sm:text-base text-sm sm:mb-8 mb-4 leading-relaxed">
        Hi, I'm <strong>Rajat Jain</strong>, a passionate Full Stack Developer
        with over 2+ years of experience building modern, scalable, and
        user-friendly web applications. I specialize in developing full-stack
        solutions using the MERN stack (MongoDB, Express, ReactJS, Node.js),
        along with expertise in MySQL for database management.
      </p>
      <div className="flex lg:flex-row flex-col items-start xl:gap-6 gap-4 xl:p-6 lg:p-4 p-2 bg-gray-100 rounded-lg shadow-lg">
        {/* Left Section: Profile Image */}
        <div className="lg:w-1/4 w-full">
          <img
            src="/my-profile.png"
            alt="Profile"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Section: Profile Details */}
        <div className="lg:w-3/4 w-full">
          <h1 className="text-xl sm:text-2xl font-bold">Full-Stack Developer</h1>
          <p className="mt-2 text-gray-600 md:text-md sm:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-4 lg:mt-8 sm:mt-4 mt-2 text-sm text-gray-800">
            <ul>
              <li className="flex items-center gap-1 xl:mb-4 lg:mb-3 sm:mb-2 mb-1 lg:text-sm  text-xs">
                <ArrowForwardIcon className="w-3 h-3 text-[#149ddd] " />
                <strong className="mr-1">Birthday :</strong>
                <span>22 Feb 2000</span>
              </li>

              <li className="flex items-center gap-1 xl:mb-4 lg:mb-3 sm:mb-2 mb-1 lg:text-sm  text-xs">
                <ArrowForwardIcon className="w-3 h-3 text-[#149ddd]" />
                <strong className="mr-1">Phone :</strong>
                <span>+91 9826639872</span>
              </li>

              <li className="flex items-center gap-1 xl:mb-4 lg:mb-3 sm:mb-2 mb-1 lg:text-sm  text-xs">
                <ArrowForwardIcon className="w-3 h-3 text-[#149ddd]" />
                <strong className="mr-1">City :</strong>
                <span>Indore, India</span>
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-1 xl:mb-4 lg:mb-3 sm:mb-2 mb-1 lg:text-sm  text-xs">
                <ArrowForwardIcon className="w-3 h-3 text-[#149ddd]" />
                <strong className="mr-1">Degree :</strong>
                <span>MCA (Master of Computer Applications)</span>
              </li>
              <li className="flex gap-1 xl:mb-4 lg:mb-3 sm:mb-2 mb-1 lg:text-sm  text-xs ">
                <ArrowForwardIcon className="w-3 h-3 text-[#149ddd]" />
                <strong className="mr-1">Email:</strong>
                <a
                  href="mailto:jainr6000@gmail.com"
                  className="cursor-pointer"
                >
                  jainr6000@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1 xl:mb-4 lg:mb-3 sm:mb-2 mb-1 lg:text-sm  text-xs">
                <ArrowForwardIcon className="w-3 h-3 text-[#149ddd]" />
                <strong className="mr-1">Freelance :</strong>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-4 gap-6 pt-16">
        {stats.map((stat, index) => (
          <div key={index} className="flex gap-4 text-left w-full">
            <div className="xl:w-3/12 sm:w-2/12 w-2/12 text-[#149ddd] mb-2">
              {stat.icon}
            </div>
            <div className="sm:w-9/12 w-9/12">
              <div className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-1">
                {stat.count}
              </div>
              <div className="lg:text-sm sm:text-base text-xs text-gray-600 md:max-w-[208px] sm:max-w-[144px]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
