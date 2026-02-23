import React from "react";
import Modules from "./Modules";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen, faAward } from "@fortawesome/free-solid-svg-icons";


const Learn = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="md:text-left text-center">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">
              What will you learn?
            </h1>

            <p className="text-lg lg:text-lg py-4">
              Drive your career forward by mastering Artificial Intelligence and
              Machine Learning. Build a strong foundation in Python, data
              handling with NumPy and Pandas, and data visualization. Advance to
              core ML models, supervised and unsupervised learning, ensemble
              methods, and model optimization. Gain hands-on expertise in
              Generative AI, LLM integration, prompt engineering, agentic AI
              concepts, and MLOps basics, culminating in a portfolio-ready
              capstone project that equips you to solve real-world, AI-driven
              business challenges
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/learn.png"
              alt="AI and ML Program"
              className="w-full max-w-md lg:max-w-lg rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* <div className="bg-gradient-to-b from-white via-red-100 to-red-300 pb-4"> */}
      <div className=" px-6 lg:px-12 py-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Course Details
        </h1>
      </div>

      <div className="max-w-7xl  px-6 lg:px-12 py-1 ">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                    text-center md:divide-x divide-gray-200"
        >
          <div className="flex items-center md:justify-center py-4 gap-3">
            {/* Left Side – Icon */}
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 ">
              <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
            </span>

            {/* Right Side – Text */}
            <div className="text-left">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Duration
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                3 Months
              </p>
            </div>
          </div>

          <div className="flex items-center md:justify-center py-4 gap-3">
            {/* Left Side – Icon */}

            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-white text-xl"
              />
            </span>

            {/* Right Side – Text */}
            <div className="text-left">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Course Mode
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-1">Online</p>
            </div>
          </div>

          <div className="flex items-center md:justify-center py-4 gap-3">
            {/* Left Side – Icon */}

            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500">
              <FontAwesomeIcon icon={faAward} className="text-white text-xl" />
            </span>

            {/* Right Side – Text */}
            <div className="text-left">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Certification
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                from upDate
              </p>
            </div>
          </div>
        </div>

        <Modules />

        <button
          onClick={() => navigate("/signup")}
          className="mt-8 bg-red-500 hover:bg-red-600 
          transition duration-300 
          text-white text-lg font-semibold 
          px-6 py-3 rounded-full shadow-md 
          flex items-center gap-3 m-auto mb-10"
        >
          REGISTER NOW
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="text-red-500 text-sm rotate-220"
            />
          </span>
        </button>
      </div>

      {/* </div> */}
    </>
  );
};

export default Learn;
