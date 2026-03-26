import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import vilaku from "./vilaku.jpg";
import localforage from "localforage";

 
const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState(null);

  useEffect(() => {
    const loadCheckoutData = async () => {
      try {
        // ✅ Try to get data from localforage first (larger safe storage)
        const stored = await localforage.getItem("checkoutData");
        if (stored) {
          setCheckoutData(stored);
          return;
        }

        // ✅ Fallback: get from localStorage if not found in localforage
        const data = localStorage.getItem("checkoutData");
        if (data) {
          setCheckoutData(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error loading checkout data:", error);
      }
    };

    loadCheckoutData();
  }, []);

  if (!checkoutData) {
    return <div>Loading checkout details...</div>;
  }

   

  return (
  
    <>
    <Navbar/> 
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>

      <div className="row flex-column flex-md-row-reverse">
        {/* Order Summary First on Mobile */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="p-3 bg-light rounded">
            <h4>Order Summary</h4>
              {checkoutData.items.map((item) => (
              <div  className="d-flex align-items-center border-bottom py-3">
                <img src={item.imageBase64}    className="img-thumbnail me-3" style={{ width: '80px', height: '80px' }} />
                <div className="flex-grow-1">
                  <h6 className="mb-1">{item.title}</h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <span> </span>
                    <input
                       
                      min="1"
                     
                      className="form-control w-25 ms-3"
                       value={item.quantity}
                    />
                    <strong className="ms-3">
                      
                    </strong>
                  </div>
                  <div className="col-6 col-md-3">
            <p>Total: ${item.total} </p>
          </div>
                </div>
              </div>
          
))}
            {/* Coupon Code */}
            <div className="mt-3">
              <label>Coupon Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon"
                
                
              />
               
                <small className="text-success">Coupon applied: 10% off</small>
             
            </div>

            {/* Totals */}
            <hr />
            <div className="d-flex justify-content-between">
              <span>Subtotal:</span>
              <span> </span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Discount:</span>
              <span>- </span>
            </div>
            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total:${checkoutData.grandTotal}</span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Billing Form */}
        <div className="col-md-6">
          <h4>Billing Address</h4>
          <form>
             <div className="mb-3">
    <label>Name</label>
    <input type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label>Email</label>
    <input type="email" className="form-control"   />
  </div>
  <div className="mb-3">
    <label>Address</label>
    <input type="text" className="form-control"   />
  </div>
  <div className="mb-3">
    <label>City</label>
    <input type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label>Zip Code</label>
    <input type="text" className="form-control" />
  </div>

  {/* Payment Options */}
  <h5 className="mt-4">Payment Method</h5>
  <div className="form-check mb-2">
    <input
      className="form-check-input"
      type="radio" 
      name="paymentMethod"
      id="paypal"
      value="PayPal"
       
    />
    <label className="form-check-label" htmlFor="paypal">
      Pay with PayPal
    </label>
  </div>
  <div className="form-check mb-3">
    <input
      className="form-check-input"
      type="radio"
      name="paymentMethod"
      id="cod"
      value="Cash on Delivery"
     
    />
    <label className="form-check-label" htmlFor="cod">
      Cash on Delivery
    </label>
  </div>

  <button type="button" className="btn btn-primary w-100 mt-3"  >
    Pay Now
  </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default CheckoutPage;
