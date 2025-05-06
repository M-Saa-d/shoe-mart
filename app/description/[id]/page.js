"use client";
import React from "react";
import { products } from "@/app/components/productData";
import { useCart } from "@/app/components/context/CartContext";
import "@/app/custom-bootstrap.scss";
import "@/app/globals.css";
import { useParams } from "next/navigation";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found. Check the URL</p>;
  }

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price:
        typeof product.price === "string"
          ? parseFloat(product.price.replace(/[^\d.]/g, ""))
          : product.price,
      quantity: 1,
    };

    addItem(itemToAdd);

    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Slide,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="container" style={{ width: "80%" }}>
        <div
          className="card mt-5 p-4 d-flex flex-column flex-lg-row gap-4"
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(to top right, #ffe5b4, #ffd3c2)", // Matching warm pastel gradient
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
          }}
        >
          <img
            src={product.image}
            className="img-fluid"
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: "550px",
              objectFit: "contain",
              borderRadius: "20px",
            }}
          />
          <div className="mt-3 mt-md-5 text-bold">
            <h2>{product.name}</h2>
            <p
              className="text-muted"
              style={{ fontSize: "10px", fontWeight: "300" }}
            >
              {product.innerdescription}
            </p>
            <h4 className="text-bold">
              {typeof product.price === "string"
                ? product.price
                : `$${product.price.toFixed(2)}`}
            </h4>
            <button
              onClick={handleAddToCart}
              className="btn rounded-pill bg-primary text-white mt-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Toast container rendered once outside main content */}
      <ToastContainer />
    </>
  );
};

export default Page;
