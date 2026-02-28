import React, { useState } from "react";
import "../paypal/paypal.css";
import axios from "axios";
import phonepe from "../../image/phonepe.png";

const Phonepe = () => {
  const [loading2, setLoading2] = useState(false);

  const data = {
    name: "Waleed",
    amount: 1,
    number: "7498608775",
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading2(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payment`,
        data
      );

      // 🔥 IMPORTANT LINE
      window.location.href = response.data.url;
    } catch (error) {
      console.error(error);
      setLoading2(false);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Complete Your Payment
          </h1>
          <p className="text-center text-sm md:text-xl text-gray-500 mb-10">
            Secure one-time access to the program
          </p>

          <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition duration-300">
            {/* Highlight Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-4 py-1 rounded-full shadow">
              Most Popular
            </span>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4 mt-4"></h3>

            {/* Price */}
            {/* <div className="text-center mb-6">
              <span className="text-4xl md:text-5xl font-bold text-gray-900">
                ₹99
              </span>
              <p className="text-sm text-gray-500 mt-2">
                One-time secure payment
              </p>
            </div> */}

            <div className="card px-5 py-4 mt-5">
              <form onSubmit={handlePayment}>
                {/* <div className="col-12 ">
                  <p className="fs-5">
                    <strong>Name:</strong> {data.name}
                  </p>
                </div>
                <div className="col-12 ">
                  <p className="fs-5">
                    <strong>Number:</strong> {data.number}
                  </p>
                </div>
                <div className="col-12 ">
                  <p className="fs-5">
                    <strong>Amount:</strong> {data.amount}Rs
                  </p>
                </div> */}
                <div className="text-center mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    ₹{data.amount}
                  </span>
                  <p className="text-sm text-gray-500 mt-2">
                    One-time secure payment
                  </p>
                </div>
                {!loading2 ? (
                  <div className="col-12 center">
                    <button className="w-full bg-red-300 hover:bg-red-400 text-white py-3 md:py-4 rounded-2xl text-lg font-semibold transition duration-200 shadow-lg hover:shadow-xl" type="submit">
                      Pay Now
                    </button>
                  </div>
                ) : (
                  <div className="col-12 center">
                    <button
                      className="w-full bg-red-300 hover:bg-red-400 text-white py-3 md:py-4 rounded-2xl text-lg font-semibold transition duration-200 shadow-lg hover:shadow-xl"
                      type="submit"
                    >
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden ">Wait...</span>
                      </div>
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Divider */}
            {/* <div className="h-px bg-gray-200 my-6"></div> */}

            {/* Features */}
            {/* <ul className="text-sm text-gray-600 space-y-2 mb-8">
              <li>✔ Lifetime Access</li>
              <li>✔ Certification Included</li>
              <li>✔ Hands-on Projects</li>
              <li>✔ Placement Assistance</li>
            </ul> */}

            {/* Button */}
            {/* <button className="w-full bg-red-300 hover:bg-red-400 text-white py-3 md:py-4 rounded-2xl text-lg font-semibold transition duration-200 shadow-lg hover:shadow-xl">
              Pay Now
            </button> */}

            {/* <p className="text-xs text-center text-gray-400 mt-4">
              🔒 100% Secure Payment • Powered by Razorpay
            </p> */}
          </div>
        </div>
      </div>

      {/* ---------- */}

      {/* <div className="main">
        <div className="center">
          <img width={300} src={phonepe} alt="" />
          <h2 className="fs-4 mt-2">
            <span className="text-danger fw-bold">LIVE</span> Payment
            Integration
          </h2>
        </div>

        <div className="card px-5 py-4 mt-5">
          <form onSubmit={handlePayment}>
            <div className="col-12 ">
              <p className="fs-5">
                <strong>Name:</strong> {data.name}
              </p>
            </div>
            <div className="col-12 ">
              <p className="fs-5">
                <strong>Number:</strong> {data.number}
              </p>
            </div>
            <div className="col-12 ">
              <p className="fs-5">
                <strong>Amount:</strong> {data.amount}Rs
              </p>
            </div>
            {!loading2 ? (
              <div className="col-12 center">
                <button className="w-100 " type="submit">
                  Pay Now
                </button>
              </div>
            ) : (
              <div className="col-12 center">
                <button className="w-100 text-center" type="submit">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden ">Wait...</span>
                  </div>
                </button>
              </div>
            )}
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Phonepe;
