import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/bg1.png"; // Use your preferred background image

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password || !form.confirmPassword || !form.email) {
      setError("All fields are required.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Here you would send signup data to backend
    setSuccess(true);
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen pt-24"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Signup</h2>
        {success ? (
          <div className="text-center text-green-600">
            Signup successful! Redirecting to login...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2"
              required
            />
            {error && (
              <span className="text-red-500 text-sm text-center">{error}</span>
            )}
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600"
            >
              Signup
            </button>
          </form>
        )}
        <div className="mt-4 text-xs text-gray-500 text-center">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;