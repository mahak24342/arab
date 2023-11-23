import React from 'react'
import { reviews } from '../constants'
import RCard from "@/app/components/RCard"
const Review = () => {
  return (
  <section className='max-container'>
<h3 className='font-palanquin text-center mt-5 text-4xl font-bold'>
What Our
<span className='text-coral-red'> Customers</span>

Say?
</h3>
<p className='info-text m-auto mt-4 max-w-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit optio itaque delectus eaque alias.</p>
  <div className='mt-24 flex flex-1  justify-evenly items-center max-lg:flex-col gap-14'>
{
    reviews.map((review,index)=> (
    <RCard 
    key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
    />
    )
    )
}
  </div>
  </section>
  )
}

export default Review




















































