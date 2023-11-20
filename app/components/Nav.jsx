import Image from 'next/image'
import React from 'react'
import {navLinks} from "@/app/constants/index"
import { FiMenu } from "react-icons/fi";
const Nav = () => {
  return (
    <div className='padding-x py-8 absolute z-10 w-full'>
      
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
<    div className='sm:hidden block mr-14'>
<FiMenu  height={35} width={35} size={35} />
</div>
   
</div>

    </div>
  )
}

export default Nav