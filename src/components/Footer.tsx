'use client'

import { usePathname } from 'next/navigation'
import { MediaInfo } from './media-info'

export const Footer = () => {
  const pathname = usePathname()

  if (pathname === '/links') return null

  return (
    <footer className='flex flex-col items-center justify-center gap-4 pt-16 sm:pt-24 pb-16'>
      <MediaInfo />
      <p className='text-xs text-gradient-br'>©2025 Arthur Teixeira</p>
    </footer>
  )
}
