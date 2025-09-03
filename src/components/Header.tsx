'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import { AnimatedThemeToggler } from './magicui/animated-theme-toggler'
import { Icons } from './ui/icons'
import { SearchButton } from './ui/search-button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/stack', label: 'Stack' },
  { href: '/contact', label: 'Contact' },
]
export const Header = () => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (pathname === '/links') return null

  return (
    <>
      <ProgressBar />
      <header>
        <div
          className={cn(
            'flex items-center h-[50px] w-full justify-between fixed sm:top-6 z-50 px-4 sm:px-8 md:px-16',
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
              'bg-background/75 backdrop-blur-xs rounded-full border border-muted-foreground/15',
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

          <div className='md:hidden'>
            <Sheet
              open={open}
              onOpenChange={setOpen}
            >
              <SheetTrigger asChild>
                <Button
                  variant='default'
                  size='icon'
                  className={cn(
                    'w-full py-1 px-3 max-h-7 text-primary',
                    'rounded-full border border-muted-foreground/15 bg-muted-foreground/15 hover:bg-muted-foreground/30',
                  )}
                >
                  Menu <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='max-w-64'
              >
                <SheetHeader>
                  <SheetTitle className='sr-only'>Menu</SheetTitle>
                </SheetHeader>
                <nav className='flex flex-col gap-2 px-3'>
                  {navItems.map(({ href, label }) => (
                    <SheetClose
                      asChild
                      key={href}
                    >
                      <Link
                        href={href}
                        className={cn(
                          'px-2 py-1 rounded-md transition-colors text-muted-foreground',
                          pathname === href && 'text-primary',
                        )}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className='flex items-center justify-start gap-2 ml-3'>
                  <AnimatedThemeToggler disableTooltip />
                  <SearchButton
                    disableTooltip
                    onSelectOption={() => setOpen(false)}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
