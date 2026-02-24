import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import Mentors from "../Components/Mentors";
import Process from "../Components/Process";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import NewNavbar from "../Components/NewNavbar";
import CourseDetails from "../Components/CourseDetails";
import Learn from "../Components/Learn";
import Navbar from "../Components/Navbar";
import QualifierTest from "../Components/QualifierTest";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const whyRef = useRef(null);
  const learnRef = useRef(null);
  const instructorsRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);
  const qualifierRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      const sections = [
        { ref: whyRef, name: "why" },
        { ref: learnRef, name: "learn" },
        { ref: instructorsRef, name: "instructors" },
        { ref: processRef, name: "process" },
        { ref: qualifierRef, name: "qualifier" },
        { ref: contactRef, name: "contact" },
      ];

      let currentSection = "";

      sections.forEach((section) => {
        if (section.ref.current) {
          const top = section.ref.current.offsetTop;
          const height = section.ref.current.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.name;
          }
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100, // navbar height adjust
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isScrolled && (
        <NewNavbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          refs={{
            why: whyRef,
            learn: learnRef,
            instructors: instructorsRef,
            process: processRef,
            qualifier: qualifierRef,
            contact: contactRef,
          }}
        />
      )}

      <div className="bg-[#FFFFFF]">
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-[27px] lg:text-[38px] font-bold leading-tight text-gray-900 text-center md:text-left">
                Advanced Certification Program in Data Analytics with AI and Gen
                AI + Internship & Placement (100%)
              </h1>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start md:text-lg text-gray-700">
                  <span className="mr-3 mt-1 text-red-500">
                    <FontAwesomeIcon icon={faVideo} />
                  </span>
                  Learn from Top Industry experts like JP Morgen, Mckinsey &
                  Company, BCG, Jio and many more.
                </li>

                <li className="flex items-start md:text-lg text-gray-700">
                  <span className="mr-3 mt-1 text-red-500">
                    <FontAwesomeIcon icon={faRocket} className="rotate-320" />
                  </span>
                  Master Python, SQL, analytics, and modern AI + multi-agent
                  workflows-hands-on with Guaranted Internship
                </li>
              </ul>

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

              <p className="mt-10 text-gray-500 text-lg">
                <span className="font-bold text-gray-900">300+</span> students
                have already registered for Internship
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/raipur.jpg"
                alt="AI and ML Program"
                className="w-full rounded-4xl max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>
        </div>

        {/* -------- */}

        <div className="bg-white border-gray-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4">
            
            {/* Mobile View */}
            <div className="lg:hidden bg-gray-50 rounded-2xl shadow-sm p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[15px] font-semibold text-gray-900 tracking-wide">
                    Qualifier Test Date
                  </p>
                  <p className="text-[14px] font-bold text-red-500 mt-1">
                    February 15, 2026
                  </p>
                </div>

                <div>
                  <p className="text-[15px] font-semibold text-gray-900 tracking-wide">
                    Course Duration
                  </p>
                  <p className="text-[14px] font-bold text-red-500 mt-1">
                    3 Months (1+2)
                  </p>
                </div>

                <div>
                  <p className="text-[15px] font-semibold text-gray-900 tracking-wide">
                    Time Commitment
                  </p>
                  <p className="text-[14px] font-bold text-red-500 mt-1">
                    8–10 Hours / Week
                  </p>
                </div>

                <div>
                  <p className="text-[15px] font-semibold text-gray-900 tracking-wide">
                    Eligibility
                  </p>
                  <p className="text-[14px] font-bold text-red-500 mt-1">
                    12th Pass and Above
                  </p>
                </div>

                <div className="col-span-2">
                  <p className="text-[15px] font-semibold text-gray-900 tracking-wide">
                    Learning Mode
                  </p>
                  <p className="text-[14px] font-bold text-red-500 mt-1">
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:grid grid-cols-5 text-center divide-x divide-gray-200">
              <div className="py-4 px-2">
                <p className="text-[17px] font-semibold text-gray-900 tracking-wide">
                  Qualifier Test Date
                </p>
                <p className="text-base font-bold text-red-500 mt-1">
                  February 15, 2026
                </p>
              </div>

              <div className="py-4 px-2">
                <p className="text-[17px] font-semibold text-gray-900 tracking-wide">
                  Course Duration
                </p>
                <p className="text-base font-bold text-red-500 mt-1">
                  3 Months (1+2)
                </p>
              </div>

              <div className="py-4 px-2">
                <p className="text-[17px] font-semibold text-gray-900 tracking-wide">
                  Time Commitment
                </p>
                <p className="text-base font-bold text-red-500 mt-1">
                  8–10 Hours / Week
                </p>
              </div>

              <div className="py-4 px-2">
                <p className="text-[17px] font-semibold text-gray-900 tracking-wide">
                  Eligibility
                </p>
                <p className="text-base font-bold text-red-500 mt-1">
                  12th Pass and Above
                </p>
              </div>

              <div className="py-4 px-2">
                <p className="text-[17px] font-semibold text-gray-900 tracking-wide">
                  Learning Mode
                </p>
                <p className="text-base font-bold text-red-500 mt-1">Online</p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- */}
        <div ref={whyRef}>
          <CourseDetails />
        </div>

        {/* ----------- */}
        <div ref={learnRef}>
          <Learn />
        </div>

        {/* --------- */}

        {/* ----------- */}
        <div ref={instructorsRef}>
          <Mentors />
        </div>

        {/* ---------- */}
        <div ref={processRef}>
          <Process />
        </div>

        {/* ---------- */}
        <div ref={qualifierRef}>
          <QualifierTest />
        </div>

        {/* ---------- */}
        <div ref={contactRef}>
          <Contact />
        </div>

        {/* --------- */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
