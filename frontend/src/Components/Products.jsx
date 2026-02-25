import React from "react";
import "../styles/Products.css";

const Products = ({ products }) => {
  const checkoutHandler = async (amount) => {
    console.log(amount);
  };

  return (
    <>
      <h2></h2>
      <h1 class="text-3xl font-bold text-center my-4">
    Products
  </h1>
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
