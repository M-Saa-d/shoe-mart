import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand" href="#">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <h3 className="text-primary">Shoe Mart</h3>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-collapse-init=""
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center active"
                  aria-current="page"
                  href="/"
                >
                  <i className="fas fa-home fa-lg my-2" />
                  <span className="small">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  href="/login"
                >
                  <i className="fas fa-user-friends fa-lg my-2" />
                  <span className="small">Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  href="/"
                >
                  <i className="fas fa-briefcase fa-lg my-2" />
                  <span className="small">Products</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  href="/signup"
                >
                  <i className="fas fa-comment-dots fa-lg my-2" />
                  <span className="small">Sign Up</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex flex-column text-center"
                  aria-current="page"
                  href="/cart"
                >
                  <i className="fas fa-bell fa-lg my-2" />
                  <span className="small">Cart</span>
                </a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
