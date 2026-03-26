import AdminNavbar from "./navbar.js";
import Sidebar from "./sidebar.js";
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function AdminUpdateCard() { 
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:8011/api/admin/update/${adminId}`, {
        username,
        password
      });
      alert('Updated successfully!'); 
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
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
               value={username} onChange={e => setUsername(e.target.value)}
                placeholder="Enter admin username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password} onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
              />
            </div>
            <button  onClick={handleUpdate} className="btn btn-success w-100">
              <i className="bi bi-save me-2"></i>Update
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default AdminUpdateCard



