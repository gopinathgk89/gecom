import React, { useState  } from 'react';
import Navbar from "./Navbar.js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
 

 
function Login() {
   
    const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = async e => { 
    e.preventDefault();
    const res = await axios.post("http://localhost:8012/login", loginData);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/shop");
    } else {
      alert("Invalid credentials");
    }
  };


	return(



  <div style={{backgroundColor:"lightgray"}}>

 
  <Navbar/>

   <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" style={{ width: '80px' }} />
          <h4 className="mt-2">Welcome Back</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email address</label>
            <input type="email"   name="email"  onChange={handleChange} required className="form-control" placeholder="Enter email"  style={{borderRadius:"17px",borderColor:"orange"}}/>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password"  onChange={handleChange} required   className="form-control" placeholder="Enter password"  style={{borderRadius:"17px",borderColor:"orange"}}/>
          </div>

          <div className="mb-3 text-end">
            <a href="#" className="text-decoration-none">Forgot Password?</a>
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn " style={{borderRadius:"17px",backgroundColor:"orange",color:"white"}}>Login</button>
          </div>

        
        </form>
      </div>
    </div>


  </div>


		);

}

export default Login;