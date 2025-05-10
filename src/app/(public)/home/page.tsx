'use client'

import MouseMoveEffect from '@/components/MouseMoveEffect'
import { Hero } from './components/Hero'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function HomePage() {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <div className='relative min-h-dvh'>
      <MouseMoveEffect />
      <Hero />
    </div>
  )
}
