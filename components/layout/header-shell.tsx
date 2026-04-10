'use client'

import { useEffect, useState } from 'react'

export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/50 transition-all duration-300 ease-in-out dark:bg-black/50 ${scrolled ? 'shadow-md backdrop-blur-xs' : ''}`}
    >
      {children}
    </header>
  )
}
