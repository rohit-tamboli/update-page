import React from "react";

const Process = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 md:py-16 py-8 bg-[#FFFFFF]">
        <h1 className="text-2xl flex justify-center lg:text-4xl font-bold leading-tight text-gray-900">
          Admission Process
        </h1>

        <div className="max-w-5xl mx-auto ">
          <div className="hidden md:flex items-center justify-center px-6 py-12">
            {/* Circle 1 */}
            <div className="w-20 h-20 rounded-full bg-red-300 flex items-center justify-center text-white font-bold shadow-md">
              1
            </div>

            {/* Line */}
            <div className="w-72 border-t-2 border-dashed border-gray-400"></div>

            {/* Circle 2 */}
            <div className="w-20 h-20 rounded-full bg-red-300 flex items-center justify-center text-white font-bold shadow-md">
              2
            </div>

            {/* Line */}
            <div className="w-72 border-t-2 border-dashed border-gray-400"></div>

            {/* Circle 3 */}
            <div className="w-20 h-20 rounded-full bg-red-300 flex items-center justify-center text-white font-bold shadow-md">
              3
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-1 md:py-12 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-4xl shadow-md p-6 flex flex-col gap-2 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold text-gray-900">
                Clear Qualifier Test
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Clear the qualifier test to be eligible for the program
              </p>

              <img
                src="/test.png"
                alt="AI Program"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-4xl shadow-md p-6 flex flex-col gap-2 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold text-gray-900">
                Complete Counselling
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Only shortlisted candidates go through the counselling process
              </p>

              <img
                src="/Counselling.png"
                alt="Advanced ML"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-4xl shadow-md p-6 flex flex-col gap-2 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold text-gray-900">
                Start Learning
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Learn from India's top educators and stand out from the crowd
              </p>

              <img
                src="/Learning.png"
                alt="Generative AI"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
