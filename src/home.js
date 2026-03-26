import './App.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar.js'; 
import ImageSlider from "./slider.js"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Bestproducts from './bestproducts.js';
import Trendingproducts from "./trendingproducts.js";
import Footer from "./footer.js"; 
import Rewiews from "./clientrewiews.js";
import React, { useState,useEffect } from 'react';
import axios from 'axios';
 

      

function Home({ searchTerm, setSearchTerm }) {

const [marqueeText, setMarqueeText] = useState('');


useEffect(() => {
    fetchMarquee();
  }, []);

   const fetchMarquee = async () => {
    try {
      const res = await axios.get('http://localhost:8013/api/marquee/latest');
      if (res.data && res.data.content) {
        setMarqueeText(res.data.content);
      }
    } catch (error) {
      console.error("Error fetching marquee text", error);
    }
  };
   
   return(
  
   <div >

    
    

      <div className="top-message" style={{height:'30px'}}>
      <marquee direction="left" style={{position:'relative',bottom:'3px'}}>
          {marqueeText}
        </marquee>      
      </div> 
      <Navbar setSearchTerm={setSearchTerm} />
      <ImageSlider/>
      <Bestproducts searchTerm={searchTerm}/>
       
    
      <Rewiews/>
      <Footer/>

       
     

  </div>



   	);
}
export default Home;

