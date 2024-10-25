import React from 'react'
import "./contact.css"
import { MdEmail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
function page() {
  return (
    <div>
      <h1 className='cont'>CONTACT US</h1>
      <div className='htm-left'>
      <p> <MdEmail size={20} /><span className='hts'> Email: </span>rahulk08372@gmail.com</p>
      <p> <FaMobileScreen size={20}/><span className='hts'>Mobile No.: </span>+91-9027948867</p>
      <p className='p-link'><Link href={"https://www.linkedin.com/in/rahul-kumar-b6b544244/"}><FaLinkedin  size={50}/></Link> </p>
      <span className='p-links'><Link href={"https://github.com/Rahulkumarya"}><FaGithub  size={40}/></Link> </span>
      </div>
    </div>
  )
}

export default page
