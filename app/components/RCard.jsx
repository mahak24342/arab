import React from 'react'

const RCard = ({imgURL,customerName ,rating,feedback}) => {
  return (
    <div className='flex bg-purple-200 pt-4 p-3 justify-center items-center  gap-4 flex-col shadow-lg '>
        <img src={imgURL} className='rounded-full object-cover w-[120px] h-[120px] '/>
<p className='max-w-sm text-center info-text'>{feedback}</p>
<div>
    <img src="/t1.svg" width={24} height={24} className='object-contain m-0'/>
  <p>{rating}</p>
  </div>
<h3>{customerName}</h3>
    </div>
  )
}

export default RCard