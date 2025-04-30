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
    <div>
      <h4
        className="mt-2 container text-italic"
        style={{ fontSize: "25px", fontWeight: "550" }}
      >
        Product List
      </h4>

      <div className="container d-flex justify-content-between mt-3 flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card-wrapper"
            style={{ flex: "0 0 auto" }}
          >
            <div
              className="card p-4 mt-4"
              style={{ width: "14rem", margin: "0 auto" }}
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
              <Link href={`/description/${product.id}`}>
                <h5
                  className="text-center mt-4 text-bold"
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  {product.name}
                </h5>
              </Link>
              <p
                className="text-center text-muted"
                style={{ fontSize: "10px", fontWeight: "300" }}
              >
                {product.description}
              </p>
              <p className="text-center">${product.price.toFixed(2)}</p>

              <button
                onClick={() => handleAddToCart(product)}
                className="btn rounded-pill bg-primary text-white"
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
ed