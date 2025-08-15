'use client'

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
import { ProgressBar } from './ProgressBar'

export const Header = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/stack', label: 'Stack' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <ProgressBar />
      <header>
        <div
          className={cn(
            'flex items-center justify-between fixed top-6 left-0 right-0 z-50 px-16 2xl:px-8',
            pathname === '/' && '2xl:pr-[82px] pr-[114px]',
          )}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={'/'}
                  aria-label='Back to home'
                >
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
              'bg-transparent backdrop-blur-xl rounded-full h-auto max-w-fit mx-auto border border-muted-foreground/15',
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
                        'text-muted-foreground hover:text-primary hover:border-muted-foreground/15 hover:bg-muted-foreground/15',
                        pathname === href &&
                          'text-primary border-muted-foreground/15 bg-muted-foreground/15',
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <ModeToggle isHome={pathname === '/'} />
        </div>
      </header>
    </>
  )
}
