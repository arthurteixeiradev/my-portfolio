'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ProgressBar } from './ProgressBar'
import { AnimatedThemeToggler } from './magicui/animated-theme-toggler'
import { Icons } from './ui/icons'
import { SearchButton } from './ui/search-button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { MobileMenu } from './MobileMenu'

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/stack', label: 'Stack' },
  { href: '/contact', label: 'Contact' },
]

export const Header = () => {
  const pathname = usePathname()

  if (pathname === '/links') return null

  return (
    <>
      <ProgressBar />
      <header>
        <div
          className={cn(
            'flex items-center h-[56px] md:h-[50px] w-full justify-between fixed top-0 sm:top-6 md:top-8 z-50 px-4 sm:px-8 md:px-16',
            'bg-background sm:bg-transparent',
            pathname === '/' && 'bg-transparent',
          )}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={'/'}
                aria-label='Back to home'
                className={cn(
                  'hover:bg-accent dark:hover:bg-accent/50 rounded-md transition-all',
                )}
              >
                <Icons.logo />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Back to home</p>
            </TooltipContent>
          </Tooltip>

          <div
            className={cn(
              'hidden md:flex justify-center items-center py-2 ml-0 md:ml-[50px] h-full',
              'bg-background/75 backdrop-blur-xs rounded-full border border-muted-foreground/15 shadow-md',
              pathname === '/' && 'bg-transparent backdrop-blur-[2px]',
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

          <div className='hidden md:flex md:items-center md:justify-end md:gap-2 md:w-[100px]'>
            <AnimatedThemeToggler />
            {pathname !== '/' && <SearchButton />}
          </div>

          <MobileMenu navItems={navItems} />
        </div>
      </header>
    </>
  )
}
