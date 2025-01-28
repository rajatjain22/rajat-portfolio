import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 30 },
    { name: "CSS", level: 30 },
    { name: "JavaScript", level: 50 },
    { name: "Tailwind CSS", level: 30 },
    { name: "React.js", level: 70 },
    { name: "Next.js", level: 70 },
    { name: "Nodejs", level: 55 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 65 },
    { name: "AWS", level: 20 },
    { name: "Lambda Serverless", level: 55 },
    { name: "Simple Storage Service (S3)", level: 50 },
    { name: "API Gateway", level: 30 },
    { name: "EC2", level: 45 },
    { name: "Git", level: 75 },
  ];

  return (
    <section
      id="skills"
      className="xl:py-20 xl:px-20 lg:py-10 lg:px-10 md:py-8 md:px-8 py-4 px-4 bg-gray-50"
    >
      <h2 className="relative sm:text-3xl text-2xl font-bold sm:pb-2 pb-1">
        Skills
        <span className="absolute bottom-0 left-0 w-[50px] h-[2px] bg-[#149ddd]"></span>
      </h2>
      <p className="lg:my-8 sm:my-6 my-4 sm:text-base text-sm">
        Hands on experience in Responsive Web Design, Cross-Browser
        Compatibility, SEO Optimization, Web Accessibility (WCAG), Performance
        Tunning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-y-4 gap-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="lg:mb-6 sm:mb-3 mb-1">
            <div className="flex justify-between items-center sm:mb-2 mb-1">
              <span className="font-medium lg:text-base sm:text-sm text-xs">
                {skill.name}
              </span>
              <span className="sm:text-base text-xs">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full lg:h-1.5 sm:h-1 h-0.5">
              <div
                className="bg-[#149ddd] lg:h-1.5 sm:h-1 h-0.5 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
