import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import AdminNavbar from "./navbar.js";
import Sidebar from "./sidebar.js";

const initialOrders = [
  {
    id: 1,
    name: "John Doe",
    mobile: "9876543210",
    email: "john@example.com",  
    address: "123, Elm Street",
    productName: "Product A",
    quantity: 2,
    last: "2025-08-08",
  },
  {
    id: 2,
    name: "Jane Smith", 
    mobile: "9123456780",
    email: "jane@example.com",
    address: "456, Oak Avenue",
    productName: "Product B",
    quantity: 1,
    last: "2025-08-07",
  },
];

function OrderPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleView = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

  return (
    <>   
    <AdminNavbar/> 
    <Sidebar/>
    
    <div className="container mt-4" style={{marginLeft:'240px',width:'900px'}}>
      <h2>Orders</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Last</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center">
                No orders found.
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.mobile}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.last}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => handleView(order)}
                  >
                    View
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Modal for viewing order details */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder ? ( 
            <div>
              <p><strong>Name:</strong> {selectedOrder.name}</p>
              <p><strong>Mobile:</strong> {selectedOrder.mobile}</p>
              <p><strong>Email:</strong> {selectedOrder.email}</p>
              <p><strong>Address:</strong> {selectedOrder.address}</p>
              <p><strong>Product Name:</strong> {selectedOrder.productName}</p>
              <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
              <p><strong>Last:</strong> {selectedOrder.last}</p>
            </div>
          ) : (
            <p>No order selected</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default OrderPage;
