import React from "react";
import "../styles/Products.css";
import axios from "axios";

const Products = ({ products }) => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
  console.log("API_URL:", API_URL);

  const checkoutHandler = async (amount) => {
    const { data: keyData } = await axios.get(`${API_URL}/api/v1/getKey`);
    const { key } = keyData;

    const { data: orderData } = await axios.post(
      `${API_URL}/api/v1/payment/process`,
      {
        amount,
      }
    );
    const { order } = orderData;
    console.log(order);

    const options = {
      key,
      amount,
      currency: "INR",
      name: "upDt",
      description: "Testing Transaction",
      order_id: order.id,
      // callback_url: `${API_URL}/api/v1/paymentVerification`,
      handler: async function (response) {
        try {
          // Call backend verification
          const verificationResponse = await axios.post(
            `${API_URL}/api/v1/paymentVerification`,
            response
          );

          // Check if payment verification was successful
          if (verificationResponse.data.success) {
            window.location.href = `/paymentSuccess?reference=${response.razorpay_payment_id}`;
          } else {
            alert("Payment verification failed");
          }
        } catch (error) {
          console.log(
            "Verification Error:",
            error.response?.data || error.message
          );
          alert("Payment verification failed");
        }
      },
      prefill: {
        name: "upDt",
        email: "updt@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Complete Your Payment
          </h1>
          <p className="text-center text-sm md:text-xl text-gray-500 mb-10">
            Secure one-time access to the program
          </p>

          {products.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition duration-300"
            >
              {/* Highlight Badge */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-4 py-1 rounded-full shadow">
                Most Popular
              </span>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4 mt-4">
                {item.title}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">
                  ₹{item.price}
                </span>
                <p className="text-sm text-gray-500 mt-2">
                  One-time secure payment
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-6"></div>

              {/* Features */}
              <ul className="text-sm text-gray-600 space-y-2 mb-8">
                <li>✔ Lifetime Access</li>
                <li>✔ Certification Included</li>
                <li>✔ Hands-on Projects</li>
                <li>✔ Placement Assistance</li>
              </ul>

              {/* Button */}
              <button
                onClick={() => checkoutHandler(item.price)}
                className="w-full bg-red-300 hover:bg-red-400 text-white py-3 md:py-4 rounded-2xl text-lg font-semibold transition duration-200 shadow-lg hover:shadow-xl"
              >
                Pay Now
              </button>

              <p className="text-xs text-center text-gray-400 mt-4">
                🔒 100% Secure Payment • Powered by Razorpay
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
