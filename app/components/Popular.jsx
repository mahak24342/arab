import React from 'react'
import products from '@/app/constants/index'
import CardP from "@/app/components/CardP"
const Popular = () => {
    const products = [
        {
            imgURL: "/n1.webp",
            name: "Nike Air Jordan-01",
            price: "$200.20",
        },
        {
            imgURL: "/thumbnailShoe2.jpg",
            name: "Nike Air Jordan-10",
            price: "$210.20",
        },
        {
            imgURL: "/bigShoe2.jpg",
            name: "Nike Air Jordan-100",
            price: "$220.20",
        },
        {
            imgURL: "/thumbnailShoe2.jpg",
            name: "Nike Air Jordan-001",
            price: "$230.20",
        },
    ];
    
  return (
    <div id="products" className='max-container max-sm:mt-12'>
<div className='flex flex-col ml-10 justify-start gap-5 ' >
<h2 className='text-4xl font-palanquin font-bold'> Our <span className='text-coral-red'>Popular </span>Products</h2>
<p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, repellendus.</p>
</div>
<div className='mt-16 grid sm:grid-cols-4 grid-cols-1 ml-10  gap-14 '>
{products.map((product) => (
          <CardP key={product.name} {...product} />
        ))}
</div>
    </div>
  )
}

export default Popular