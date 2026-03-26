
import React, { useEffect, useState } from 'react';
import axios from 'axios';





function  Footer() {

   const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

   const [links, setLinks] = useState([]);


 useEffect(() => {
    fetchLinks();
  }, []);


  const fetchLinks = async () => {
    const res = await axios.get("http://localhost:8013/api/links");
    setLinks(res.data);
  };







  useEffect(() => {
    axios.get('http://localhost:8013/api/settings')
      .then(response => {
        setAddress(response.data.address);
        setEmail(response.data.email);
        setMobile(response.data.mobile);
      })
      .catch(error => {
        console.error('Error fetching settings:', error);
      });
  }, []);


	return(

 
 <footer className=" text-white pt-4 pb-3 mt-5" style={{background:"orange"}}>
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Ecomerce</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i>{address}</p>
            <p><i className="bi bi-telephone-fill me-2"></i>{mobile}</p>
            <p><i className="bi bi-envelope-fill me-2"></i>{email}</p>
          </div>

          {/* Menu */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shop</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href={links[links.length - 1]?.instagram || "#"}  className="text-white fs-4" style={{color:"white"}}><i className="bi bi-instagram"></i></a>
              <a href={links[links.length - 1]?.facebook || "#"}  className="text-white fs-4"><i className="bi bi-facebook"></i></a>
              <a href={links[links.length - 1]?.whatsapp || "#"}  className="text-white fs-4"><i className="bi bi-whatsapp"></i></a>
              <a href="#" className="text-white fs-4"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Arness Soft. All rights reserved.</p>
        </div>
      </div>
    </footer>




		);

}

export default Footer;