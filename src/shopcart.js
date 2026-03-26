import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar.js';
import Footer from './footer.js';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './shopcart.css';

import agarbathi from "./agarbathi.jpg";
import vilaku from "./vilaku.jpg";
import { CartContext } from './CartContext';

function Shopcart() { 
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const [links, setLinks] = useState([]);
  const { id } = useParams();

  // Fetch product by ID
  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8013/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // Fetch share links
  const fetchLinks = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:8013/api/links");
      setLinks(res.data);
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  }, []);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  return (
    <>
      <Navbar /> 

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 text-center"> 
            <div className="img-container">
              <img 
                src={product.imageBase64} 
                alt="Product"
                className="img-fluid zoom-image"
                style={{ width: "320px", height: "400px" }}
              />
            </div>
          </div>

          <div className="col-md-6" style={{ marginTop: "20px" }}>
            <h3>{product.title}</h3>
            <div className="d-flex mb-3 gap-2">
              <h4 className="text-danger">${product.regularPrice}</h4>
              <h4 className="text-decoration-line-through me-2" style={{ color: 'black' }}>
                ${product.discountPrice}
              </h4>
            </div>

            <button 
              className="btn"  
              style={{ borderRadius: "17px", background: "orange", width: "200px" }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            <p className="mt-3"><strong>SKU:</strong> DG013</p>
            <p><strong>Categories:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>

            {/* Share Icons */}
            <div className="mt-3">
              <p><strong>Share:</strong></p>
              <a href={links[links.length - 1]?.whatsapp || "#"} className="btn btn-outline-success me-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
              <a href={links[links.length - 1]?.facebook || "#"} className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href={links[links.length - 1]?.instagram || "#"} className="btn btn-outline-danger" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row mt-5">
          <div className="col-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab">
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab">
                  Reviews
                </button>
              </li>
            </ul>

            <div className="tab-content border p-3" id="myTabContent">
              <div className="tab-pane fade show active" id="description" role="tabpanel">
                <p>{product.description}</p>
              </div>
              <div className="tab-pane fade" id="reviews" role="tabpanel">
                <div className="mb-3">
                  <p><strong>Customer Reviews:</strong></p>
                  <ul>
                    <li>🌟🌟🌟🌟🌟 Excellent quality and beautiful design!</li>
                    <li>🌟🌟🌟🌟 Fast delivery and worth the price.</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <label htmlFor="reviewText" className="form-label"><strong>Write your review:</strong></label>
                  <textarea
                    className="form-control"
                    id="reviewText"
                    rows="3"
                    placeholder="Enter your review here..."
                  ></textarea>
                </div>
                <button className="btn btn-outline-primary">Send Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <h3
        style={{
          marginTop: "30px",
          display: "inline-block",
          borderBottom: "4px solid orange",
          paddingBottom: "5px",
          color: "#333",
          marginLeft:"47px"
        }}
      >
        Related products
      </h3>

      <div className="container-fluid" style={{ marginTop: "49px" }}>
        <div className="row gx-4">
          {/* Product 1 */}
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card product-card bg-white border-white shadow-sm text-center">
              <img src={product.imageBase64} className="card-img-top product-img" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Organic Rice</h5>
                <p className="card-text">₹100 - 1kg</p>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-sm btn-warning">Buy Now</button>
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

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shopcart;
