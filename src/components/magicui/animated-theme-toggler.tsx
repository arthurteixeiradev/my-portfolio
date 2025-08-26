'use client'

import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useRef } from 'react'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type Props = {
  disableTooltip?: boolean
}

export const AnimatedThemeToggler = ({ disableTooltip }: Props) => {
  const { setTheme, theme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const changeTheme = useCallback(() => {
    if (!buttonRef.current) return

    const canAnimate = typeof document.startViewTransition === 'function'

    const toggleTheme = () => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    if (canAnimate) {
      const transition = document.startViewTransition(toggleTheme)

      transition.ready.then(() => {
        if (!buttonRef.current) return

        const { top, left, width, height } =
          buttonRef.current.getBoundingClientRect()
        const y = top + height / 2
        const x = left + width / 2
        const right = window.innerWidth - left
        const bottom = window.innerHeight - top
        const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom))

        try {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRad}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 700,
              easing: 'ease-in-out',
              pseudoElement: '::view-transition-new(root)',
            },
          )
        } catch (e) {
          toggleTheme()
        }
      })
    } else {
      toggleTheme()
    }
  }, [setTheme])

  const button = (
    <Button
      ref={buttonRef}
      variant='ghost'
      size='icon'
      onClick={changeTheme}
      className={cn('group w-8 h-8')}
    >
      <div className='transform transition-transform duration-300 ease-in-out group-hover:scale-110'>
        <Sun className='h-5 w-5 hidden dark:block fill-foreground' />
        <Moon className='dark:hidden h-5 w-5 block fill-foreground' />
      </div>
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )

  if (disableTooltip) return button

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent>
        <p>
          {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
