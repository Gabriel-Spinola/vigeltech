'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useSlideUpAnimation(sectionId: string): boolean {
  const [isVisible, setIsVisible] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId)
      if (section) {
        const rect = section.getBoundingClientRect()
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight

        if (rect.top <= windowHeight * 0.8) {
          setIsVisible(true)
        }
      }
    }

    if (pathName.includes(`#${sectionId}`)) {
      handleScroll()
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionId, pathName])

  return isVisible
}
