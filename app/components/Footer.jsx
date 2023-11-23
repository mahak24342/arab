import React from 'react'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <div className='max-container bg-black'>
<div className='flex justify-center  p-5 items-start gap-20 flex-wrap sm:flex-col'>
<div className='flex flex-col items-start pl-5'>
    <a href='/' >
        <img src="/r1.webp" width={150} height={46} alt=""/>

    </a>
   
<p className='mt-6  text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta debitis sed hic aspernatur quibusdam consequatur aliquam incidunt dolor nihil, impedit cupiditate, placeat animi praesentium maiores, inventore tempora? Rerum fuga praesentium numquam laboriosam odit harum, quod corporis ipsam perferendis veniam!</p>
<div className='flex items-center gap-5 mt-8 '>
  {
    socialMedia.map((icon)=>(
      <div className='bg-white flex justify-center items-center  w-12 h-12  rounded-full'>
        <img src={icon.src} alt="" width={24} height={24}/>
        </div>
    ))
  }

</div>
</div>
<div className='flex flex-1 text-white text-2xl  leading-normal mb-6 font-montserrat font-medium  bg-black   w-full pl-5 pr-5  justify-between items-center  lg:gap-10 gap-20 flex-wrap'>
{footerLinks.map((section)=>(
  <div key={section.title}>
<h4 className='text-white '>{section.title}</h4>
 <ul>
  {section.links.map((link)=>(
    <li className='mt-3 text-white-400 text-base leading-normal hover:text-slate-gray'>
      <a >{link.name}</a>
    </li>
  ))}
 </ul>
  </div>
))}
</div>
</div>
<div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
<div className='justify-start items-center flex flex-1 gap-2 font-montserrat cursor-pointer'>
<img src="/copyright-sign.svg" className='rounded-full m-0'/>
<p>Copwright. All Rights 
  Reserved</p>
</div>
<p className='font-monsterrat'>T & C </p>
</div>

    </div>
    
  )
}

export default Footer