"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong!");
      } else {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful!");
        window.location.href = "/dashboard"; // Redirect to dashboard
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          background: "linear-gradient(to top right, #ffe5b4, #ffd3c2)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
        }}
      >
        <h2 className="text-center mb-4 fw-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex align-items-center">
            <input type="checkbox"></input>
            <p className="mx-2 mt-3">I have read and acknowledged the T&Cs</p>
          </div>
          <button type="submit" className="btn btn-primary w-100 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
