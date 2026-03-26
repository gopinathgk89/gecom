import React from "react";
import { Navbar, Container, Nav, Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
 


function AdminNavbar() {
    
      const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  }; 


  return (
    <Navbar  variant="dark" expand="lg" className="shadow-sm" style={{background:'orange',height:'70px'}}>
      <Container fluid>   
        {/* Logo */}  
        <Navbar.Brand href="/admin/dashboard" className="fw-bold">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          Admin Panel
        </Navbar.Brand>

        {/* Right Side */}
        <Nav className="ms-auto">
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-basic"
              className="border-0 bg-transparent"
            >
              <Image
                src="" 
                roundedCircle
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout} >Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
  