// // components/divbar.js
// "use client";
// import React from "react";
// // import div from 'next/div';
// import Image from "next/image";
// import home1 from "./home1.jpg";
// import byte_brains from "./styles/img/byte_brains.png";
// import { FaUserCircle } from "react-icons/fa";
// import Main from "./components/Pages/Main";
// import {
//   MdLocalShipping,
//   MdOutlineStoreMallDirectory,
//   MdOutlinePublic,
// } from "react-icons/md";
// // import Order_management from "./Order_management";

// import div from "next/link";
// import Hero from "./components/Pages/page";
// import Link from "next/link";
// import page from "./distribution/page";
// import page_footer from "./footer/page";
// import aboutpage from "./about/page";

// const divbar = () => {
//   return (
//     // <div className="home-banner">
//     <div className="navbar">
//       <div className="logo">
//         <a href="/">
//           <Image src={byte_brains} alt="Logo" width={300} height={100} />
//         </a>
//       </div>
//       <ul className="nav-links">
//         <li>
//           <a>Home</a>
//         </li>
//         <li>
//           <a className="nav-solu">Solutions</a>
//           <ul className="main-solu">
//             <li>
//               <Link href={"/order"}>
//                 <p className="solu-logo">
//                   <MdOutlineStoreMallDirectory size={50} />
//                 </p>
//                 Order Management
//               </Link>
//             </li>

//             <li>
//               {" "}
//               <p className="solu-logo">
//                 <MdLocalShipping size={50} />
//               </p>
//               <Link href={"/distribution"}> Distribution & Fulfillment</Link>
//             </li>
//             <li>
//               {" "}
//               <p className="solu-logo">
//                 <MdOutlinePublic size={50} />
//               </p>
//               <Link href={"/transportation"}>Transportation</Link>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link href={"/about"}>About Us</Link>
//         </li>
//         <li>
//           <a>Contact Us</a>
//         </li>
//       </ul>
//       <div className="user-icon">
        
//       <li>
//           <a className="nav-solus"><FaUserCircle size={35} /></a>
//           <ul className="main-solu">
//             <li>
//               <Link href={"/order"}>
//                 <p className="solu-logo">
//                 </p>
//                 Signup
//               </Link>
//             </li>
//             <li>
//               <Link href={"/order"}>
//                 <p className="solu-logo">
//                 </p>
//                 Login 
//               </Link>
//             </li>

//             </ul>
//             </li>
          
       
//       </div>
//     </div>
//   );
// };

// export default divbar;

// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import { FaUserCircle } from "react-icons/fa";
// import div from "next/div";
// import byte_brains from "./byte_brains.png";
// import { MdLocalShipping, MdOutlineStoreMallDirectory, MdOutlinePublic } from "react-icons/md";

// const Navbar = () => {
//   const [showSolutions, setShowSolutions] = useState(false);

//   const toggleSolutions = () => {
//     setShowSolutions(!showSolutions);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <a href="/">
//           <Image className="logo-back" src={byte_brains} alt="Logo" width={300} height={100} />
//         </a>
//       </div>
//       <ul className="nav-divs">
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <a onChange={toggleSolutions}>Solutions</a>
//         <li className="dropdown">

//           {/* {showSolutions && ( */}
//             <div className="dropdown-menu">
//               <div className="dropdown-item">
// <MdOutlineStoreMallDirectory size={50} />
//                 <div >
//                   <a>Order Management</a>
//                 </div>
//               </div>
//               <div className="dropdown-item">
// <MdLocalShipping size={50} />
//                 <div >
//                   <a>Distribution & Fulfillment</a>
//                 </div>
//               </div>
//               <div className="dropdown-item">
// <MdOutlinePublic size={50} />
//                 <div >
//                   <a>Transportation</a>
//                 </div>
//               </div>
//             </div>
//           {/* )} */}
//         </li>
//         <li>
//           <a href="/about">About Us</a>
//         </li>
//         <li>
//           <a href="/contact">Contact Us</a>
//         </li>
//       </ul>
//       <div className="user-icon">
//         <FaUserCircle size={35} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






