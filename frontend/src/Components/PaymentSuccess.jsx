import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/PaymentSuccess.css";

const PaymentSuccess = () => {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");

  return (
    <div className="success-container">
      <div className="success-card">
        
        <div className="success-icon">✓</div>

        <h1 className="success-title">Payment Successful</h1>

        <p className="success-message">
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>

        {reference && (
          <div className="success-reference">
            <span>Reference ID</span>
            <strong>{reference}</strong>
          </div>
        )}

        <Link to="/" className="success-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;