import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  Code2Icon,
  FileTextIcon,
  MailIcon,
  UserIcon,
  WrenchIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
  ArrowForwardIcon,
} from "@/components/Icons";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const menuItems = [
    { icon: <HomeIcon width={20} height={20} />, label: "Home", href: "#home" },
    {
      icon: <UserIcon width={20} height={20} />,
      label: "About",
      href: "#about",
    },
    {
      icon: <Code2Icon width={20} height={20} />,
      label: "Skills",
      href: "#skills",
    },
    {
      icon: <FileTextIcon width={20} height={20} />,
      label: "Resume",
      href: "#resume",
    },
    {
      icon: <BriefcaseIcon width={20} height={20} />,
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      icon: <WrenchIcon width={20} height={20} />,
      label: "Services",
      href: "#services",
    },
    {
      icon: <MailIcon width={20} height={20} />,
      label: "Contact",
      href: "#contact",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedinIcon width={20} height={20} />,
      href: "https://www.linkedin.com/in/vinod-raikwar/",
      label: "LinkedIn",
    },
    {
      icon: <GithubIcon width={20} height={20} />,
      href: "https://github.com/vinod-raikwar/",
      label: "GitHub",
    },
    {
      icon: <InstagramIcon width={25} height={25} />,
      href: "https://instagram.com/vinod.raikwar_313",
      label: "Instagram",
    },
  ];

  return (
    <nav
      className={`fixed h-screen bg-gray-900 text-white flex flex-col py-6 z-50 transition-all duration-300 ${
        isExpanded ? "w-44 sm:w-60" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute -right-3 top-6 bg-[#149ddd] p-1 rounded-full transition-transform duration-300 ${
          isExpanded ? "rotate-0" : "rotate-180"
        }`}
        aria-label="Toggle Sidebar"
      >
        <ArrowForwardIcon className="w-4 h-4"/>
      </button>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        {isExpanded ? (
          <div
            className="sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] mb-4 rounded-full bg-white overflow-hidden sm:8px"
            style={{
              border:
                " 4px solid color-mix(in srgb, var(--default-color, #1e293b), transparent 85%)",
            }}
          >
            <img
              src={"/my-profile.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="sm:text-xl text-lg font-semibold sm:mb-4 mb-2">
            RJ
          </div>
        )}
        {isExpanded && (
          <h2 className="sm:text-2xl text-lg font-semibold sm:mb-4 mb-2">
            Rajat Jain
          </h2>
        )}
      </div>

      {/* Menu Items */}
      <div className="h-screen flex flex-col place-content-between">
        <div className="flex flex-col space-y-4 px-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`sm:p-3 p-1 hover:bg-[#149ddd] rounded-xl transition-colors duration-200 group flex items-center justify-center relative`}
            >
              {item.icon}
              {/* Hide text when collapsed */}
              <span
                className={`ml-3 transition-opacity duration-200 ${
                  isExpanded ? "block" : "hidden"
                }`}
              >
                {item.label}
              </span>
              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <span className="absolute left-full ml-3 bg-[#149ddd] text-white px-3 py-1 rounded-3xl text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                  <span className="absolute -left-1 top-3 w-2 h-2 rotate-45 bg-[#149ddd]"></span>
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div
          className={`flex gap-2 justify-center items-center ${
            isExpanded ? "flex-row" : "flex-col"
          }`}
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[#149ddd] transition-colors duration-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
