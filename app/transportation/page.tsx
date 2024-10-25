
"use client"
import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import "./global.css"
import { useState } from 'react';
import { LuBus } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";

function page() {



    // State for managing search input and category selection
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchInput, setSearchInput] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCategory, setSelectedCategory] = useState("");
  
    // Handle search input change
    // const handleInputChange = (e) => {
    //   setSearchInput(e.target.value);
    // };
  
    // Handle category selection change
    // const handleCategoryChange = (e) => {
    //   setSelectedCategory(e.target.value);
    // };
  
    // Handle search button click
    // const handleSearch = () => {
    //   console.log(`Search Query: ${searchInput}`);
    //   console.log(`Selected Category: ${selectedCategory}`);
    //   // Add your search logic here
    // };
  return (
    <>
    <div className='transportation'>
      
     

      


      <div className="search-bar-container">
      <FaBars size={20} /> 
      <span className='trans-heading'>TRACK YOUR TRANSPORT </span> 
      <input
        type="text"
        placeholder="Search here..."
        value={searchInput}
        // onChange={handleInputChange}
        className="search-input"
      />

      <select
        value={selectedCategory}
        // onChange={handleCategoryChange}
        className="category-select"
      >
        <option value="">Select Category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>

      <button  className="search-button">
        Search
      </button>

      
    </div>
   

      <div className='right-trans'>
       
      <p className='logo-noti'>
      <IoMdNotifications size={40}/>
      </p>
     
      <FaUserCircle size={40}/>
      

      </div>
      
      
    </div>


    <div className="trans-right">
      <div className='side-right'>
      <span className='trans-logo-right'> <LuBus size={30}/>
     <span className='tns-btn'>Create your trip </span> 
      </span>
      <p className='trans-logo-right'><FiMapPin size={40}/>
      View your trip</p>
      
      </div>
      <div className='sec-ht'>

     
     <div className='sec-right'>
      
     <span className='h'>Logistic Shortest Path</span>

     </div>
     <div className='sec-bot'>
     <span className='h'>Vehicle Connection With IOT devices</span>
     </div>
     </div>

    </div>
    </>


  )
}

export default page
