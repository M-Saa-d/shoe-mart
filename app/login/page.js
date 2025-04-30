"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4 fw-bold">Login</h2>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input
              type="Password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className=" d-flex  align-items-center">
            <input type="checkbox"></input>
            <p className="mx-2 mt-3 ">I have read and acknowledged the T&Cs</p>
          </div>
          <button type="submit" className="btn btn-primary w-100 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
