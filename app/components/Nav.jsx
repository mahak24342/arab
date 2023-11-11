"use client"
import {AiOutlineMenu
}from "react-icons/ai"
import React from 'react'
import {FiSearch} from "react-icons/fi"
import Image from 'next/image'
import GiHamburgerMenu from "react-icons/gi"
const Nav = () => {
  return (
    <div className='border-2 flex  p-5 bg-blue-500 text-white uppercase font-bold  justify-between gap-4 border-red-500 '>
        <div className='flex gap-5'>
       <AiOutlineMenu
 className='sm:hidden' alt="" width={25} height={25} color="white"/>
        <h2 className='ml-5 '>ILAHII</h2>
        </div>
<div className='lg:flex sm:mr-8 lg:justify-around sm:pr-5 sm:text-xs sm:gap-10 text-white text-xs hidden '>
    <h2>About Us</h2>
    <h2>Services</h2>
    <h2>Exposure</h2>
    <h2>Work</h2>
</div>
<div>
    <FiSearch alt="" width={35} height={35}  color="white" className='sm:hidden font-bold  mr-48 '/>
</div>
    </div>
  )
}

export default Nav