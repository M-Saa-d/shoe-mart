"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreedToTerms) {
      toast.error("You must agree to the Terms & Conditions.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong!");
      } else {
        toast.success("Signup successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          number: "",
        });
        setAgreedToTerms(false);
      }
    } catch (error) {
      toast.error("Error connecting to server.");
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
        <h2 className="text-center mb-4 fw-bold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-check mb-3 d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              id="termsCheckbox"
              required
            />
            <label className="form-check-label mx-2" htmlFor="termsCheckbox">
              I have read and acknowledged the T&Cs
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100 text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
