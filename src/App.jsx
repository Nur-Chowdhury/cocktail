import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className=' h-dvh' />
    </div>
  )
}
