"use client"
import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
export const Foot = () => {
  return (
    <div className='bg-blue-500 text-white sm:gap-5 sm:justify-around sm: p-5 sm:flex sm:flex-row flex-col  '>
<div className='flex flex-col gap-2'>    <h2>Call Center</h2>
        <p>International Call Center</p>
        </div>    
       <div className='flex flex-col mt-5  '>
        <h2>Subscribe to our newsletter</h2>
        <div className='border-2 gap-2 border-purple-300 bg-white flex justify-center p-2 rounded-xl m-5  w-96  '>
        <FiSearch alt="" width={45} height={45} size={25} color="black"/>
<input placeholder="Email Address" type="text" className=' w-96 rounded-xl '/>
</div>
</div>

<div>
    <h2>Douwnload App</h2>
    <h3>Privacy policy</h3>
</div>
    </div>
  )
}
export default Foot