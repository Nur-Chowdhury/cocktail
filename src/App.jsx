import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <div>
      hi
    </div>
  )
}
