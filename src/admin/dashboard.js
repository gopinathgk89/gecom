import React from "react";
import AdminNavbar from "./navbar.js";
import Sidebar from "./sidebar.js";
import 'bootstrap/dist/css/bootstrap.min.css';

  
function Dashboard() {


   const dashboardStyle = {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '30px',
    marginLeft:'230px'

  };

  const cardStyle = {
    border: '1px solid #dee2e6',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '18px',
    color: '#6c757d',
    marginBottom: '10px'
  };

  const valueStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#343a40'
  };
   
   
 
  return ( 
    <>
    <AdminNavbar/>
    <Sidebar />  




    <div style={dashboardStyle}>
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div style={cardStyle}>
              <div style={titleStyle}>Total Users</div>
              <div style={valueStyle}>1,200</div>
            </div>
          </div>
          <div className="col-md-4">
            <div style={cardStyle}>
              <div style={titleStyle}>Today Orders</div>
              <div style={valueStyle}>$50,000</div>
            </div>
          </div>
          <div className="col-md-4">
            <div style={cardStyle}>
              <div style={titleStyle}>Today's Revenue</div>
              <div style={valueStyle}>$1,200</div>
            </div>
          </div>

          {/* ➕ Add more cards as needed */}
          <div className="col-md-4">
            <div style={cardStyle}>
              <div style={titleStyle}>Total Revunue</div>
              <div style={valueStyle}>300</div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    </>
  );
}

export default Dashboard;
