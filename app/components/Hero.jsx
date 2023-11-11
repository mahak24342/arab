import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='relative '>
        <h1 className='absolute uppercase text-center flex justify-center ml-10 text-white'>Plan your Trip</h1>
<Image src="/d1.jpg" alt="" width={250} height={450} className='bg-cover bg-center'/>

    </div>
    <div className='m-5 w-40  h-20 flex justify-center shadow-xs font-semibold'>
        <h1 className='text-3xl '>Disocover our trips</h1>
    </div>

<Image src="/7.jpg" alt="" width={250} height={350}/>

    <div className='bg-blue-500 w-56 text-white  h-40 text-center pr-5 pt-2    '>
<h1>Create your own history</h1>
<p className='flex justify-start'>Lorem ipsum dolor sit, amet consectetur </p>
    <button className='bg-white text-blue-500 p-3 font-semibold    flex justify-start  m-3 rounded-3xl'>Learn more</button>
      </div>
      <div className='  '>
        <h1 className='text-2xl h-20 text-left uppercase font-semibold '>Useful
        <br/>
         Information</h1>
        <Image src="/9.jpg" alt="" width={250} height={450} className='bg-cover bg-center'/>
     <h3 className='p-2 m-2'>Getting here</h3>
 <h1 className='text-blue-500 text-xl mb-2 ml-2'>Transportation</h1>
<p className=' text-xs text-left pr-6   mr-44 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quaerat corrupti iure ut ex dolor, minima dolorem voluptatibus voluptate similique consequuntur odio consequatur quas quisquam aspernatur enim maxime praesentium dolore?</p>
      </div>
    </>

  )
}

export default Hero