import React from 'react'
import Image from 'next/image'
const SerCard = ({imgURL ,label ,subtext}) => {
  return (
    <div className='flex-1 flex flex-col sm:w-[350px] w-full rounded-[20px] shadow-3xl sm:min-w-[350px] px-10 py-16'>
<div className='w-11 h-11 justify-center items-center bg-coral-red rounded-full flex '>
    <Image src={imgURL} alt="" width={24} height={24} />
</div>
<h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold '>{label}</h3>
<p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'> {subtext}</p>
    </div>
  )
}

export default SerCard