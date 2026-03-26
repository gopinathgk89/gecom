 import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

function Bestproducts({ searchTerm }) {

  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // 🔹 Load all products initially
  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Search products
  useEffect(() => {
    if (!searchTerm) {
      fetchProducts();
      return;
    }

    const searchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8013/api/products/search?query=${searchTerm}`
        );
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    searchProducts();
  }, [searchTerm]);

  // 🔹 Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8013/api/products/all'
      );
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <>
      <center>
        <h3
          style={{
            marginTop: "90px",
            display: "inline-block",
            borderBottom: "4px solid orange",
            paddingBottom: "5px",
            color: "#333",
          }}
        >
          Pooja Items
        </h3>
      </center>

      <div className="container-fluid" style={{ marginTop: "46px" }}>
        <div className="row gx-3 gy-2">

          {products.map(product => (
            <div className="col-lg-3 col-6 mb-4" key={product.id}>
              
              <div className="card shadow-sm text-center">
                
                <img
                  src={product.imageBase64}
                  className="card-img-top"
                  alt={product.title}   // ✅ FIXED alt
                  onClick={() => navigate(`/shopcart/${product.id}`)}
                />

                <div className="card-body">
                  <h5>{product.title}</h5>

                  <p style={{ color: '#ff7a00', fontWeight: 'bold' }}>
                    <span className="text-decoration-line-through me-2">
                      €{product.regularPrice}
                    </span>
                    €{product.discountPrice}
                  </p>

                  <div className="d-flex justify-content-center gap-2">

                    {/* Add to Cart */}
                    <div
                      style={{
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                      onClick={() => addToCart(product)}
                    >
                      <i className="bi bi-cart-plus" style={{ fontSize: "1.5rem", color: "#ff7a00" }}></i>
                    </div>

                    {/* Wishlist */}
                    <div
                      style={{
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <i className="bi bi-heart" style={{ fontSize: "1.3rem", color: "#ff7a00" }}></i>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Bestproducts;
