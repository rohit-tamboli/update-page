import { instance } from "../server.js";
import crypto from "crypto";

export const processPayment = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

export const getKey = async (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_PAY,
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log(`Razorpay Signature, ${razorpay_signature}`);
  console.log(`Expected Signature, ${expectedSignature}`);

  // 🔥 YAHAN Temporarily ADD KARO LOGS
  console.log("Order ID:", razorpay_order_id);
  console.log("Payment ID:", razorpay_payment_id);
  console.log("Received Signature:", razorpay_signature);
  console.log("Expected Signature:", expectedSignature);

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    // return res.redirect(
    //   `http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`
    // );
    return res.status(200).json({
      success: true,
      message: "Payment Verified Successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Invalid Signature",
    });
  }
};
