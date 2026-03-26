
  import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import vilaku from "./vilaku.jpg";
import Navbar from './Navbar.js';
import hjju from "./hjju.png";
import { useContext } from 'react';
import { CartContext } from './CartContext';
import axios from 'axios';
import React from 'react';
import localforage from "localforage"; 

const CartApp = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

 const handleBuyNow = async () => {
  if (!cart || cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const checkoutData = {
    items: cart.map((item) => ({
      id: item.id,
      imageBase64: item.imageBase64,
      title: item.title,
      quantity: item.quantity,
      total: item.discountPrice * item.quantity,
    })),
    grandTotal: cart.reduce(
      (sum, item) => sum + item.discountPrice * item.quantity,
      0
    ),
  };

  try {
    // ✅ Use localforage for large data
    await localforage.setItem("checkoutData", checkoutData);
  } catch (error) {
    console.error("localforage save failed, fallback to localStorage:", error);
    // ⚠️ fallback if IndexedDB is unavailable
    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
  }

  // ✅ redirect to checkout page (same as before)
  setTimeout(() => {
    window.location.href = "/checkoutpage";
  }, 200);
};

  
  return (  
    <> 
    <Navbar/>
      
    <div className="container py-4">
    <center>
  <h4 className="mb-4">Cart</h4>
  </center>

  {cart.length > 0 ? (
    <>
      {/* Cart Items */}
      {cart.map((item) => (
        <div className="row align-items-center border-bottom" key={item.id}>
          <div className="col-3 col-md-2">
            <img src={item.imageBase64} alt={item.name} className="img-fluid rounded" />
          </div>
          <div className="col-9 col-md-4">
            <h6>{item.title}</h6>
            <p className="text-muted">€{item.discountPrice}</p>
          </div>
          <div className="col-3 col-md-2">
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-secondary"
                onClick={() => increaseQuantity(item.id)}
              >
                <i className="bi bi-plus"></i>
              </button>
              <span className="mx-3">{item.quantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => decreaseQuantity(item.id)}
              >
                <i className="bi bi-dash w-50"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-2 mt-3 mt-md-0 text-md-end">
            <p className="fw-semibold">Total: €{item.discountPrice * item.quantity}</p>
          </div>
          <div className="col-12 col-md-2 mt-3 mt-md-0 text-md-end">
             <i
      className="bi bi-trash"
      style={{ color: 'grey', fontSize: '1.5rem', cursor: 'pointer' }}
       onClick={() => removeFromCart(item.id)}
      title="Delete"
      aria-label="Delete"
    ></i>
          </div>
        </div>
      ))}

      {/* Grand Total and Buy Now */}
      <div className="row mt-4">
        <div className="col-12 col-md-2 text-md-end">
          <h5>
            Grand Total: €
            {cart.reduce((sum, item) => sum + item.discountPrice * item.quantity, 0)}
          </h5>
        </div>
        <div className="col-12 col-md-2 text-md-end">
          <button
            className="btn"
            style={{ borderRadius: '17px', background: 'orange', width: '200px' }}

            onClick={handleBuyNow}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  ) : (
    <div className="text-center py-5">
    <img src={hjju} />
      <h5>Your cart is empty.</h5>
    
    </div>
  )}
</div>

   
    </>
  );
};

export default CartApp;
