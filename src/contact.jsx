import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar.js';
import Footer from "./footer.js";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{color:'orange'}}>Contact Us</h1>
        <p className="text-muted mt-2">
          We’re here to help. Get in touch with us anytime.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4 className="fw-bold mb-4">Get In Touch</h4>

            <p className="text-muted mb-3">
              Have questions about our products, orders, or services?  
              Our support team is always ready to assist you.
            </p>

            <div className="mb-3">
              <strong>📍 Address</strong>
              <p className="text-muted mb-0">
                123, Main Street, Your City, India
              </p>
            </div>

            <div className="mb-3">
              <strong>📞 Phone</strong>
              <p className="text-muted mb-0">+91 90000 00000</p>
            </div>

            <div className="mb-3">
              <strong>✉️ Email</strong>
              <p className="text-muted mb-0">support@yourstore.com</p>
            </div>

            <div className="mt-4">
              <strong>🕒 Working Hours</strong>
              <p className="text-muted mb-0">
                Monday – Saturday: 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4 className="fw-bold mb-4">Send Us a Message</h4>

            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark px-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-5">
        <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=India&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
