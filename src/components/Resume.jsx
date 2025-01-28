import React from "react";

const Resume = () => {
  const resumeData = {
    summary: {
      name: "RAJAT JAIN",
      description:
        "Full Stack Developer with over 2+ years of experience building modern, scalable, and user-friendly web applications. I specialize in developing full-stack solutions using the MERN stack (MongoDB, Express, ReactJS, Node.js), along with expertise in MySQL for database management.",
      details: ["Indore (M.P)", "+91 9826639872", "jainr6000@gmail.com"],
    },
    education: [
      {
        degree: "BSC ( Bachelor of Science in Computer Science )",
        institution:
          "Rajiv Gandhi Govt. PG Collage, Mandsaur, Madhya Pradesh, India",
        year: "2018 - 2020",
      },
      {
        degree: "MCA ( MASTER OF COMPUTER APPLICATIONS )",
        institution:
          "Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV College), Indore, Madhya Pradesh, India",
        year: "2020 - 2022",
      },
    ],
    experience: [
      {
        title: "Associate Software Engineer",
        company: "TechInfini Solutions Pvt. Ltd.",
        location: "Indore, M.P",
        period: "06/2022 - 02/2024",
        responsibilities: [
          "Developed real-time analytics dashboards and websites using React.js with animations and transitions.",
          "Optimized lazy loading to reduce page load times by 25%.",
          "Integrated RESTful APIs for seamless user experiences.",
          "Customized themes on WordPress and Shopify platforms.",
        ],
      },
      {
        title: "Software Engineer",
        company: "TechInfini Solutions Pvt. Ltd.",
        location: "Indore, M.P",
        period: "03/2024 - Present",
        responsibilities: [
          "Delivered dynamic web solutions with React.js, Next.js, and Node.js.",
          "Built scalable Node.js APIs for backend functionality and data manipulation.",
          "Developed Shopify apps for price notifications, report management, and donations.",
          "Managed multiple projects, meeting deadlines and collaborating with cross-functional teams.",
        ],
      },
    ],
    projects: [
      {
        name: "Apple Fix Pros App",
        technologies: ["Next.js", "Node.js", "Express.js", "MySQL"],
        description: [
          "Led both frontend and backend development for an e-commerce platform specializing in Mac repairs and sales.",
          "Designed and deployed a RESTful API using Node.js and Express.js, improving data retrieval speed by 30%.",
        ],
      },
      {
        name: "Social Media App",
        technologies: [
          "React.js",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Cloudinary",
        ],
        description: [
          "Single-handedly built a feature-rich social media web app for content creation, engagement, and discovery, leveraging MongoDB and aggregation for optimal data flow.",
          "Optimized Next.js server-side rendering (SSR) for improved SEO and initial page load performance.",
          "Engineered a secure social media app with private routes and API access control using Next.js middleware and JWT tokens.",
          "Created a scalable social media platform primed for growth, using cloud technologies (Cloudinary) for media optimization.",
        ],
      },
      {
        name: "Wealthcon App",
        technologies: ["Next.js", "MongoDB", "AWS S3", "SES", "EC2"],
        description: [
          "Built a video stream app with private routes and JWT-based authentication using Next.js middleware.",
          "Enabled video uploads to AWS S3 and seamless streaming for users.",
          "Created a multi-role admin panel for efficient user and content management.",
          "Implemented video view tracking and restricted access via AWS IAM for security.",
          "Integrated password reset and OTP-based email verification with AWS SES.",
          "Deployed on AWS EC2, with a custom domain for high availability.",
        ],
      },
      {
        name: "Drinkrenude Report Management App",
        technologies: [
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MySQL",
        ],
        description: [
          "Developed a comprehensive Report Management System for monthly company order data analysis.",
          "Enabled insights into averages and quarterly totals per company, facilitating informed decision-making.",
          "Implemented user-friendly features allowing users to add comments to columns and individual orders, as well as flag specific orders within each month.",
          "Incorporated advanced functionalities such as date filtering and dynamic table creation, enhancing user experience.",
          "Integrated graphical representations for enhanced data visualization and analysis.",
        ],
      },
    ],
  };

  return (
    <section
      id="resume"
      className="xl:py-20 xl:px-20 lg:py-10 lg:px-10 md:py-8 md:px-8 py-4 px-4"
    >
      <div className=" ">
        {/* Header */}
        <div className="lg:mb-6 mb-4">
          <h1 className="relative sm:pb-2 pb-1 sm:text-3xl text-2xl font-bold">
            Resume
            <span className="absolute bottom-0 left-0 w-[50px] h-[2px] bg-[#149ddd]"></span>
          </h1>
          <p className="text-gray-600 my-4 sm:text-base text-sm">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 sm:gap-4 gap-2">
          {/* Summary Section */}
          <div>
            <h2 className="lg:text-xl sm:text-lg text-md font-semibold pb-1 sm:my-2 my-1">
              Summary
            </h2>
            <div className="relative border-l-2 border-[#149ddd] pl-4 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:-left-2 before:top-0 before:bg-white before:border-2 before:border-[#149ddd]">
              <h3 className="lg:text-lg sm:text-base text-sm text-font-400 text-[rgb(59 59 59)]">
                {resumeData.summary.name}
              </h3>
              <p className="text-gray-600 sm:my-2 my-1 lg:text-base sm:text-sm text-xs">
                {resumeData.summary.description}
              </p>
              <ul className="text-gray-800">
                {resumeData.summary.details.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-500 sm:text-base text-sm">
                      •
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="lg:text-xl sm:text-lg text-md font-semibold pb-1 sm:my-2 my-1">
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className="mb-4 relative border-l-2 border-[#149ddd] pl-4 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:-left-2 before:top-0 before:bg-white before:border-2 before:border-[#149ddd]"
              >
                <h3 className="lg:text-lg lg:text-base sm:text-sm text-xs  font-400 text-[rgb(59 59 59)]">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 sm:my-2 my-1 lg:text-base sm:text-sm text-xs">
                  {edu.institution}
                </p>
                <p className="text-gray-500 sm:my-2 my-1 lg:text-base sm:text-sm text-xs">
                  {edu.year}
                </p>
              </div>
            ))}
          </div>

          {/* Professional Experience Section */}
          <div>
            <h2 className="lg:text-xl sm:text-lg text-md font-semibold pb-1 sm:my-2 my-1">
              Professional Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 relative border-l-2 border-[#149ddd] pl-4 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:-left-2 before:top-0 before:bg-white before:border-2 before:border-[#149ddd]"
              >
                <h3 className="lg:text-lg sm:text-base text-sm font-400 text-[rgb(59 59 59)]">
                  {exp.title}
                </h3>
                <p className="text-gray-600 lg:text-base sm:text-sm text-xs">
                  {exp.company} - {exp.location}
                </p>
                <p className="text-gray-500 lg:my-4 sm:my-2 my-1">
                  {exp.period}
                </p>
                <ul className="list-disc pl-5 text-gray-800">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      className="lg:mt-4 sm:mt-2 mt-1 lg:text-base sm:text-sm text-xs"
                      key={i}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="lg:text-xl sm:text-lg text-md font-semibold pb-1 sm:my-2 my-1">
              Projects
            </h2>
            {resumeData.projects.map((project, index) => (
              <div
                key={index}
                className="mb-4 relative border-l-2 border-[#149ddd] pl-4 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:-left-2 before:top-0 before:bg-white before:border-2 before:border-[#149ddd]"
              >
                <h3 className="lg:text-lg sm:text-base text-sm font-bold text-[#149ddd]">
                  {project.name}
                </h3>
                <p className="text-gray-600 lg:text-base sm:text-sm text-xs">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
