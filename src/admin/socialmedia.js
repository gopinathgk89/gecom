// src/App.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import Sidebar from "./sidebar"; 
import "bootstrap/dist/css/bootstrap.min.css";

function Socialmedia() {
  const [whatsapp, setWhatsapp] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [links, setLinks] = useState([]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLink = { whatsapp, facebook, instagram };
    await axios.post("http://localhost:8013/api/links", newLink);
     
    setWhatsapp("");
    setFacebook("");
    setInstagram("");
  };

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="container mt-5" style={{marginLeft:'260px',width:'900px'}}>
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center text-warning">Social Media Link Updater</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter WhatsApp Link:</label>
            <input
              type="text"
              className="form-control"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              placeholder="https://wa.me/..."
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Enter Facebook Link:</label>
            <input
              type="text"
              className="form-control"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              required
              placeholder="https://facebook.com/..."
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Enter Instagram Link:</label>
            <input
              type="text"
              className="form-control" 
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              required
              placeholder="https://instagram.com/..."
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-warning">
              Update
            </button>
          </div>
        </form>
      </div>

      
    </div>
    </>
  );
}

export default Socialmedia;
