import { ArrowUpIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-[#f4fafd] py-6 px-2 text-center relative border-t border-[rgb(233 233 233)]">
      <div className="text-gray-500 sm:text-sm text-xs">
        © Copyright{" "}
        <span className="text-[#149ddd] font-semibold">Rportfolio</span> All
        Rights Reserved
      </div>
      <div className="text-gray-500 sm:text-sm text-xs sm:mt-2 mt-1">
        Designed by{" "}
        <a
          href="#"
          className="text-[#149ddd] font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rajat Jain
        </a>
      </div>
      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-4 right-4 md:bottom-5 md:right-5 bg-[#149ddd] hover:bg-[#149ddd]-600 text-white sm:w-10 sm:h-10 w-8 h-8 p-2 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-10 h-10" />
      </button>
    </footer>
  );
};

export default Footer;
