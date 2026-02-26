import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky md:relative top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}

            <div className="flex gap-2 items-center justify-center flex-wrap">
              <img
                src="/update.png"
                className="w-16 md:w-30 object-contain"
                alt="Update Logo"
              />
              <img
                src="/Abhi.jpeg"
                className="w-22 md:w-45 object-contain"
                alt="Abhi Logo"
              />
              <img
                src="/ISO.png"
                className="w-10 md:w-15 object-contain "
                alt="ISO Logo"
              />
              <img
                src="/DPIIT.png"
                className="w-19 md:w-30 object-contain"
                alt="DPIIT Logo"
              />
            </div>

            {/* Desktop Button */}
            <button
              onClick={() => navigate("/signup")}
              className="hidden md:inline-block bg-red-500 hover:bg-red-600 
                         transition duration-300 
                         text-white text-sm md:text-lg 
                         px-4 md:px-6 py-2 
                         rounded-lg font-semibold shadow-md"
            >
              REGISTER NOW
            </button>

            
          </nav>
        </div>
      </header>

      {/* 📱 Mobile Bottom Fixed Button */}
      <div className="fixed rounded-t-2xl bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-200 shadow-lg p-3 z-50">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-red-500 hover:bg-red-600 
                     text-white py-3 rounded-xl 
                     font-semibold shadow-md transition duration-300"
        >
          REGISTER NOW
        </button>
      </div>
    </>
  );
};

export default Navbar;
