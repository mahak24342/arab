import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div >
        <h1 className='text-3xl font-semibold mr-44 p-5'>Get Inspired to plan your trip</h1>
      <div className='flex  w-max  h-150 gap-5 flex-wrap '>
        <div className='bg-gray-200 rounded-md  p-2 w-52  '>
<Image src="/0.jpg" alt=""   width={200} height={250} className='bg-cover bg-center rounded-md'/>
<h2 className='p-3 border-b-2 mb-2 border-gray-400'>Experiences & Tours</h2>
<h2 className='ml-3'>Learn More</h2>
        </div>
        <div className='bg-gray-200 rounded-md  p-3  w-52  '>
<Image src="/0.jpg" alt=""   width={200} height={250} className='bg-cover bg-center rounded-md'/>
<h2>Experiences & Tours</h2>
<h2>Learn More</h2>
        </div>
        <div className='bg-gray-200 rounded-md  p-3  w-52  '>
<Image src="/0.jpg" alt=""   width={200} height={250} className='bg-cover bg-center rounded-md'/>
<h2>Experiences & Tours</h2>
<h2>Learn More</h2>
        </div>
        </div>
<h2 className='p-5 pr-5 mr-40'>Powedered By 
    L & K Travels
</h2>
    </div>
  )
}

export default Card