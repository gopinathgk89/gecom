
 
import Home from './home.js';
import About from  './about.jsx';
import Contact from './contact.jsx';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Shopcart from './shopcart.js';
import Cartpage from './cartpage.js';
import Billing from './billingpage.js';
import Login from './login.js';
import Register from './register.js';
import Shop from "./shop.js";
import CartApp from "./cartapp.js";
import AdminLogin from "./admin/login.js"; 
import Dashboard from "./admin/dashboard.js";
import OrderPage from "./admin/orderpage.js"; 
import OrderView from "./admin/orderview.js"; 
import ProductUpload from "./admin/uploadproduct.js";
import ProductUpdate from "./admin/editproduct.js"; 
import ProductList  from "./admin/viewproduct.js";
import CouponManager from "./admin/coupon.js";
import AdminUpdateCard from "./admin/adminupdate.js";  
import ImageUploader from "./demo.js";
import Socialmedia from "./admin/socialmedia.js";
import Homesetting from "./admin/homesetting.js"; 
import BannerUpdatePage from "./admin/banner.js";
import CategoryManager from "./admin/addcategory.js";
import React, { useState } from 'react';
import CheckoutPage from "./checkoutpage.js";
import { CartProvider } from './CartContext';

import PrivateRoute from "./admin/PrivateRoute";
  
 
 
   
    
function App() {  
 const [searchTerm, setSearchTerm] = useState('');
  return ( 

   <>  

        
    <BrowserRouter> 
      <Routes> 
       <Route path="/" element={<Home   searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} /> 
       <Route path="/shopcart/:id" element={<Shopcart />} />
        <Route path="/cartpage" element={<Cartpage />} />
         <Route path="/billingpage" element={<Billing />} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/register" element={<Register/>}/>
          <Route path="/shop" element={<Shop searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}/> 
             <Route path="/demo" element={<ImageUploader/>}/>  
              <Route path="/cartapp" element={<CartApp/>}/> 
               <Route path="/checkoutpage" element={<CheckoutPage/>}/>  



               
    
          <Route path="/admin/login" element={<AdminLogin/>}/>

          <Route element={<PrivateRoute />}>
          
          <Route path="/admin/socialmedia" element={<Socialmedia/>}/>
          <Route path="/admin/dashboard" element={<Dashboard/> }/>
          <Route path="/admin/orderpage" element={<OrderPage/>}/>
          <Route path="/admin/orderview" element={<OrderView/>}/>
           <Route path="/admin/uploadproduct" element={<ProductUpload/>}/>
            <Route path="/admin/editproduct/:id" element={<ProductUpdate/>}/>
           <Route path="/admin/viewproduct" element={<ProductList/>}/>
           <Route path="/admin/coupon" element={<CouponManager/>}/>
            <Route path="/admin/adminupdate" element={<AdminUpdateCard/>}/>
             <Route path="/admin/homesetting" element={<Homesetting/>}/>
             <Route path="/admin/banner" element={<BannerUpdatePage/>}/>
               <Route path="/admin/addcategory" element={<CategoryManager/>}/>
              </Route>
    
      </Routes>
    </BrowserRouter>
  
 

  </> 
     
  ); 
}

export default App;
