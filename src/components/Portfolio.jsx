import React, { useState } from "react";
import { LinkIcon, ViewIcon } from "./Icons";

const Portfolio = () => {
  const allProjects = [
    {
      title: "Apple Fix Pro",
      image: "/apple-fix.png",
      technologies: ["Next.js", "Node.js", "Express.js", "MySQL"],
      category: "Projects",
      link: "https://www.applefixpros.com",
    },
    {
      title: "Portfolio Website",
      image: "/apple-fix.png",
      technologies: ["Next.js", "Node.js", "Express.js", "MySQL"],
      category: "Personal Projects",
      link: "https://myportfolio.com",
    },
    {
      title: "Social Media App",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400",
      technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Cloudinary"],
      category: "Personal Projects",
      link: "https://ecommerceplatform.com",
    },
    {
      title: "Wealthcon App",
      image: "/apple-fix.png",
      technologies: [
        "Next.js",
        "MongoDB",
        "AWS S3",
        "AWS SES",
        "EC2",
        "Cloudfront",
      ],
      category: "Projects",
      link: "https://somage.au.com",
    },
    {
      title: "Drinkrenude Report Management App",
      image: "/apple-fix.png",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL",
      ],
      category: "Projects",
      link: "https://dsbuildersgroup.com",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [zoomProject, setZoomProject] = useState(null); // For zoom view

  const handleTabClick = (category) => {
    setActiveTab(category);
    if (category === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <section
      id="portfolio"
      className="xl:py-20 xl:px-20 lg:py-10 lg:px-10 md:py-8 md:px-8 py-4 px-4 bg-gray-50 overflow-hidden "
    >
      <h2 className="relative sm:pb-2 pb-1 sm:text-4xl text-3xl font-bold sm:mb-4 mb-2">
        Portfolio
        <span className="absolute bottom-0 left-0 w-[50px] h-[2px] bg-[#149ddd]"></span>
      </h2>
      <p className="text-gray-600 mb-8 leading-relaxed">My projects</p>
      {/* Tabs */}
      <div className="sm:mb-10 mb-5 flex sm:space-x-4 space-x-3 justify-center ">
        {["All", "Projects", "Personal Projects"].map((tab) => (
          <button
            key={tab}
            className={`sm:px-4 px-2.5 sm:py-2 py-1.5 md:text-base sm:text-sm text-xs rounded-lg font-semibold ${
              activeTab === tab
                ? "bg-[#149ddd] text-white"
                : "bg-gray-200 text-gray-600"
            } transition-colors duration-200`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:h-56 md:h-52 sm:h-48 h-44 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-5 text-center">
              <h3 className="sm:text-xl text-lg font-semibold mb-2 text-[#149ddd]">
                {project.title}
              </h3>
              <p className="flex space-x-4 justify-center align-center mb-2">
                {/* View Icon */}
                <span
                  className="hover:text-[#149ddd] sm:text-3xl text-xl cursor-pointer"
                  onClick={() => setZoomProject(project)}
                >
                  <ViewIcon className="w-8 h-8" />
                </span>
                {/* Link Icon */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#149ddd] sm:text-3xl text-xl"
                >
                  <LinkIcon className="w-10 h-10" />
                </a>
              </p>
              <p className="sm:text-base text-sm flex justify-center gap-2 flex-wrap ">
                {project.technologies.map((val, index) => (
                  <span
                    key={index}
                    className="bg-white text-[#149ddd] p-2 rounded-md font-semibold text-sm"
                  >
                    {val}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Zoom Modal */}
      {zoomProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg sm:max-w-lg max-w-xs p-5 relative">
            <button
              className="absolute top-0 right-1 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setZoomProject(null)}
            >
              &times;
            </button>
            <img
              src={zoomProject.image}
              alt={zoomProject.title}
              className="w-full sm:h-64 h-48 object-cover sm:mb-4 mb-2 rounded"
            />
            <h3 className="sm:text-2xl text-lg font-semibold text-[#149ddd] mb-2">
              {zoomProject.title}
            </h3>
            <p className="text-gray-600 sm:text-base text-sm sm:mb-4 mb-2">
              {zoomProject.technologies}
            </p>
            <a
              href={zoomProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#149ddd] font-bold"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
