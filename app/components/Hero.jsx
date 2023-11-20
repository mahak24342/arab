"use client"
import React,{useState} from 'react'
import Button from "@/app/components/Button"
import Image from 'next/image'
import { statistics,shoes } from '../constants'
import ShoeCard from "@/app/components/ShoeCard"
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState("/bigShoe1.png");
  return (
  
    <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
<div className='relative  xl:w-2/5 justify-center items-start w-full max-xl:padding-x pt-28 '>
<p className='text-xl font-montserrat text-coral-red'>Hot Winter Collection</p>
<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]  font-bold'><span className='xl:bg-white xl:whitespace-nowrap relative z-10  pr-10 '>New Arrival</span>
<br/>
<span className='text-coral-red inline-block mt-3   '>Nike</span>Shoes

</h1>
<p className='font-montserrat text-slate-gray  text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, hic?</p>
<Button label="Shop Now" />
<div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 '>
{statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
</div>
</div>
<div className='relative  flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero  bg-cover bg-center flex justify-center items-center'>
    <Image src={bigShoeImg} alt="" width={610} height={510} className='object-contain relative  z-10'/>
    <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 '>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
</div>
    </section>
  )
}

export default Hero