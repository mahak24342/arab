import React from 'react'

const Button = ({label}) => {
  return (
   <button className='px-7 py-4 border text-lg leading-none bg-coral-red '>
    {label}
   </button>
  )
}

export default Button