// "use client";
// import React from "react";
// import Image from "next/image";
// import byte_brains from "./styles/img/byte_brains.png";
// import { FaUserCircle } from "react-icons/fa";
// import Link from "next/link";
// import { MdLocalShipping, MdOutlinePublic, MdOutlineStoreMallDirectory } from "react-icons/md";

// const divbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <a href="/">
//           <Image src={byte_brains} alt="Logo" width={300} height={100} />
//         </a>
//       </div>
//       <ul className="nav-links">
//         <li><a>Home</a></li>
//         <li>
//           <a className="nav-solu">Solutions</a>
//           <ul className="main-solu">
//             <li>
//               <Link href="/order">
//                 <p className="solu-logo"><MdOutlineStoreMallDirectory size={50} /></p>
//                 Order Management
//               </Link>
//             </li>
//             <li>
//               <Link href="/distribution">
//                 <p className="solu-logo"><MdLocalShipping size={50} /></p>
//                 Distribution & Fulfillment
//               </Link>
//             </li>
//             <li>
//               <Link href="/transportation">
//                 <p className="solu-logo"><MdOutlinePublic size={50} /></p>
//                 Transportation
//               </Link>
//             </li>
//           </ul>
//         </li>
//         <li><Link href="/about">About Us</Link></li>
//         <li><a>Contact Us</a></li>
//       </ul>

//       <div className="user-icon">
//         <a className="nav-user">
//           <FaUserCircle size={35} />
//         </a>
//         <ul className="user-menu">
//           <li>
//             <Link href="/signup">Signup</Link>
//           </li>
//           <li>
//             <Link href="/login">Login</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default divbar;






"use client";
import React, { useState } from "react";
import Image from "next/image";
import byte_brains from "./styles/img/byte_brains.png";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
// import Signup from "./components/Signup"; // Import Signup component
// import Login from "./components/Login";   // Import Login component
import Signup from "./components/auth/Signup"
import Login from "./components/auth/Login"
import { MdLocalShipping, MdOutlinePublic, MdOutlineStoreMallDirectory } from "react-icons/md";

const Divbar = () => {
  const [activeComponent, setActiveComponent] = useState(null); // State to control component rendering

  const handleComponentRender = (component: string | React.SetStateAction<null>) => {
    setActiveComponent(component);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <Image src={byte_brains} alt="Logo" width={300} height={100} />
          </a>
        </div>
        <ul className="nav-links">
          <li><Link href={"/"}>Home</Link></li>
          <li>
            <a className="nav-solu">Solutions</a>
            <ul className="main-solu">
              <li>
              <p className="solu-logo"><MdOutlineStoreMallDirectory size={50} /></p>
                <Link href="/order">

                Order Management</Link>
              </li>
              <li>
                <Link href="/distribution">
                <p className="solu-logo"><MdLocalShipping size={50} /></p>
                Distribution & Fulfillment</Link>
              </li>
              <li>
                <Link href="/transportation">
                <p className="solu-logo"><MdOutlinePublic size={50} /></p>Transportation</Link>
              </li>
            </ul>
          </li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href={"/contact"}>Contact Us</Link></li>
        </ul>

        {/* User Icon Dropdown */}
        <div className="user-icon">
          <a className="nav-user"><FaUserCircle size={35} /></a>
          <ul className="user-menu">
            <li onClick={() => handleComponentRender("signup")}>
              Signup
            </li>
            <li onClick={() => handleComponentRender("login")}>
              Login
            </li>
          </ul>

        </div>
        <div className="home-cen">
<span className="home-he">Logistic Operation ULIP</span>
      </div>
      </div>
     

      {/* Render Signup or Login based on the state */}
      <div className="auth-container">
        {activeComponent === "signup" && <Signup />}
        {activeComponent === "login" && <Login />}
      </div>
    </div>
  );
};

export default Divbar;
