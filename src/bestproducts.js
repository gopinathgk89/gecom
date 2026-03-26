
import champor from "./champor.jpg";
import agarbathi from "./agarbathi.jpg";
import vilaku from "./vilaku.jpg";
import './App.css';
import React, {useEffect,useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';



 


function Bestproducts({ searchTerm }) {


   const { addToCart } = useContext(CartContext);

 
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
     
      <center> 
        <h3
          style={{
            marginTop: "90px",
            display: "inline-block",
            borderBottom: "4px solid orange",
            paddingBottom: "5px",
            color: "#333",
          }}
        >Pooja Items </h3>
        </center> 
       
      <div className="container-fluid" style={{marginTop:"46px"}}>
      <div className="row gx-3 gy-2">
      {products.map(product=> (
         
        <div className="col-lg-3 col-6 mb-4" key={product.id} id="column"  >
          <div className="card product-card bg-white border-white shadow-sm text-center" >
            <img src={product.imageBase64} className="card-img-top product-img" alt="Organic Rice" onClick={() => navigate(`/shopcart/${product.id}`)} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5> 
              <p className="card-text "  style={{color:'#ff7a00',fontWeight:'bold'}}><span className="text-decoration-line-through me-2">€{product.regularPrice}</span>-€{product.discountPrice}</p>
                 
                   
                  
                    <span className="text-success"></span>
                  
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
        className="bi bi-heart"
        style={{ fontSize: "1.3rem", color: "#ff7a00" }}
       ></i>

    </div>

     






                
              </div>
            </div>
          </div>
        </div>

        ))}

        {/* Product 2 */}
      
        {/* Add more if needed */}
      </div>
    
      </div>
    </> 
  );
}

export default Bestproducts;
