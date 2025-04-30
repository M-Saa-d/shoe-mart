"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conassword, setConpassword] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Signed up successfully!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4 text-bold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={conassword}
              onChange={(e) => setConpassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className=" d-flex  align-items-center">
            <input type="checkbox"></input>
            <p className="mx-2 mt-3 ">I have read and acknowledged the T&Cs</p>
          </div>

          <button type="submit" className="btn btn-primary w-100 text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
