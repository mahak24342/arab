"use client"
import React,{useEffect} from 'react'
import Nav from "@/app/components/Nav"
import Hero from "@/app/components/Hero"
import Popular from "@/app/components/Popular"
import Qs from "@/app/components/Qs"
import Services from "@/app/components/Services"
import Special from "@/app/components/Special"
import Review from "@/app/components/Review"
import Subscribe from "@/app/components/Subscribe"
import Footer from "@/app/components/Footer"
import { motion } from "framer-motion"

const page = () => {
  return (
    <motion.div className='relative' initial={{opacity:0, y:15}} animate={{opacity:1,y:0}} exit={{opacity:0, y:0}} transition={{delay:0.25}}>
      
    <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <Popular/>
      <Qs/>
      <Services/>
      <Special/>
<Review/>
<Subscribe/>
<Footer/>
    </motion.div>
  )
}

export default page