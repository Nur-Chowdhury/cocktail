import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Components/Navbar'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <div>
      <Navbar />
    </div>
  )
}
