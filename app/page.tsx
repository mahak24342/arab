import React from 'react'
import Nav from "@/app/components/Nav"
import Hero from "@/app/components/Hero"
import Popular from "@/app/components/Popular"
import Qs from "@/app/components/Qs"
const page = () => {
  return (
    <div className='relative' >
    <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <Popular/>
      <Qs/>
    </div>
  )
}

export default page