import React from "react";
import Navbar from "./Navbar.js";
import champor from "./champor.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from "./footer.js";                







function Cartpage() {
	return(
  

  <>
  <Navbar/>
  <div className="container my-5">
      <h2>Cart</h2>
      <div className="table-responsive">
        <table className="table align-middle text-center border">
          <thead className="table-light">
            <tr>
              <th></th> 
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button className="btn btn-sm btn-outline-danger">×</button>
              </td>
              <td className="text-start">
                <div className="d-flex align-items-center">
                  <img
                    src={champor} // place image in public folder
                    alt="Dates"
                    width="60"
                    className="me-3"
                  />
                  <div>
                    <span className="text-success fw-bold">Champor - 1kg</span>
                    <div className="text-muted small">kg: 100gm</div>
                  </div>
                </div>
              </td>
              <td>₹470.00</td>
              <td>
                <input type="number" value="1" className="form-control w-50 mx-auto" />
              </td>
              <td>₹470.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Coupon and Update */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Coupon code" />
            <button className="btn " style={{background:"orange",borderRadius:"17px",borderStyle:"none",color:"black"}}>APPLY COUPON</button>
          </div>
        </div>
        <div className="col-md-6 text-md-end">
          <button className="btn "  style={{background:"orange",borderRadius:"17px",borderStyle:"none",color:"black"}}>UPDATE CART</button>
        </div>
      </div>

      {/* Cart Totals */}
      <div className="row justify-content-end">
        <div className="col-md-6">
          <div className="border p-4 rounded">
            <h5>Cart totals</h5>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>₹470.00</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <strong>Total</strong>
              <strong>₹470.00</strong>
            </div>
            <button className="btn  w-100 mt-4" style={{background:"orange",borderRadius:"17px",borderStyle:"none",color:"black"}} id="checkout">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
 

<Footer/> 
  </> 





		);
}

export default Cartpage;