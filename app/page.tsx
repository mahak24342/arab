import Image from 'next/image'
import Foot from "@/app/components/Foot"
import Nav from '@/app/components/Nav'
import Hero from "@/app/components/Hero"
import Card from "@/app/components/Card"
export default function Home() {
  return (
   <>
   <Nav/>
   <Hero/>
   <Card/>
   <Foot/>
  
   </>
  )
}
