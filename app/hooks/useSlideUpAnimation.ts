'use client'

import { useEffect, useState } from 'react'

export default function useSlideUpAnimation(sectionId: string): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId)
      if (section) {
        const rect = section.getBoundingClientRect()
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight

        // Check if the section is in the viewport
        if (rect.top <= windowHeight * 0.8) {
          setIsVisible(true) // Trigger animation
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // Clean up event listener
  }, [sectionId])

  return isVisible
}
