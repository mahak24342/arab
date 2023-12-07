"use client"
import Image from 'next/image'
import React ,{useState,useEffect} from 'react'
import {navLinks} from "@/app/constants/index"
import { FiMenu } from "react-icons/fi";
import {FaTimes} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import Link from 'next/link';
import { motion } from "framer-motion"

const Nav = () => {
    const [nav, setNav]= useState(false);
    const links = [
        {
          id: 1,
          link: "Home",
        },
        {
          id: 2,
          link: "Services",
        },
        {
          id: 3,
          link: "Contact",
        },
        {
          id: 4,
          link: "Products",
        },
        {
          id: 5,
          link: "#",
        },
      ];
  return (
    <motion.div className='padding-x py-8 absolute z-10 w-full' animate={{x:20}} transition={{type:"tween" ,delay:"1"}} > 
      
<div className='flex justify-between items-center  max-container'>
    <a href="/"><Image src="/i1.png" className=' ' width={130} height={29} alt=""/>
    
    
    </a>
    <ul className='flex-1 justify-center items-center gap-16 flex max-lg:hidden
     '>
{
    navLinks.map((item)=>(
        <li key={item.label}>
            <a href={item.label}
className='text-lg text-slate-500'>
    {item.label}
</a>
</li>
    ))
}

    </ul>
    <motion.div    onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
    whileHover={{scale:2}} exit={{scale:0}}  >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </motion.div>


      {nav && (
        <motion.ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-red-300 text-white font-bold " animate={{x:10}} exit={{x:10}} transition={{type:"spring" }}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href="/">
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
</div>

    </motion.div>
  )
}

export default Nav