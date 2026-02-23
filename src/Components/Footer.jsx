import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6
        flex flex-col md:flex-row
        justify-between items-center md:items-start
        text-center md:text-left gap-4"
      >
        {/* Left Side */}
        <div className="text-xs sm:text-sm text-gray-600 space-y-2">
          <p>
            

            Copyright © {new Date().getFullYear()} upDate is a part of upDt Education Technology Private Limited All rights reserved 
          </p>
          
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs sm:text-sm text-gray-600">
          <a
            href="#"
            className="hover:text-gray-800 transition underline"
          >
            Privacy Policy
          </a>

          <span className="hidden sm:inline">&</span>

          <a
            href="#"
            className="hover:text-gray-800 transition underline"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;