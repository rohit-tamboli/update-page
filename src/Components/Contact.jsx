import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 md:py-16 bg-[#FFFFFF]">
        <h1 className="text-2xl flex justify-center lg:text-4xl font-bold leading-tight text-gray-900">
          Contact Us
        </h1>

        <div className="max-w-6xl mx-auto pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center border border-gray-300">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-red-500 text-5xl"
              />
              <h2 className="text-2xl font-bold text-gray-900">WhatsApp us</h2>
              <p className="mt-4 text-gray-900 leading-relaxed">
                For any queries, you can Whatsapp us at{" "}
                <span className="font-bold underline">
                  <a href="#">+91 8109718211</a>
                </span>
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center border border-gray-300">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-red-500 text-5xl"
              />
              <h2 className="text-2xl font-bold text-gray-900">Email us</h2>
              <p className="mt-4 text-gray-900 leading-relaxed">
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
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg 
                transition duration-300 text-left border border-gray-300 relative"
            >
              {/* Small Top Right Box */}
              <div
                className="absolute top-0 right-0 bg-black text-white font-semibold
                  text-sm px-3 py-2 rounded-tr-[10px] rounded-bl-[10px] shadow-sm"
              >
                11:00 am to 7:00 pm (Mon-Sat)
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                Contact Person - 1
              </h2>

              <h2 className="text-xl mt-1 font-bold text-gray-900">
                Sahil Kumar
              </h2>

              <p className="mt-1 text-gray-900">
                <a href="tel:+918109718211" className="hover:text-red-500">
                  +91 8109718211
                </a>
              </p>

              <p className="mt-1 text-gray-900">
                <a href="mailto:info@updats.in" className="hover:text-red-500">
                  info@updats.in
                </a>
              </p>
            </div>

            {/*  */}
            <div
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg 
                transition duration-300 text-left border border-gray-300 relative"
            >
              {/* Small Top Right Box */}
              <div
                className="absolute top-0 right-0 bg-black text-white font-semibold
                  text-sm px-3 py-2 rounded-tr-[10px] rounded-bl-[10px] shadow-sm"
              >
                11:00 am to 7:00 pm (Mon-Sat)
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                Contact Person - 1
              </h2>

              <h2 className="text-xl mt-1 font-bold text-gray-900">
                Sahil Kumar
              </h2>

              <p className="mt-1 text-gray-900">
                <a href="tel:+918109718211" className="hover:text-red-500">
                  +91 8109718211
                </a>
              </p>

              <p className="mt-1 text-gray-900">
                <a href="mailto:info@updats.in" className="hover:text-red-500">
                  info@updats.in
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
