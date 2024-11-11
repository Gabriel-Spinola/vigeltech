import { useEffect, useState } from 'react'

export default function useIsMobile(lgScreenSize: number) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < lgScreenSize)
    updateIsMobile()

    window.addEventListener('resize', updateIsMobile)
    return () => window.removeEventListener('resize', updateIsMobile)
  }, [lgScreenSize])

  return isMobile
}
