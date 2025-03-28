import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
import InstagramIcon from "./serviceimage/instagram.png";
import YouTubeIcon from "./serviceimage/youtube.png";
import FacebookIcon from "./serviceimage/facebook.png";

const Footer = () => {
  return (
    <footer className="section bg-[#3e495b] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="mb-10 md:mb-12 lg:mb-16 text-center md:text-left service">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4">
            Design, Development<br className="hidden sm:block" /> and Marketing
          </h1>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-red-600 font-semibold py-2 px-6 sm:px-8 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base md:text-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 service">
          {/* Company Column */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="hover:underline text-sm sm:text-base md:text-[15px] lg:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline text-sm sm:text-base md:text-[15px] lg:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-sm sm:text-base md:text-[15px] lg:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 service">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Graphic Designing",
                "Video Editing",
                "Motion Graphic",
                "Digital Marketing",
                "Magazine Designing",
                "Website Development",
                "Branding"
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="hover:underline text-sm sm:text-base md:text-[15px] lg:text-base capitalize"
                  >
                    {service.toLowerCase()}
                  </Link>
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
                  href="tel:+916381035430" 
                  className="font-bold text-lg sm:text-xl md:text-xl hover:underline block"
                >
                  +91 63810 35430
                </a>
                <a 
                  href="tel:+919791542153" 
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
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img 
                  src={InstagramIcon} 
                  alt="Instagram" 
                  className="h-7 sm:h-8 md:h-9" 
                />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img 
                  src={YouTubeIcon} 
                  alt="YouTube" 
                  className="h-7 sm:h-8 md:h-9" 
                />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img 
                  src={FacebookIcon} 
                  alt="Facebook" 
                  className="h-7 sm:h-8 md:h-9" 
                />
              </a>
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