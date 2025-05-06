"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/app/components/productData";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setFilteredProducts([]);
      return;
    }

    const matches = products.filter((product) =>
      product.name.toLowerCase().startsWith(query)
    );

    setFilteredProducts(matches);
  }, [searchQuery]);

  const handleCardClick = (id) => {
    setSearchQuery("");
    setFilteredProducts([]);
    router.push(`/description/${id}`);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          background: "linear-gradient(to right, #FF6F61, #FFB700)",
          padding: "10px 0",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <i className="fab fa-linkedin fa-2x text-white" />
            <h3 className="text-white ms-2 mt-1">Shoe Mart</h3>
          </a>

          <div className="d-flex align-items-center">
            <ul className="navbar-nav d-flex mb-3">
              {[
                { icon: "fas fa-home", label: "Home", link: "/" },
                { icon: "fas fa-user-friends", label: "Login", link: "/login" },
                { icon: "fas fa-briefcase", label: "Products", link: "/" },
                {
                  icon: "fas fa-comment-dots",
                  label: "Sign Up",
                  link: "/signup",
                },
                { icon: "fas fa-bell", label: "Cart", link: "/cart" },
              ].map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <a
                    className="nav-link d-flex flex-column text-center text-white"
                    href={item.link}
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFDA61")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    <i className={`${item.icon} fa-lg my-2`} />
                    <span className="small">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Search bar */}
            <form
              className="d-flex ms-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  maxWidth: "160px",
                  transition: "max-width 0.3s ease",
                }}
              />
              <button
                className="btn btn-outline-primary btn-sm"
                type="submit"
                style={{
                  backgroundColor: "#FFDA61",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FFB700")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FFDA61")
                }
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Search Results */}
      {filteredProducts.length > 0 && (
        <div
          className="container mt-5 pt-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card p-3 position-relative"
              style={{
                cursor: "pointer",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                background: "linear-gradient(to top right, #ffe5b4, #ffd3c2)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "350px",
              }}
              onClick={() => handleCardClick(product.id)}
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
                  height: "180px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
              <h6 className="mt-3 text-center">{product.name}</h6>
              <p
                className="text-center text-muted"
                style={{ fontSize: "12px", minHeight: "40px" }}
              >
                {product.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
