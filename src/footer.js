import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Footer() {

  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const res = await axios.get("http://localhost:8013/api/links");
      setLinks(res.data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8013/api/settings')
      .then(response => {
        setAddress(response.data.address);
        setEmail(response.data.email);
        setMobile(response.data.mobile);
      })
      .catch(error => {
        console.error('Error fetching settings:', error);
      });
  }, []);

  // latest social link
  const latest = links[links.length - 1] || {};

  return (
    <footer className="text-white pt-4 pb-3 mt-5" style={{ background: "orange" }}>
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Ecommerce</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>{address}</p>
            <p><i className="bi bi-telephone-fill me-2"></i>{mobile}</p>
            <p><i className="bi bi-envelope-fill me-2"></i>{email}</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/shop" className="text-white text-decoration-none">Shop</Link></li>
              <li><Link to="/terms" className="text-white text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex gap-3">

              <a
                href={latest.instagram || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href={latest.facebook || "https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href={latest.whatsapp || "https://wa.me"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-youtube"></i>
              </a>

            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Arness Soft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
