import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";
import Footer from "./footer.js";
import champor from "./champor.jpg";
 

function Billing(argument) {
	return(

<>
<Navbar/> 

<div className="container my-5">
      <h3 className="mb-4">Checkout</h3>
      <div className="row">
        {/* Left Form */}
        <div className="col-lg-7">
          <form>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name *</label>
                <input type="text" className="form-control" placeholder="Your First Name" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Mobile *</label>
                <input type="tel" className="form-control" placeholder="Mobile Number" />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
            </div>
            <div className="col-12 mb-3">
                <label className="form-label">Country *</label>
                <input type="text" className="form-control" placeholder="enter your Country" />
              </div>
            
             <div className="mb-4">
              <h5>Address</h5>
              <textarea
                className="form-control"
                placeholder="Notes about your order, e.g. special notes for delivery."
                rows="3"
              ></textarea>
            </div>

           

            <div className="mb-4">
              <h5>Payment</h5>
              <div className="border p-3 rounded mb-2">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="payment" id="paypal" />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="payment" id="card" />
                  <label className="form-check-label" htmlFor="card">
                    Credit / Debit Card
                  </label>
                </div>
              </div>
              <p className="small text-muted">
                All UPI apps, Debit and Credit Cards accepted | Powered by PayPal / Stripe
              </p>
            </div> 

            <button className="btn  w-100 fw-bold" style={{background:"orange",borderRadius:"17px",borderStyle:"none"}}>
              🛒 Place Order ₹470.00
            </button>
          </form>
        </div>

        {/* Right Summary */}
        <div className="col-lg-5 mt-5 mt-lg-0">
          <div className="border rounded p-3 bg-light">
            <div className="d-flex align-items-center mb-3">
              <img src={champor} alt="Dates" width="60" className="me-3" />
              <div>
                <div className="fw-bold">Dates - 1kg</div>
                <div className="text-muted small">kg: 100gm</div>
              </div>
              <div className="ms-auto fw-bold">₹470.00</div>
            </div>

            

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>₹470.00</span>
            </div>
            <div className="d-flex justify-content-between mt-2 fw-bold">
              <span>Total</span>
              <span>₹470.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>

</>



		);
}

export default Billing;