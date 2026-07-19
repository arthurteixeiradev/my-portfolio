'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatedThemeToggler } from './magicui/animated-theme-toggler'
import { SearchButton } from './ui/search-button'

interface NavItem {
  href: string
  label: string
}

interface MobileMenuProps {
  navItems: NavItem[]
}

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  const toggleMenu = () => {
    const newState = !open
    setOpen(newState)
    if (newState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const menuContent = (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="mobile-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-background/40 md:hidden"
          style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
          onClick={toggleMenu}
        />
      )}
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed top-[56px] sm:top-[80px] left-4 right-4 z-50 md:hidden"
        >
          <div className="flex flex-col p-6 rounded-[24px] bg-background/90 border border-muted-foreground/15 shadow-2xl">
            <motion.nav 
              className="flex flex-col gap-3 mb-6"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 }
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
                    open: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
                    },
                    closed: { 
                      opacity: 0, 
                      y: 15, 
                      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] }
                    }
                  }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Link
                    href={href}
                    onClick={toggleMenu}
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
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <AnimatedThemeToggler disableTooltip />
              <SearchButton
                disableTooltip
                onSelectOption={toggleMenu}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <div className='md:hidden'>
        <Button
          variant='default'
          size='icon'
          onClick={toggleMenu}
          className={cn(
            'w-full py-1 px-3 max-h-7 text-primary flex items-center gap-1',
            'rounded-full border border-muted-foreground/15 bg-muted-foreground/15 hover:bg-muted-foreground/30',
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close-text' : 'menu-text'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
      {mounted && createPortal(menuContent, document.body)}
    </>
  )
}
