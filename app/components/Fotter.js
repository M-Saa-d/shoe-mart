import React from "react";

const Fotter = () => {
  return (
    <div>
      <div
        className=" py-4 mt-5 text-white"
        style={{ background: "rgb(6, 22, 33)" }}
      >
        <div className="container ">
          <div className="row ">
            {/* About Us */}
            <div className="col-12 col-md-3 mb-3 ">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li style={{ fontSize: "13px", fontWeight: "400" }}>
                  We provide high-quality shoes for all your needs, from
                  athletic performance to casual comfort. Our mission is to
                  offer stylish, durable, and comfortable footwear for everyone.
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-3 mb-4">
              <h5>Quick Links</h5>
              <ul
                className="list-unstyled"
                style={{ fontSize: "13px", fontWeight: "400" }}
              >
                <li>Shop</li>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="col-12 col-md-3 mb-4">
              <h5>Customer Service</h5>
              <ul
                className="list-unstyled"
                style={{ fontSize: "13px", fontWeight: "400" }}
              >
                <li>FAQs</li>
                <li>Shipping Info</li>
                <li>Returns</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-12 col-md-3 mb-4">
              <h5>Contact Us</h5>
              <ul
                className="list-unstyled"
                style={{ fontSize: "13px", fontWeight: "400" }}
              >
                <li>Email: support@example.com</li>
                <li>Phone: +1 (800) 123-4567</li>
                <li>Live Chat</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center" style={{ fontSize: "12px" }}>
          © 2025 ShoeMart. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Fotter;
