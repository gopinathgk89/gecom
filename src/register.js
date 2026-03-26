
import Navabr from "./Navbar.js";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  

     
    
 
function Register() {
    const [user, setUser] = useState({ name: '', email: '', mobile: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8013/register", user);
    alert(res.data);
    if (res.data === "Registration successful") navigate("/login");
  };

	return( 

     <div style={{background:"lightgray"}}>
    
    <Navabr/>

   
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" style={{ width: '80px' }} />
          <h4 className="mt-2">Create Account</h4>
        </div>

        <form   onSubmit={handleSubmit} >
          <div className="mb-3">
             
            <label>Full Name</label>
            <input  type="text"  name="name"  onChange={handleChange} required className="form-control" placeholder="Enter your name" style={{borderColor:"blue"}} />
          </div>
           <div className="mb-3">
             
            <label>Enter Mobile number</label>
            <input type="text"  name="mobile" onChange={handleChange} required className="form-control" placeholder="Enter your name" style={{borderColor:"blue"}} />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input type="email" name="email" onChange={handleChange} required className="form-control" placeholder="Enter your email" style={{borderColor:"blue"}}/>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} required  minLength={6}  className="form-control" placeholder="Enter your password" style={{borderColor:"blue"}}/>
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn " style={{background:"orange",color:'white',borderRadius:"17px"}}>Register</button>
          </div>
   
        </form>
      </div>
    </div>




     </div>




		);
	
}

export default Register;