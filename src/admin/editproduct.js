
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
 

 function ProductUpdate() { 

 	

 const { id } = useParams();

 const m=id;

    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('regularPrice', regularPrice);
    formData.append('discountPrice', discountPrice);
    formData.append('category', category);
   
    
    
    if (image) {
      formData.append('image', image);
    }

    try {

      const url = id
        ? `http://localhost:8013/api/products/edit/${id}`
        : 'http://localhost:8013/api/products/upload';

      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Product saved successfully!');
 
      
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product');
    }
  };

    
 

  

  return (
    <> 
    <Navbar/>
    <Sidebar />
    <div className="container mt-2" style={{marginLeft:'240px',width:'1000px'}}>
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Update Product</h3>
           
        
        <form   onSubmit={handleSubmit} encType="multipart/form-data">
          
          {/* Product Title */}
          <div className="mb-3"> 
            <label className="form-label">Product Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter product title" 
               value={title}
            onChange={e => setTitle(e.target.value)}
            required 
            />
          </div>

          {/* Product Description */}
          <div className="mb-3">
            <label className="form-label">Product Description</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter product description"
              rows="3"
              value={description}
            onChange={e => setDescription(e.target.value)}
            required 
            ></textarea>
          </div>

          {/* Product Image */}
          <div className="mb-3">
            <label className="form-label">Upload Product Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              
           onChange={(e) => setImage(e.target.files[0])}
            /> 
          </div>

          {/* Prices */} 
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Regular Price ($)</label>
              <input
                type="text" 
                 
                className="form-control"
                placeholder="Enter discount price"
                value={regularPrice}
            onChange={e => setRegularPrice(e.target.value)}
            required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Discount Price ($)</label>
              <input
                type="text"
                
                className="form-control"
                placeholder="Enter discount price"
              value={discountPrice}
            onChange={e => setDiscountPrice(e.target.value)}
            required
              />
            </div>
          </div>
 
          {/* Category Dropdown */}
          <div className="mb-3">
            <label className="form-label">Category</label>
              <input
              type="text" 
               
              className="form-control"
              placeholder="Enter product title"
            onChange={e => setCategory(e.target.value)}
            required
            />
            
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">
              Add Product
            </button>
          </div>
        </form> 
      </div>
    </div>
    </>
  );
}

export default ProductUpdate  ;