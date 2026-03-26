import React, { useState } from 'react';
import './snavbar.css';
import { useNavigate } from "react-router-dom"; 

const Snavbar = () => {
  const [showFilter, setShowFilter] = useState(false);

   const user = JSON.parse(localStorage.getItem("user"));
   const navigate = useNavigate();

   const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="navbar" style={{background:"black",height:"50px"}}>
      <div className="navbar-content">
        <span className="hi-name">Hi,{user?.name}!</span>
        <button className="filter-btn" onClick={toggleFilter}>Filter</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div> 

      {showFilter && (
        <div className="filter-section">
          <div className="filter-option">
            <label htmlFor="category">Category:</label>
            <select id="category">
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
          </div>

          <div className="filter-option">
            <label htmlFor="price-range">Price Range:</label>
            <input type="range" id="price-range" min="0" max="500" step="10" />
            <span id="price-range-value">0</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Snavbar;
