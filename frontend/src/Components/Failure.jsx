import React from "react";
import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Oops, something went wrong! ❌
        </h2>

        <p className="text-gray-600 mb-6">
          Your payment could not be processed. Please try again.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Failure;