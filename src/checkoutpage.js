 import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import localforage from "localforage";

const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState(null);

  useEffect(() => {
    const loadCheckoutData = async () => {
      try {
        const stored = await localforage.getItem("checkoutData");
        if (stored) {
          setCheckoutData(stored);
          return;
        }

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
      <Navbar />
      <div className="container py-5">
        <h2 className="mb-4">Checkout</h2>

        <div className="row flex-column flex-md-row-reverse">

          {/* Order Summary */}
          <div className="col-md-6 mb-4">
            <div className="p-3 bg-light rounded">
              <h4>Order Summary</h4>

              {checkoutData.items.map((item) => (
                <div key={item.id} className="d-flex align-items-center border-bottom py-3">

                  <img
                    src={item.imageBase64}
                    alt={item.title}   // ✅ FIX
                    className="img-thumbnail me-3"
                    style={{ width: '80px', height: '80px' }}
                  />

                  <div className="flex-grow-1">
                    <h6>{item.title}</h6>

                    <input
                      className="form-control w-25"
                      value={item.quantity}
                      readOnly
                    />

                    <p className="mt-2">Total: ${item.total}</p>
                  </div>
                </div>
              ))}

              <hr />
              <h5>Total: ${checkoutData.grandTotal}</h5>
            </div>
          </div>

          {/* Billing */}
          <div className="col-md-6">
            <h4>Billing Address</h4>

            <form>
              <input className="form-control mb-2" placeholder="Name" />
              <input className="form-control mb-2" placeholder="Email" />
              <input className="form-control mb-2" placeholder="Address" />
              <input className="form-control mb-2" placeholder="City" />
              <input className="form-control mb-2" placeholder="Zip Code" />

              <h5 className="mt-3">Payment</h5>

              <div className="form-check">
                <input type="radio" name="payment" className="form-check-input" />
                <label className="form-check-label">PayPal</label>
              </div>

              <div className="form-check">
                <input type="radio" name="payment" className="form-check-input" />
                <label className="form-check-label">Cash on Delivery</label>
              </div>

              <button className="btn btn-primary w-100 mt-3">
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
