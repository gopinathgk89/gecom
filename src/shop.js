 
import  Navbar from "./Navbar.js";
import  Snavbar from "./snavbar.js";
import React, {useEffect,useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

 

 import './App.css';
 import champor from "./champor.jpg";
import agarbathi from "./agarbathi.jpg";
import vilaku from "./vilaku.jpg";
import Footer from "./footer.js";
import { CartContext } from './CartContext'; 
 


function Shop({  searchTerm, setSearchTerm }) {  



   const { addToCart } = useContext(CartContext);

  console.log(searchTerm)
  const [showSidebar, setShowSidebar] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));


 
   const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0); 
  const [showCart, setShowCart] = useState(false);

     const navigate = useNavigate();


     useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);



  useEffect(() => {
    fetchProducts();
  }, []);
 
 



   useEffect(() => {
    // Only fetch when there's a search term
    if (!searchTerm) return;

    const fetchProducts = async () => { 
      try {
            const res = await axios.get(`http://localhost:8013/api/products/search?query=${searchTerm}`);
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [searchTerm]); // <== When searchTerm changes, fetch


  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8013/api/products/all');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }



  const fetchCart = () => {
    axios.get('http://localhost:8013/api/cart')
      .then(response => {
        const items = response.data;
        setCartItems(items);
        const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalCount);
      })
      .catch(error => console.error("Error loading cart:", error));
  };



    


  return ( 
    <>    
      <Navbar  setSearchTerm={setSearchTerm}/> 
  
     
      

      


      <h3
          style={{
            marginTop: "60px",
            display: "inline-block",
            borderBottom: "4px solid orange",
            paddingBottom: "5px",
            color: "#333",
            marginLeft:"80px"
          }}
        >Shop </h3>
        
      
      <div className="container-fluid"  id="shop" style={{marginTop:"46px"}}>
      <div className="row gx-3 gy-4">
        {/* Repeat this column for each product */} 
        {products.map(product => (
  <div className="col-lg-3 col-6 mb-4" key={product.id} id="column"> 
    <div className="card product-card bg-white border-white shadow-sm text-center">
      <img
        src={product.imageBase64}
        className="card-img-top product-img"
        alt={product.title}
        onClick={() => navigate(`/shopcart/${product.id}`)}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text" style={{color:'#ff7a00',fontWeight:'bold'}}>
          <span className="text-decoration-line-through me-2">
            €{product.regularPrice}
          </span>
          -€{product.discountPrice}
        </p>
        <div className="d-flex justify-content-center gap-2"> 
            
              <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#fff",
        borderRadius: "50%",
        width: "40px", 
        height: "40px",
         boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
    >
      <i
        className="bi bi-cart-plus"
        style={{ fontSize: "1.6rem", color: "#ff7a00" }}
       onClick={() => addToCart(product)}></i>
    </div>
 

        </div>
      </div>
    </div>
  </div>
))}

         
      

        {/* Add more if needed */}
      </div>
    
      </div>






      
      

      {/* Mobile Filter Icon */}
      <div className="d-flex d-md-none justify-content-between align-items-center p-2 bg-light shadow-sm">
        <h5 className="m-0">Products</h5>
        <button className="btn btn-outline-primary" onClick={() => setShowSidebar(true)}>
          <i className="bi bi-filter"></i> Filter
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center p-3 border-bottom">
          <h5>Filters</h5>
          <button className="btn-close" onClick={() => setShowSidebar(false)}></button>
        </div>
        <div className="p-3">
          <div className="mb-3">
            <label className="form-label fw-bold">Category</label>
            <select className="form-select">
              <option>All</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Price Range</label>
            <input type="range" className="form-range" min="0" max="1000" />
          </div>
        </div>
      </div>    

      {/* Backdrop */}
      {showSidebar && <div className="backdrop" onClick={() => setShowSidebar(false)}></div>}





     <Footer/>  
    </>
  );
}

export default Shop;
