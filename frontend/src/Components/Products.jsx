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
        await axios.post(
          `${API_URL}/api/v1/paymentVerification`,
          response
        );

        window.location.href = `/paymentSuccess?reference=${response.razorpay_payment_id}`;
      } catch (error) {
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
      <h2></h2>
      <h1 className="text-3xl font-bold text-center my-4">Products</h1>
      <div className="products-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} className="product-image" alt="" />
            <h3 className="product-title">{item.title}</h3>
            <p className="product-price">
              Price <strong>{item.price} /-</strong>
            </p>
            <button
              onClick={() => checkoutHandler(item.price)}
              className="pay-button"
            >
              Pay {item.price} /-
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
