import React from 'react'
import Button from "@/app/components/Button"
import Image from 'next/image'
const  Qs = () => {
  return (
    <div id="about-us" className='flex justify-between max-lg:flex-col gap-10 mt-10 ml-5 w-full max-container'>
<div className='flex flex-col flex-1 '>
<h2 className='font-palanquin capitalize text-4xl sm:w-96  w-64 font-bold w-'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
<p className='font-montserrat h-24 text-slate-gray lg:max-w-lg info-text  text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed non eligendi tempore saepe optio recusandae facere, hic dolorum modi delectus.sit amet consectetur adipisicing elit. Ut, hic?</p>
<p className='lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, recusandae!</p>
<div className='mt-11 '>
<Button label="View Details " />
</div>
</div>

<div className='flex-1 flex justify-center items-center'>
    <Image src="/shoe8.svg" width={570} height={522} className='object-contain'/>

</div>
    </div>
  )

}

export default  Qs