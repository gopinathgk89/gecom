import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, NavLink, useLocation } from "react-router-dom"; 
import { useNavigate } from "react-router-dom"; 
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './index.css';
import { CartContext } from './CartContext';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar({ setSearchTerm }) {

  const [input, setInput] = useState('');
  const [marqueeText, setMarqueeText] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Search bar allowed pages
  const allowedPages = ["/", "/shop"];
  const showSearchBar = allowedPages.includes(location.pathname);

  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [categories, setCategories] = useState([]);
  const API_URL = "http://localhost:8013/api/categories";

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get(API_URL);
    setCategories(res.data);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [logoDataUrl, setLogoDataUrl] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8013/api/settings/logo', { responseType: 'blob' })
      .then(response => {
        if (response.data.size > 0) {
          const reader = new FileReader();
          reader.onloadend = () => setLogoDataUrl(reader.result);
          reader.readAsDataURL(response.data);
        }
      })
      .catch(() => setLogoDataUrl(''));
  }, []);

  const handleCartClick = () => {
    navigate('/cartapp', { state: { showCart: true } });
  };

  const handleSearch = () => {
    setSearchTerm(input);
  };

  return (
    <>
      <nav className="navbar" style={{ position: 'sticky', top: '0' }}>

        {logoDataUrl ? (
          <div className="navbar-brand">
            <img src={logoDataUrl} height="50" alt="logo" />
          </div>
        ) : (
          <span className="navbar-brand">No Logo</span>
        )}

        <div
          className={`nav-links ${isOpen ? "open" : ""}`}
          style={{ marginTop: "20px", marginLeft: '25px' }}
        >

          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>

          <div className="nav-item dropdown">
            <NavLink
              to="#"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: 'orange' }}
            >
              Category
            </NavLink>

            <ul className="dropdown-menu">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  style={{ cursor: 'pointer' }}
                  className="dropdown-item"
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {/* 🔍 SEARCH BAR – ONLY HOME & SHOP */}
          {showSearchBar && (
            <div className="container">
              <div
                className="d-flex"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  maxWidth: '500px',
                  margin: 'auto',
                }}
              >
                <span
                  className="input-group-text bg-white border-0"
                  style={{ padding: '10px 15px' }}
                >
                  <i className="bi bi-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search for products..."
                  style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  className="btn"
                  style={{
                    borderRadius: '0 17px 17px 0',
                    padding: '8px 20px',
                    background: 'orange',
                    color: 'white'
                  }}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          )}

        </div>

        {/* USER DROPDOWN */}
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="light"
            id="dropdown-user"
            className="border"
            style={{
              backgroundColor: 'transparent',
              color: 'orange',
              fontSize: '1.8rem',
              boxShadow: 'none',
            }}
            bsPrefix="custom-dropdown-toggle"
          >
            <i className="bi bi-person" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/register">Register</Dropdown.Item>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
          </Dropdown.Menu>

          <style type="text/css">
            {`
              .custom-dropdown-toggle::after {
                display: none !important;
              }
            `}
          </style>
        </Dropdown>

        {/* CART */}
        <div className="bicart">
          <div
            style={{
              fontSize: '27px',
              color: 'orange',
              padding: '10px',
              width: '60px',
              height: '60px',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <i className="bi bi-cart" onClick={handleCartClick}></i>
          </div>

          <span
            className="badge bg-danger"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              fontSize: '12px',
              borderRadius: '50%',
              padding: '6px 6px',
              cursor: 'pointer'
            }}
          >
            {totalItems}
          </span>
        </div>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'orange' }}
        >
          ☰
        </div>

      </nav>
    </>
  );
}

export default Navbar;
