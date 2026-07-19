'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

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

          <div className='md:hidden'>
            <Button
              variant='default'
              size='icon'
              onClick={() => setOpen(!open)}
              className={cn(
                'w-full py-1 px-3 max-h-7 text-primary flex items-center gap-1',
                'rounded-full border border-muted-foreground/15 bg-muted-foreground/15 hover:bg-muted-foreground/30',
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'close-text' : 'menu-text'}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.1 }}
                  className="w-10 text-center"
                >
                  {open ? 'Close' : 'Menu'}
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className='h-4 w-4' />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className='h-4 w-4' />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/40 md:hidden"
              style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-[56px] sm:top-[80px] left-4 right-4 z-50 md:hidden"
            >
              <div className="flex flex-col p-6 rounded-[24px] bg-background/90 border border-muted-foreground/15 shadow-2xl" style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}>
                <motion.nav 
                  className="flex flex-col gap-3 mb-6"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {navItems.map(({ href, label }) => (
                    <motion.div
                      key={href}
                      variants={{
                        open: { opacity: 1, y: 0, filter: 'blur(0px)' },
                        closed: { opacity: 0, y: 15, filter: 'blur(8px)' }
                      }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'block px-4 py-3 text-center rounded-xl transition-colors text-base font-medium text-muted-foreground hover:bg-muted-foreground/10 hover:text-primary',
                          pathname === href && 'text-primary font-semibold',
                        )}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
                
                <motion.div 
                  className='flex items-center justify-center gap-4 px-2 pt-4 border-t border-muted-foreground/15'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <AnimatedThemeToggler disableTooltip />
                  <SearchButton
                    disableTooltip
                    onSelectOption={() => setOpen(false)}
                  />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
