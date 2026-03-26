import React, { useState ,useEffect} from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import axios from 'axios';
 

 function ProductUpload() { 
 
   const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState('');



  const [categories, setCategories] = useState([]);

  const API_URL = "http://localhost:8013/api/categories";

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get(API_URL);
    setCategories(res.data);
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      setMessage('Please select an image file');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('regularPrice', regularPrice);
    formData.append('discountPrice', discountPrice);
    formData.append('category', category);
    formData.append('image', imageFile);

    try {
      const response = await axios.post('http://localhost:8013/api/products/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload success:', response.data);
      setMessage('Product uploaded successfully!'); 
      // clear form
      setTitle(''); 
      setDescription('');
      setRegularPrice('');
      setDiscountPrice('');
      setCategory('');
      setImageFile(null);
    } catch (error) {
      console.error('Error uploading product:', error);
      setMessage('Error uploading product');
    }
  }

    


  

  return (
    <> 
    <Navbar/>
    <Sidebar/>
    <div className="container mt-2" style={{marginLeft:'240px',width:'1000px'}}>
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Add New Product</h3>
          {message && <div className="alert alert-info">{message}</div>}
        
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
              
              onChange={handleFileChange}
            required
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

              <select  className="form-control" onChange={e => setCategory(e.target.value)}>
        <option value="">-- Select Category --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>
            
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

export default ProductUpload;