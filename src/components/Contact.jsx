import React, { useState } from "react";
import { MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="xl:py-20 xl:px-20 lg:py-10 lg:px-10 md:py-8 md:px-8 py-4 px-4 bg-gray-50"
    >
      <h2 className="relative sm:pb-2 pb-1 sm:text-3xl text-2xl font-bold mb-4 ">
        Contact
        <span className="absolute bottom-0 left-0 w-[50px] h-[2px] bg-[#149ddd]"></span>
      </h2>
      <h3 className="md:text-lg smtext-base text-sm sm:mb-14 mb-8">
        Looking to create something amazing? Let’s connect and get started.
      </h3>
      <div className="grid grid-cols-1  sm:grid-cols-2 sm:gap-12 gap-5 sm:p-6 p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="">
          <div className="sm:mb-8 mb-6">
            <div className="sm:space-y-4 space-y-2">
              <div className="flex items-center">
                <MailIcon className="sm:w-6 sm:h-6 w-4 h-4 text-[#149ddd] mr-4" />
                <span className="lg:text-md sm:text-base text-sm">
                  jainr6000@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="sm:w-6 sm:h-6 w-4 h-4 text-[#149ddd] mr-4" />
                <span className="lg:text-md sm:text-base text-sm">
                  +91 9826639872
                </span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="sm:w-6 sm:h-6 w-4 h-4 text-[#149ddd] mr-4" />
                <span className="lg:text-md sm:text-base text-sm">
                  Indore, India
                </span>
              </div>
            </div>
          </div>

          {/* Map iframe */}
          <div className="w-full sm:h-64 h-60 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3266170120355!2d75.90833119999999!3d22.7160984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2d1d44edb35%3A0xf459dcaf25ba65a!2sAdos%20Pados%20Apartment%2C%20Ashish%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452016!5e0!3m2!1sen!2sin!4v1738067215065!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="sm:space-y-6 space-y-3">
            <div>
              <label className="block sm:text-sm  text-xs font-medium text-gray-700 sm:mb-2 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full sm:px-4 sm:py-2 px-2 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:px-4 sm:py-2 px-2 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full sm:px-4 sm:py-2 px-2 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#149ddd] text-white sm:px-6 sm:py-3 px-4 py-2 sm:text-lg text-md rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
