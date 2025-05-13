'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'
import { Icons } from './ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

export const Header = () => {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/Projects', label: 'Projects' },
    { href: '/stack', label: 'Stack' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header>
      <div
        className={cn(
          'fixed top-0 left-0 w-full h-1 z-50 transition-all duration-500 ease-in-out',
          isLoading ? 'bg-cyan-400/60' : 'bg-transparent',
          isLoading && 'animate-loading-bar',
        )}
      ></div>

      <div
        className={cn(
          'flex items-center justify-between fixed top-6 left-0 right-0 z-50 px-8',
          pathname === '/home' && 'pr-[82px]',
        )}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={'/home'}>
                <Icons.logo />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Back to home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div
          className={cn(
            'flex justify-center items-center py-2',
            'bg-transparent backdrop-blur-xl rounded-full h-auto max-w-fit mx-auto border border-muted-foreground/20',
          )}
        >
          <nav className='font-medium p-1'>
            <ul className='flex justify-center gap-1'>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'rounded-full px-4 py-2 transition-all duration-300 border border-transparent',
                      'text-muted-foreground hover:text-primary hover:border-muted-foreground/20 hover:bg-muted-foreground/20',
                      pathname === href &&
                        'text-primary border-muted-foreground/20 bg-muted-foreground/20',
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ModeToggle isHome={pathname === '/home'} />
      </div>
    </header>
  )
}
