import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <div className='max-container flex justify-between flex-col  items-center max-lg:flex-col gap-10 w-full   ' id="contact-us">
<h3 className='text-4xl leading-[68px] ml-5 mt-5 p-5 w-full  font-palaquin  font-bold'>Sign Up From
    <span className='text-coral-red'>Updates</span> & NewsLetters
</h3>
<div className='border lg:max-w-[40%]  rounded p-2.5 max-sm:flex-col w-full flex  items-center '>
  
    <input type='text' placeholder='Subscribe' className='input  border-slate-gray'/>
      <div>
        <Button label="Sign Up" />
    </div>
</div>
    </div>
  )
}

export default Subscribe