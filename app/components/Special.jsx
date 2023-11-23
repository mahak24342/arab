import React from 'react'
import Button from './Button'
const Special = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
<div className='flex-1'>
    <img src="/21.svg"  width={773} height={687} className='object-contain w-full'/>


</div>

<div className='flex flex-1 ml-3 flex-col'>
<h2 className='font-palanquin capitalize  text-4xl sm:w-96  w-64 font-bold w-'>
          Best Price Available
          <span className='text-coral-red pt-10 mt-5'> Special</span>
          <span className='text-coral-red'>  Offer</span> Shoes
        </h2>
<p className='font-montserrat h-24 text-slate-gray lg:max-w-lg info-text  text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed non eligendi tempore saepe optio recusandae facere, hic dolorum modi delectus.sit amet consectetur adipisicing elit. Ut, hic?</p>
<p className='lg:max-w-lg info-text mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, recusandae!</p>
<div className='mt-11 flex flex-wrap gap-4  '>
<Button label="Shop Now " />
<button className='px-7 py-4  text-lg leading-none bg-white  border-2 hover:bg-red-300  '>
   Learn More
   </button>
</div>
</div>
    </section>
  )
}

export default Special