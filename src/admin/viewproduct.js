
import Navbar from "./navbar";
import Sidebar from "./sidebar"; 
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
    
   const [products, setProducts] = useState([]);

   const navigate = useNavigate();


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8013/api/products/all');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

const handleDelete = (id) => { 
    axios.delete(`http://localhost:8013/api/products/${id}`)
      .then(() => {
        // Remove from state
        setProducts(products.filter(product => product.id !== id));
      })
      .catch((err) => console.error("Error deleting item:", err));
  };
  

  return (
  	<>
  	<Navbar/>
  	<Sidebar/>
    <div className="container mt-5 " style={{marginLeft:"240px",width:'1000px'}}>
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Product List</h3>
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col" className="text-center">Edit</th>
              <th scope="col" className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
             
               {products.map(prod => (
                <tr key={prod.id}>
                  <td>
                    <img
                      src={prod.imageBase64} 
                      alt={prod.title}
                      className="img-thumbnail"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{prod.title}</td>
                  <td>
                    <span className="text-muted text-decoration-line-through me-2">
                      ${prod.regularPrice}
                    </span>
                    <span className="fw-bold text-success">
                      ${prod.discountPrice}
                    </span>
                  </td>
                  <td>{prod.category}</td>
                  <td className="text-center">
                    <button 
                      className="btn btn-sm btn-warning"
                     onClick={() => navigate(`/admin/editproduct/${prod.id}`)}>
                    
                      Edit
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(prod.id)} 
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                    ))}
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No products found
                </td>
              </tr>
        
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
