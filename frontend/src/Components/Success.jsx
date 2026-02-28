import React from "react";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you! Your payment has been processed successfully.
        </p>

        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Success;