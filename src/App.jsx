import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cocktails from './Components/Cocktails'
import About from './Components/About'
import Art from './Components/Art'
import Menu from './Components/Menu'
import Contact from './Components/Contact'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </div>
  )
}
