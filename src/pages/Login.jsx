import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/bg1.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) dispatch(clearError());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  // Redirect if already logged in
  if (isAuthenticated) {
    navigate("/");
    return null;
  }

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
        <h1 className="text-2xl font-bold mb-2 text-center text-green-600">
          Welcome to Flavoro Foods
        </h1>
        <h2 className="text-xl font-bold mb-6 text-center">Login</h2>
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
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
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
            Login
          </button>
        </form>
        <div className="mt-4 text-xs text-gray-500 text-center flex flex-col gap-2">
          <span>
            Don't have an account?{" "}
            <a
              href="#"
              className="hover:underline text-blue-600"
              onClick={() => navigate("/signup")}
            >
              Signup
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;