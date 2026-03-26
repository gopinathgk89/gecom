import AdminNavbar from "./navbar.js";
import Sidebar from "./sidebar.js";
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AdminUpdateCard() { 

  const [adminId, setAdminId] = useState("");   // ✅ FIXED
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");   // ✅ FIXED

  const handleUpdate = async (e) => {
    e.preventDefault(); // ✅ prevent refresh

    try {
      const res = await axios.put(
        `http://localhost:8011/api/admin/update/${adminId}`,
        {
          username,
          password
        }
      );

      setMessage("Updated successfully!");
      alert("Updated successfully!");
      console.log(res.data);

    } catch (err) {
      console.error(err);
      setMessage('Error updating admin!');
    }
  };

  return (
    <>
      <AdminNavbar/> 
      <Sidebar/>

      <div className="container mt-5 d-flex justify-content-center">
        <div className="card shadow" style={{ maxWidth: '400px', width: '100%' }}>
          
          <div className="card-header bg-primary text-white">
            <i className="bi bi-person-gear me-2"></i>
            Update Admin Credentials
          </div>

          <div className="card-body">
            <form onSubmit={handleUpdate}>

              {/* ✅ Admin ID */}
              <div className="mb-3">
                <label className="form-label">Admin ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={adminId}
                  onChange={e => setAdminId(e.target.value)}
                  placeholder="Enter admin ID"
                  required
                />
              </div>

              {/* ✅ Username */}
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>

              {/* ✅ Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                <i className="bi bi-save me-2"></i>Update
              </button>

              {/* ✅ Message show */}
              {message && <p className="mt-3 text-center">{message}</p>}

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUpdateCard;
