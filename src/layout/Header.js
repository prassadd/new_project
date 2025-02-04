import React,{useEffect, useState} from 'react'
import './header.css'
import { IoMdArrowForward } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [isMenuVisible,setMenu] = useState(false)
  return (
    <header className='header-div flex justify-between items-center h-[101px] w-[90%] m-auto bg-white text-black top-[21px] relative z-[100]'>
      <nav className= {`${isMenuVisible ? 'nav-bar-sm' : 'nav-bar'} `}>
        <ul className={`${isMenuVisible ? 'nav-links-sm' : 'nav-links'}`}>
            <li>About</li>
            <li>News</li>
            <li>Services</li>
            <li>Our Team</li>
            <li>Make Enquiry</li>
        </ul>
        {isMenuVisible ? <span className='close-menu cursor-pointer' onClick={()=>setMenu(!isMenuVisible)}><IoMdClose /></span> : ''}
      </nav>
      <p className='contact-us cursor-pointer'>
        <span className='top-[42px]'>Contact Us</span>
        <span><IoMdArrowForward /></span>
      </p>
      {isMenuVisible ? '' : <span className='ham-menu' onClick={()=>setMenu(!isMenuVisible)}><FaBars/></span>}
    </header>
  )
}

export default Header
