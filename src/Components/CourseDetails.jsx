import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const CourseDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="md:text-left text-center">
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight text-gray-900">
              Why choose this Program?
            </h1>

            <h3 className="text-lg md:text-4xl py-3 lg:text-xl font-bold leading-tight text-red-500">
              Corporate KIT + Course Certificate, Offer Letter, LOR, Job Offer
              Letter.
            </h3>

            <button
              onClick={() => navigate("/signup")}
              className="mt-8 bg-red-500 hover:bg-red-600 
  transition duration-300 
  text-white text-lg font-semibold 
  px-6 py-3 rounded-full shadow-md 
  flex items-center gap-3 hidden md:flex"
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

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/certificate.jpg"
              alt="AI and ML Program"
              className=" h-50 rounded-4xl max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>

        <div className="pt-16">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Certification from upDate
                </h2>
                <p className="mt-3 text-gray-600">
                  Earn a Certificate of Completion from upDate, recognizing your
                  learning and achievement.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Future-Ready Career Path
                </h2>
                <p className="mt-3 text-gray-600">
                  Enter the fast-evolving AI era by mastering Data Analytics
                  with AI through hands-on learning guided by leading.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Advanced Industry Curriculum
                </h2>
                <p className="mt-3 text-gray-600">
                  Access cutting-edge business analysis content, engaging
                  simulations, and practical evaluations. Focus on real-time
                  project implementation for hands-on mastery.
                </p>
              </div>

              {/* Box 5 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Project-Based Learning Model
                </h2>
                <p className="mt-3 text-gray-600">
                  Immerse yourself in hands-on projects covering data
                  fundamentals, AI-powered analytics, and intelligent workflow
                  design. Apply Python and modern AI tools to solve real-world
                  business challenges with confidence.
                </p>
              </div>

              {/* Box 6 */}
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">
                  Placement Opportunities
                </h2>
                <p className="mt-3 text-gray-600">
                  Receive revievvs, career coaching, and placement support to
                  land your dream role. (Eligibility: 70% attendance & overall
                  30% marks; offered by upDate)
                </p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-black-500 text-lg flex justify-center text-center italic">
            Certificate Eligibility: Minimum 70% overall attendance and 30% in
            the cumulative evaluation score.
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
