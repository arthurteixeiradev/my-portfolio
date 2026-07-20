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
  const { setTheme, theme, resolvedTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const isAnimating = useRef(false)

  const changeTheme = useCallback(() => {
    if (!buttonRef.current || isAnimating.current) return

    const currentTheme = theme === 'system' ? resolvedTheme : theme
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const canAnimate =
      typeof document.startViewTransition === 'function' &&
      !prefersReducedMotion

    if (!canAnimate) {
      setTheme(nextTheme)
      return
    }

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2

    isAnimating.current = true

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme)
    })

    transition.finished.finally(() => {
      isAnimating.current = false
    })

    transition.ready.then(() => {
      const maxRad = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      )

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRad}px at ${x}px ${y}px)`,
          ],
          opacity: [1, 1],
        },
        {
          duration: 700,
          easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
          fill: 'both',
          pseudoElement: '::view-transition-new(root)',
        },
      )

      document.documentElement.animate(
        { opacity: [1, 1] },
        {
          duration: 700,
          easing: 'linear',
          fill: 'both',
          pseudoElement: '::view-transition-old(root)',
        },
      )
    })
  }, [theme, resolvedTheme, setTheme])

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
