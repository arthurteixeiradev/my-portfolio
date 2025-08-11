'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { usePathname } from 'next/navigation'
export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <div className='grid relative min-h-screen gap-24'>
      <Header />

      {children}

      {pathname !== '/home' && <Footer />}
    </div>
  )
}
