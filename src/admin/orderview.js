import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import AdminNavbar from "./navbar.js";
import Sidebar from "./sidebar.js";

function OrderView() {
  const printRef = useRef();

  const handlePrint = () => {
    if (!printRef.current) return;
    const printContent = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // reload React app to restore
  };

  return (
    <>
    <AdminNavbar/> 
    <Sidebar/>

    <div className="container mt-4" style={{marginLeft:'260px'}}>
      <h2>Order Details</h2>
      <Card ref={printRef} className="p-4">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Mobile:</strong> 9876543210</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Address:</strong> 123, Elm Street</p>
        <p><strong>Product Name:</strong> Product A</p>
        <p><strong>Quantity:</strong> 2</p>
        <p><strong>Last:</strong> 2025-08-08</p>
      </Card>

      <Button className="mt-3" onClick={handlePrint}>
        Print
      </Button>
    </div>
    </>
  );
}

export default OrderView;
