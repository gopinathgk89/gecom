import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "./api";


 
   
function AdminLogin() { 
   
      const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const res = await API.post("/admin/login", { adminName, adminPassword });
      if (res.data.token) {
        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin/dashboard");
      } else {
        setError("Invalid admin name or password");
      }
    } catch {
      setError("Server error");
    }
  };


  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Admin Login</h3>
         
        <form  onSubmit={handleLogin}>
          
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              
              placeholder="Enter username"
              
            required
             value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
               
              placeholder="Enter password"
               
            required
             value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" style={{borderRadius:'17px'}}>
              Login
            </button>
 
          </div>
        </form>
       {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
  