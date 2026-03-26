import React, { useState } from "react";
import { Nav } from "react-bootstrap";

function Sidebar() {
  const [openProducts, setOpenProducts] = useState(false);
  const [openMarketing, setOpenMarketing] = useState(false);

  const linkStyle = { color: "white", textDecoration: "none", display: "flex", alignItems: "center", padding: "8px 16px", cursor: "pointer" };
  const iconStyle = { marginRight: "10px", fontSize: "18px" };

  return ( 
    <div
      style={{
        width: "250px",
        backgroundColor: "orange",
        height: "100vh",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        paddingTop: "20px",
        overflowY: "auto",
      }}
    >
      <h4 className="text-center mb-4">Dashboard</h4>
      <Nav className="flex-column">
        {/* Dashboard */}
        <a href="/admin/dashboard" style={linkStyle}>
          <i className="bi bi-speedometer" style={iconStyle}></i> Dashboard
        </a>

         <a href="/admin/homesetting" style={linkStyle}>
          <i className="bi bi-gear" style={iconStyle}></i>Home Setting
        </a>


        <a href="/admin/banner" style={linkStyle}>
          <i className="bi bi-rocket-takeoff-fill me-3" style={iconStyle}></i>Banner Upload
        </a>


        {/* User Details */}
        <a href="/admin/users" style={linkStyle}>
          <i className="bi bi-people" style={iconStyle}></i> User Details
        </a>

         <a href="/admin/adminupdate" style={linkStyle}>
          <i className="bi bi-gear" style={iconStyle}></i> Setting
        </a>

        {/* Orders */}
        <a href="/admin/orderpage" style={linkStyle}>
          <i className="bi bi-basket3" style={iconStyle}></i> Orders
        </a>

          
        {/* Products Dropdown */}
        <div>
          <div
            onClick={() => setOpenProducts(!openProducts)}
            style={{ ...linkStyle, userSelect: "none" }}
          >
            <i className="bi bi-box-seam" style={iconStyle}></i> Products
            <i
              className={`bi ms-auto ${openProducts ? "bi-chevron-up" : "bi-chevron-down"}`}
              style={{ fontSize: "16px" }}
            ></i>
          </div>
          {openProducts && (
            <div style={{ paddingLeft: "30px", backgroundColor: "rgba(255,255,255,0.1)" }}>
              <a href="/admin/uploadproduct" style={linkStyle}>
                <i className="bi bi-upload" style={iconStyle}></i> Upload Products
              </a>
              <a href="viewproduct" style={linkStyle}>
                <i className="bi bi-eye" style={iconStyle}></i> View Products
              </a>
               <a href="addcategory" style={linkStyle}>
                <i className="bi bi-eye" style={iconStyle}></i> Add Category
              </a>
            </div>
          )}
        </div>

        {/* Marketing Dropdown */}
        <div>
          <div
            onClick={() => setOpenMarketing(!openMarketing)}
            style={{ ...linkStyle, userSelect: "none" }}
          >
            <i className="bi bi-megaphone" style={iconStyle}></i> Marketing
            <i
              className={`bi ms-auto ${openMarketing ? "bi-chevron-up" : "bi-chevron-down"}`}
              style={{ fontSize: "16px" }}
            ></i>
          </div>
          {openMarketing && (
            <div style={{ paddingLeft: "30px", backgroundColor: "rgba(255,255,255,0.1)" }}>
              <a href="/admin/coupon" style={linkStyle}>
                <i className="bi bi-ticket-perforated" style={iconStyle}></i> Create Coupon
              </a>
              <a href="/admin/socialmedia" style={linkStyle}>
                <i className="fas fa-share-alt me-2" style={{color:'white'}}></i> SocialMedia
              </a>
             </div>
          )}
        </div>
      </Nav>
    </div>
  );
}

export default Sidebar;
