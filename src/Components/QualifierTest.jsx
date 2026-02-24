const QualifierTest = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 md:py-8 bg-[#FFFFFF]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-gray-900 mb-10 lg:mb-12">
          Qualifier Test Details
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[30%]">
            <img
              src="/Test.jpg"
              alt="Qualifier Test"
              className="rounded-3xl shadow-lg w-full h-[200px] sm:h-[300px] lg:h-[470px] object-cover hidden md:flex"
            />
            <img
              src="/Test1.jpg"
              alt="Qualifier Test"
              className="rounded-3xl shadow-lg w-full h-[200px] sm:h-[300px] lg:h-full object-cover flex md:hidden"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[70%] flex flex-col gap-6 lg:gap-8">
            {/* TOP BOX */}
            <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                1. Test Topics
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm sm:text-base list-disc md:pl-6 pl-4 space-y-0 marker:text-black marker:text-base">
                <li>Quantitative Aptitude</li>
                <li>Logical Reasoning</li>
                <li>Data Interpretation</li>
                <li>Verbal Ability</li>
              </ul>
            </div>

            {/* BOTTOM BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Registration */}
              <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  2. Registration Process
                </h3>

                <ul className="list-disc md:pl-6 pl-4">
                  <li className="text-gray-600 text-sm sm:text-base leading-relaxed marker:text-black marker:text-base">
                    Pay <span className="font-semibold text-gray-900">₹99</span>
                    and choose your preferred test slot.
                  </li>
                  <li>Unlock free mock test and practice before your final exam</li>
                </ul>
              </div>

              {/* Things to Remember */}
              <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 border border-gray-100 ">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  3. Things to Remember
                </h3>

                <ul className="text-gray-600 text-sm sm:text-base leading-relaxed list-disc md:pl-6 pl-4 space-y-0 marker:text-black marker:text-base">
                  <li>Test duration: 60 minutes</li>
                  <li>Unlock free mock test before final exam</li>
                  <li>Only one attempt allowed</li>
                  <li>Use desktop/laptop only</li>
                  <li>Supported browsers: Chrome, Safari, Edge, Firefox</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifierTest;
