import React  from 'react';
import champor from "./champor.jpg";
import agarbathi from "./agarbathi.jpg";
import vilaku from "./vilaku.jpg";
import './App.css';

  



function Trendingproducts() {
  return (
    <> 
      <center>  
        <h3 
          style={{    
            marginTop: "60px",
            display: "inline-block",
            borderBottom: "4px solid orange",
            paddingBottom: "5px",
            color: "#333",
          }} 
        >Trending products </h3>
        </center> 
      
      <div className="container-fluid" style={{marginTop:"46px"}}>
      <div className="row gx-4">
        {/* Repeat this column for each product */} 
        <div className="col-lg-3 col-sm-6 mb-4 ">
          <div className="card product-card bg-white border-white shadow-sm text-center">
            <img src={champor} className="card-img-top product-img" alt="Organic Rice" />
            <div className="card-body">
              <h5 className="card-title">Organic Rice</h5>
              <p className="card-text">₹100 - 1kg</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-warning btn-sm">Buy Now</button>
                <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card product-card bg-white border-white shadow-sm text-center">
            <img src={agarbathi} className="card-img-top product-img" alt="Herbal Tea" />
            <div className="card-body">
              <h5 className="card-title">Herbal Tea</h5>
              <p className="card-text">₹80 - 250g</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-warning btn-sm">Buy Now</button>
                <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card product-card bg-white border-white shadow-sm text-center">
            <img src={vilaku} className="card-img-top product-img" alt="Wood Oil" />
            <div className="card-body">
              <h5 className="card-title">Wood Pressed Oil</h5>
              <p className="card-text">₹150 - 500ml</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-warning btn-sm">Buy Now</button>
                <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card product-card bg-white border-white shadow-sm text-center">
            <img src={agarbathi} className="card-img-top product-img" alt="Honey" />
            <div className="card-body">
              <h5 className="card-title">Natural Honey</h5>
              <p className="card-text">₹120 - 200ml</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-warning btn-sm">Buy Now</button>
                <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

         <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card product-card bg-white border-white shadow-sm text-center">
            <img src={agarbathi} className="card-img-top product-img" alt="Honey" />
            <div className="card-body">
              <h5 className="card-title">Natural Honey</h5>
              <p className="card-text">₹120 - 200ml</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-warning btn-sm">Buy Now</button>
                <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>


        {/* Product 3 */}
        <div className="col-lg-3 col-sm-6 mb-4">
          <div className="card product-card bg-white border-white shadow-sm text-center">
            <img src={vilaku} className="card-img-top product-img" alt="Wood Oil" />
            <div className="card-body">
              <h5 className="card-title">Wood Pressed Oil</h5>
              <p className="card-text">₹150 - 500ml</p>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-warning btn-sm">Buy Now</button>
                <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Add more if needed */}
      </div>
    
      </div>
    </> 
  );
}

export default Trendingproducts;
