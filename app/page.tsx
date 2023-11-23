import React from 'react'
import Nav from "@/app/components/Nav"
import Hero from "@/app/components/Hero"
import Popular from "@/app/components/Popular"
import Qs from "@/app/components/Qs"
import Services from "@/app/components/Services"
import Special from "@/app/components/Special"
import Review from "@/app/components/Review"
import Subscribe from "@/app/components/Subscribe"
import Footer from "@/app/components/Footer"
const page = () => {
  return (
    <div className='relative' >
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
    </div>
  )
}

export default page