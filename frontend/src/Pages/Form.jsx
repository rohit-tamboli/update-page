import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AUTH_AP = import.meta.env.VITE_AUTH_API || "http://localhost:8000";

const Form = () => {
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!role || !fullName || !email || !phone) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(`${AUTH_AP}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Account created successfully!");

        setTimeout(() => {
          navigate("/products"); // 🔥 new page
        }, 1500);
      } else {
        setStatus("error");
        setMessage(data.error || "Registration failed");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleRegistration} className="space-y-4">

          {status === "success" && (
            <div className="bg-green-100 text-green-700 p-3 rounded flex gap-2">
              <CheckCircle2 size={18} />
              {message}
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-100 text-red-700 p-3 rounded flex gap-2">
              <AlertCircle size={18} />
              {message}
            </div>
          )}

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            className="w-full p-3 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="working">Working Professional</option>
          </select>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 flex justify-center items-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Processing...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;