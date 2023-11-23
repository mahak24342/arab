import React from 'react'
import { services } from '../constants'
import SerCard from "@/app/components/SerCard"
const Services = () => {
  return (
    <div className='max-container  flex-col sm:flex-row flex justify-center flex-wrap gap-9 '>
{services.map((service)=>(
    <SerCard key={service.label}{...service}/>
)

)}
    </div>
  )
}

export default Services