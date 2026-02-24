import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 md:py-16 bg-[#FFFFFF]">
        <h1 className="text-2xl flex justify-center lg:text-4xl font-bold leading-tight text-gray-900">
          Contact Us
        </h1>

        <div className="max-w-6xl mx-auto md:pt-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center border border-gray-300">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-red-500 text-5xl"
              />
              <h2 className="md:text-2xl text-xl font-bold text-gray-900 mt-2">
                WhatsApp us
              </h2>
              <p className="mt-2 text-gray-900 leading-relaxed">
                For any queries, you can Whatsapp us at{" "}
                <span className="font-bold underline">
                  <a href="#">+91 8109718211</a>
                </span>
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center border border-gray-300">
              <FontAwesomeIcon
                icon={faEnvelopeRegular}
                className="text-red-500 text-5xl"
              />
              <h2 className="md:text-2xl text-xl font-bold text-gray-900 mt-2">
                Email us
              </h2>
              <p className="mt-2 text-gray-900 leading-relaxed">
                For any queries, you can contact us at
                <span className="font-bold underline">
                  {" "}
                  <a href="#">info@updats.in</a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1 */}
            <div
              className="bg-white pt-8 pb-4 px-4 rounded-2xl shadow-md hover:shadow-lg 
                transition duration-300 text-left border border-gray-300 relative"
            >
              {/* Small Top Right Box */}
              <div
                className="absolute top-0 right-0 bg-black text-white font-semibold
                  text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-tr-[10px] rounded-bl-[10px] shadow-sm"
              >
                11:00 am to 7:00 pm (Mon-Sat)
              </div>

              <h2 className="md:text-xl text-xl font-bold text-gray-900">
                Contact Person - 1
              </h2>

              <h2 className="md:text-xl text-lg mt-1 font-bold text-gray-900">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="text-gray-700 text-xl"
                />{" "}
                Sahil Kumar
              </h2>

              <p className="mt-1 text-gray-900">
                <a href="tel:+918109718211" className="hover:text-red-500">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-gray-600 text-lg"
                  />{" "}+91 8109718211
                </a>
              </p>

              <p className="mt-1 text-gray-900">
                <a href="mailto:info@updats.in" className="hover:text-red-500">
                  <FontAwesomeIcon icon={faEnvelopeSolid} className="text-gray-600 text-lg"/> {" "}info@updats.in 
                </a>
              </p>
            </div>

            {/*  */}
            <div
              className="bg-white pt-8 pb-4 px-4 rounded-2xl shadow-md hover:shadow-lg 
                transition duration-300 text-left border border-gray-300 relative"
            >
              {/* Small Top Right Box */}
              <div
                className="absolute top-0 right-0 bg-black text-white font-semibold
                  text-xs md:text-sm px-2 py-1 md:px-3 md:py-2 rounded-tr-[10px] rounded-bl-[10px] shadow-sm"
              >
                11:00 am to 7:00 pm (Mon-Sat)
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                Contact Person - 2
              </h2>

              <h2 className="md:text-xl text-lg mt-1 font-bold text-gray-900">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="text-gray-700 text-xl"
                /> {" "}
                Sahil Kumar
              </h2>

              <p className="mt-1 text-gray-900">
                <a href="tel:+918109718211" className="hover:text-red-500">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-gray-600 text-lg"
                  />{" "}
                  +91 8109718211
                </a>
              </p>

              <p className="mt-1 text-gray-900">
                <a href="mailto:info@updats.in" className="hover:text-red-500">
                  <FontAwesomeIcon icon={faEnvelopeSolid} className="text-gray-600 text-lg"/> {" "}info@updats.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
