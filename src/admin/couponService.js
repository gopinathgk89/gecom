


import axios from 'axios';

const API_URL = 'http://localhost:8013/api/coupons';  // backend URL

const getAllCoupons = () => {
  return axios.get(API_URL);
};

const createCoupon = (coupon) => {
  return axios.post(API_URL, coupon);
}; 

const deleteCoupon = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getAllCoupons,
  createCoupon,
  deleteCoupon
};