import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cocktails from './Components/Cocktails'
import About from './Components/About'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </div>
  )
}
