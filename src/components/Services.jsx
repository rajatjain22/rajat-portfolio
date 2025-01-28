import {
  MonitorSmartphoneIcon,
  OptimizeIcon,
  BrowserSafariIcon,
  CustomizeIcon,
  SEOIcon,
  InterfaceIcon,
} from "./Icons";

const Services = () => {
  const services = [
    {
      icon: (
        <MonitorSmartphoneIcon className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10" />
      ),
      title: "Responsive Website Development",
      description: "Building websites that work seamlessly across all devices",
    },
    {
      icon: (
        <InterfaceIcon className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10" />
      ),
      title: "Interactive Features",
      description: "Creating interactive and dynamic user interfaces",
    },
    {
      icon: (
        <OptimizeIcon className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10" />
      ),
      title: "Performance Optimization",
      description: "Improving website speed and user experience",
    },
    {
      icon: (
        <BrowserSafariIcon className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10" />
      ),
      title: "Cross-Browser Compatibility",
      description: "Making websites work seamlessly on all browsers",
    },
    {
      icon: (
        <CustomizeIcon className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10" />
      ),
      title: "CMS Customization",
      description:
        "Working with platforms like WordPress or Shopify for tailored solutions",
    },
    {
      icon: <SEOIcon className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-10 h-10" />,
      title: "SEO-Friendly Desingn",
      description:
        "Implementing best practices for better search engine visibility",
    },
  ];

  return (
    <section
      id="services"
      className="xl:py-20 xl:px-20 lg:py-10 lg:px-10 md:py-8 md:px-8 py-4 px-4"
    >
      <h2 className="relative lg:mb-12 sm:mb-6 mb-4 sm:pb-2 pb-1 sm:text-3xl text-2xl font-bold">
        Services
        <span className="absolute bottom-0 left-0 w-[50px] h-[2px] bg-[#149ddd]"></span>
      </h2>
      <p className="sm:my-8 my-4 md:text-base sm:text-sm text-xs">
        Proficient in building responsive, interactive, and visually appealing
        websites using HTML, CSS, and JavaScript. Skilled in creating dynamic
        features, ensuring cross-browser compatibility, mobile responsiveness,
        and SEO optimization. Experienced in CMS customization and API
        integration for seamless user experiences.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  sm:gap-8 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-start align-middle sm:gap-4 gap-3 sm:p-6 p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-[#149ddd]">{service.icon}</div>
            <div className="">
              <h3 className="md:text-lg  sm:text-base text-sm font-semibold sm:mb-2 mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 lg:text-base sm:text-sm text-xs">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
