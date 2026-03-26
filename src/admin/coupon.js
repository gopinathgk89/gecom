import Navbar from "./navbar";
import Sidebar from "./sidebar"; 
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect,useState } from 'react';
import axios from 'axios';
 
 

const API_URL = 'http://localhost:8013/api/coupons'; 
 
export default function CouponManager() {


   const [title, setTitle] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [coupons, setCoupons] = useState([]);

  // Fetch coupons from API
  const fetchCoupons = async () => {
    try {
      const response = await axios.get(API_URL);
      setCoupons(response.data);
    } catch (err) {
      console.error('Error fetching coupons:', err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  // Submit coupon
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!title || !expiryDate || !discountPercentage) {
      alert('Please fill in all fields');
      return;
    }
 
    try {
      await axios.post(API_URL, {
        title,
        expiryDate,
        discountPercentage
      });
      setTitle('');
      setExpiryDate('');
      setDiscountPercentage('');
      fetchCoupons(); // refresh list
    } catch (err) {
      console.error('Error creating coupon:', err);
      alert('Failed to create coupon');
    }
  };

  // Delete coupon
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this coupon?')) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCoupons(); // refresh list
    } catch (err) {
      console.error('Error deleting coupon:', err);
      alert('Failed to delete coupon');
    }
  };


   



 
   

  return (
  	<>
  	<Navbar/>
  	<Sidebar/>   
    <div className="container mt-5" style={{marginLeft:"250px",width:'1000px'}}>
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Coupon Code Management</h3>

        {/* Coupon Form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row g-3 align-items-end">
            <div className="col-md-5">
              <label className="form-label">Coupon Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon title"
                value={title}
          onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-5">
              <label className="form-label">Discount Percentage</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon title"
                value={discountPercentage}
      onChange={e => setDiscountPercentage(e.target.value)} 
          
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Expiry Date</label>
              <input
                type="date"
                className="form-control"
                 value={expiryDate}
          onChange={e => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="col-md-3 text-center">
              <button type="submit" className="btn btn-primary w-100">
                Create Coupon
              </button>
            </div>
          </div>
        </form>

        {/* Coupon Table */}
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Coupon Name</th>
              <th scope="col">Percentage</th>
              <th scope="col">Expiry Date</th>
              <th scope="col" className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
           {coupons.map(coupon => (
                <tr key={coupon.id}> 
                  <td>{coupon.title}</td>
                   <td>{coupon.discountPercentage}</td>
                  <td>{coupon.expiryDate}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(coupon.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                ))}
            
              <tr>
                <td colSpan="3" className="text-center text-muted">
                  No coupons available
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
