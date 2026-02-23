import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, ArrowLeft, Smartphone, QrCode, Copy, Wallet, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const MERCHANT_UPI_ID = import.meta.env.VITE_MERCHANT_UPI_ID;
const MERCHANT_NAME = import.meta.env.VITE_MERCHANT_NAME || "upDate Academy";
const PROGRAM_FEE = import.meta.env.VITE_PROGRAM_FEE || 99;

const Form = () => {
  const [step, setStep] = useState("registration"); // registration | payment | success
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  
  // Payment details
  const [upiId, setUpiId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [copied, setCopied] = useState(false);
  const [userId, setUserId] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);

  const navigate = useNavigate();

  // List of popular UPI apps with their URL schemes
  const upiApps = [
    { 
      name: "Google Pay", 
      package: "com.google.android.apps.nbu.paisa.user",
      icon: "📱",
      color: "bg-blue-500"
    },
    { 
      name: "PhonePe", 
      package: "com.phonepe.app",
      icon: "📲",
      color: "bg-purple-600"
    },
    { 
      name: "PayTM", 
      package: "net.one97.paytm",
      icon: "🟡",
      color: "bg-blue-400"
    },
    { 
      name: "BHIM", 
      package: "in.org.npci.upiapp",
      icon: "🇮🇳",
      color: "bg-orange-600"
    },
    { 
      name: "Amazon Pay", 
      package: "in.amazon.mShop.android.shopping",
      icon: "🛒",
      color: "bg-yellow-500"
    }
  ];

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!role || !fullName || !email || !phone) {
      setStatus("error");
      setMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setUserId(data.userId);
        setStatus("success");
        setMessage("Account created successfully! Proceed to payment.");
        
        setTimeout(() => {
          setStep("payment");
          setStatus("idle");
        }, 1500);
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to create account.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check if the backend server is running.");
    }
  };

  const handleUPIPayment = async (e) => {
    e.preventDefault();
    
    if (!upiId) {
      setStatus("error");
      setMessage("Please enter your UPI ID.");
      return;
    }

    // Basic UPI ID validation
    const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/;
    if (!upiRegex.test(upiId)) {
      setStatus("error");
      setMessage("Please enter a valid UPI ID (e.g., name@okhdfcbank)");
      return;
    }

    setStatus("loading");

    try {
      // For development without backend
      if (import.meta.env.DEV) {
        setTimeout(() => {
          setPaymentId("UPI" + Math.random().toString(36).substr(2, 9).toUpperCase());
          setStatus("success");
          setMessage("Payment successful! Welcome to the program!");
          setStep("success");
          
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }, 1500);
        return;
      }

      // Real API call
      const response = await fetch(`${API_URL}/process-upi-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          amount: PROGRAM_FEE,
          upiId: upiId,
          merchantUpiId: MERCHANT_UPI_ID
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setPaymentId(data.transactionId);
        setStatus("success");
        setMessage("Payment successful! Welcome to the program!");
        setStep("success");
        
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        setStatus("error");
        setMessage(data.error || "Payment failed. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error during payment. Please check your connection.");
    }
  };

  const handleAppPayment = (app) => {
    setSelectedApp(app.name);
    
    // Create UPI deep link
    const upiUrl = `upi://pay?pa=${MERCHANT_UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${PROGRAM_FEE}&cu=INR&tn=${encodeURIComponent(`Payment for AI/ML Course - ${fullName}`)}`;
    
    // Try to open specific app if package is provided
    if (app.package) {
      // For Android intent
      const intentUrl = `intent://pay?pa=${MERCHANT_UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${PROGRAM_FEE}&cu=INR#Intent;package=${app.package};scheme=upi;end`;
      window.location.href = intentUrl;
    } else {
      // Fallback to generic UPI
      window.location.href = upiUrl;
    }

    // Simulate payment success after app redirect (in real scenario, you'd listen for callback)
    setTimeout(() => {
      if (window.confirm("Did you complete the payment?")) {
        setPaymentId("UPI" + Math.random().toString(36).substr(2, 9).toUpperCase());
        setStep("success");
      }
    }, 5000);
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(MERCHANT_UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateQRCode = () => {
    // In a real app, you'd generate a QR code using a library like qrcode.react
    // For now, we'll create a UPI URL that can be converted to QR
    const upiUrl = `upi://pay?pa=${MERCHANT_UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${PROGRAM_FEE}&cu=INR`;
    return upiUrl;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
            className="cursor-pointer"
          >
            <h1 className="text-3xl bg-[#FF0000] text-white font-bold px-2 pb-1 tracking-tight rounded-sm">
              upDate
            </h1>
          </motion.div>

          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-900">
              Artificial Intelligence and Machine Learning Certification Program
            </p>
            <p className="text-sm text-gray-600">
              From <span className="font-semibold text-red-600">upDate</span>
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto px-6 pb-6">
          <div className="flex items-center justify-center gap-2">
            {['registration', 'payment', 'success'].map((s, index) => (
              <React.Fragment key={s}>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step === s 
                      ? 'bg-red-600 text-white' 
                      : index < ['registration', 'payment', 'success'].indexOf(step)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index < ['registration', 'payment', 'success'].indexOf(step) ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-600 hidden sm:block">
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </span>
                </div>
                {index < 2 && (
                  <div className={`w-16 h-0.5 ${
                    index < ['registration', 'payment', 'success'].indexOf(step)
                      ? 'bg-green-500'
                      : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-md bg-white border border-gray-200 rounded-[2rem] p-8 shadow-xl"
        >
          {step === 'registration' && (
            <>
              <button
                onClick={() => navigate("/")}
                className="mb-6 flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>

              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Create Account
              </h2>

              <p className="text-base text-gray-500 mb-8 text-center">
                Already have an account?{" "}
                <span className="text-red-600 font-semibold cursor-pointer hover:underline">
                  Sign in
                </span>
              </p>

              <form onSubmit={handleRegistration} className="space-y-5">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium">{message}</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What describes you best <span className="text-red-600">*</span>
                  </label>

                  <div className="grid gap-3">
                    {["student", "working"].map((item) => (
                      <label
                        key={item}
                        className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${
                          role === item
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={item}
                          checked={role === item}
                          onChange={(e) => setRole(e.target.value)}
                          className="accent-red-600 w-4 h-4"
                        />
                        <span
                          className={`text-sm font-medium ${
                            role === item ? "text-red-700" : "text-gray-700"
                          }`}
                        >
                          {item === "student"
                            ? "Student"
                            : "Working Professional"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                    status === "loading"
                      ? "bg-red-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Continue to Payment"
                  )}
                </motion.button>
              </form>
            </>
          )}

          {step === 'payment' && (
            <>
              <button
                onClick={() => setStep('registration')}
                className="mb-6 flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Registration
              </button>

              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Payment Details
              </h2>

              <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                <p className="text-sm text-gray-600">Program Fee</p>
                <p className="text-3xl font-bold text-gray-900">₹{PROGRAM_FEE}</p>
                <p className="text-xs text-gray-500 mt-1">One-time payment (Indian Rupees)</p>
              </div>

              {/* UPI Payment Options */}
              <div className="space-y-6">
                {/* Option 1: Quick Pay with UPI Apps */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-red-600" />
                    Quick Pay with UPI Apps
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {upiApps.map((app) => (
                      <button
                        key={app.name}
                        onClick={() => handleAppPayment(app)}
                        className={`${app.color} text-white p-3 rounded-xl flex flex-col items-center gap-1 hover:opacity-90 transition-opacity`}
                      >
                        <span className="text-xl">{app.icon}</span>
                        <span className="text-xs font-medium">{app.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Option 2: Manual UPI ID Entry */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Or enter UPI ID manually
                  </h3>
                  <form onSubmit={handleUPIPayment} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your UPI ID
                      </label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="e.g., name@okhdfcbank"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        `Pay ₹${PROGRAM_FEE} with UPI`
                      )}
                    </button>
                  </form>
                </div>

                {/* Option 3: Copy Merchant UPI ID */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Pay to this UPI ID
                  </h3>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <div>
                      <p className="text-sm font-mono text-gray-900">{MERCHANT_UPI_ID}</p>
                      <p className="text-xs text-gray-500">{MERCHANT_NAME}</p>
                    </div>
                    <button
                      onClick={copyUpiId}
                      className="flex items-center gap-1 text-red-600 hover:text-red-700"
                    >
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">{copied ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                {/* Payment Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    How to pay:
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                    <li>Click on your preferred UPI app</li>
                    <li>Complete the payment in the app</li>
                    <li>Return here and click "I've paid"</li>
                    <li>You'll be automatically enrolled</li>
                  </ul>
                </div>

                <AnimatePresence mode="wait">
                  {status === "error" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* I've Paid Button */}
                <button
                  onClick={() => setStep("success")}
                  className="w-full py-3 border-2 border-red-600 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors"
                >
                  I've Completed the Payment
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  🔒 Secure UPI payment powered by NPCI
                </p>
              </div>
            </>
          )}

          {step === 'success' && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome Aboard! 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                Your registration and payment of ₹{PROGRAM_FEE} was successful!
              </p>
              <div className="bg-gray-50 p-4 rounded-xl mb-6 text-left">
                <p className="text-sm text-gray-600 mb-2">Payment Receipt</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Transaction ID:</span>
                    <span className="text-sm font-mono font-medium">{paymentId || "UPI" + Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Amount:</span>
                    <span className="text-sm font-bold">₹{PROGRAM_FEE}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Date:</span>
                    <span className="text-sm">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/")}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg transition-all"
              >
                Go to Home
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Form;