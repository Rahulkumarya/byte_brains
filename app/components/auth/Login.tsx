// components/Login.js
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.email || !formData.password) {
      toast.error("Both email and password are required!", { position: "top-right", autoClose: 3000 });
      return;
    }

    // Simulate successful login
    toast.success("Login successful!", { position: "top-right", autoClose: 3000 });

    // Clear form after successful login
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
