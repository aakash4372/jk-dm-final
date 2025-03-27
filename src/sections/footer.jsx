import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className=" section bg-[#3e495b] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="mb-10 md:mb-12 lg:mb-16 text-center md:text-left service">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold  mb-4">
            Design, Development<br className="hidden sm:block" /> and Marketing
          </h1>
          <button className="bg-white text-red-600 font-semibold py-2 px-6 sm:px-8 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base md:text-lg">
            Get Started
          </button>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 service">
          {/* Company Column */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline text-sm sm:text-base md:text-[15px] lg:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 service">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {["graphic designing", "video editing", "motion graphic", "digital marketing", "magazine designing", "website development", "branding"].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:underline text-sm sm:text-base md:text-[15px] lg:text-base">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 service">
              Need Help?
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="text-sm sm:text-base md:text-[15px] lg:text-base mb-1">Call Us Directly</p>
                <a 
                  href="tel:+916381035430 " 
                  className="font-bold text-lg sm:text-xl md:text-xl hover:underline block"
                >
                  +91 63810 35430 
                </a>
                <a 
                  href="tel:+919791542153 " 
                  className="font-bold text-lg sm:text-xl md:text-xl hover:underline block"
                >
                  +91 97915 42153 
                </a>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-[15px] lg:text-base mb-1">Mail to</p>
                <a 
                  href="mailto:collab@digitokmedia.com" 
                  className="font-bold text-base sm:text-lg md:text-xl hover:underline block"
                >
                  collab@digitokmedia.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 service">
              Follow Us
            </h3>
            <div className="flex space-x-4 sm:space-x-5">
              {[ 'instagram', 'youtube','facebook'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="hover:opacity-75 transition-opacity"
                >
                  <img 
                    src={`img/${platform}.png`} 
                    alt={platform} 
                    className="h-7 sm:h-8 md:h-9" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-6 sm:pt-8 border-t border-gray-500 text-center">
          <p className="text-xs sm:text-sm md:text-base">
            &copy; {new Date().getFullYear()}{' '}
            <a 
              href="https://bmtechx.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold hover:underline"
            >
              BM TechX
            </a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;