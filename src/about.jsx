import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar.js';
import Footer from "./footer.js";
import shopl from './shopl.PNG';


const About = () => {
  return (
    <>
    <Navbar/>
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{color:'orange'}}>About Our Store</h1>
        <p className="text-muted mt-2">
          Trusted Online Shopping Destination
        </p>
      </div>

      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={shopl}
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="fw-bold mb-3" style={{color:'orange'}}>Who We Are</h3>
          <p className="text-muted">
            We are a customer-focused eCommerce platform committed to providing
            high-quality products at affordable prices. Our goal is to make
            online shopping simple, secure, and enjoyable for everyone.
          </p>
          <p className="text-muted">
            With a wide range of products and fast delivery, we ensure customer
            satisfaction at every step of the journey.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="row text-center mb-5">
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded h-100 shadow-sm">
            <h4 className="fw-bold mb-3" style={{color:'orange'}}>Our Mission</h4>
            <p className="text-muted">
              To deliver quality products with exceptional service while
              building long-term trust with our customers.
            </p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded h-100 shadow-sm">
            <h4 className="fw-bold mb-3" style={{color:'orange'}}>Our Vision</h4>
            <p className="text-muted">
              To become a leading eCommerce brand known for innovation,
              reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4" style={{color:'orange'}}>Why Choose Us</h3>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100 shadow-sm">
              <h5 className="fw-bold" style={{color:'orange'}}>Quality Products</h5>
              <p className="text-muted">
                Carefully selected products that meet high-quality standards.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100 shadow-sm">
              <h5 className="fw-bold" style={{color:'orange'}}>Secure Payments</h5>
              <p className="text-muted">
                100% secure payment gateway for safe transactions.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100 shadow-sm">
              <h5 className="fw-bold" style={{color:'orange'}}>Fast Delivery</h5>
              <p className="text-muted">
                Quick and reliable delivery across multiple locations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center  p-5 rounded shadow-sm" style={{background:'orange'}}>
        <h3 className="fw-bold mb-3" >Shop With Confidence</h3>
        <p className="text-muted mb-4">
          Join thousands of satisfied customers who trust us every day.
        </p>
        <button className="btn btn-dark px-4 py-2">
          Start Shopping
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
