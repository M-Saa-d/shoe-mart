"use client";
import React from "react";
import { useCart } from "@/app/components/context/CartContext";
import "@/app/custom-bootstrap.scss";
import Link from "next/link";
import { products } from "@/app/components/productData";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });

    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 1000,
      transition: Slide,
      theme: "colored",
    });
  };

  return (
    <div
      style={{
        paddingTop: "20px",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <h4
        className="mt-3 container text-italic"
        style={{
          fontSize: "25px",
          fontWeight: "550",
          color: "#333",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Product List
      </h4>

      <div
        className="container mt-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          background: "#ffffff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card-wrapper"
            style={{ padding: "10px" }}
          >
            <div
              className="card p-4"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "480px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                background: "linear-gradient(to top right, #ffe5b4, #ffd3c2)", // Matching warm pastel gradient
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />

              <Link href={`/description/${product.id}`} passHref>
                <h5
                  className="text-center mt-4"
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#333",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FFDA61")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
                >
                  {product.name}
                </h5>
              </Link>

              <p
                className="text-center"
                style={{
                  fontSize: "12px",
                  fontWeight: "300",
                  lineHeight: "1.4",
                  color: "#555",
                  minHeight: "40px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.description}
              </p>

              <p
                className="text-center"
                style={{ fontSize: "14px", fontWeight: "500" }}
              >
                ${product.price.toFixed(2)}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="btn rounded-pill text-white w-100"
                style={{
                  transition: "background-color 0.3s ease",
                  background: "#FFDA61",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#FFB700")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#FFDA61")
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductList;
