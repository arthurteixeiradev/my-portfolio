'use client'

import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { type MouseEvent, useCallback, useRef } from 'react'
import { flushSync } from 'react-dom'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type Props = {
  disableTooltip?: boolean
}

export const AnimatedThemeToggler = ({ disableTooltip }: Props) => {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const changeTheme = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      const root = document.documentElement

      if (!buttonRef.current || root.hasAttribute('data-theme-transition'))
        return

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

      let x = event.clientX
      let y = event.clientY

      if (event.detail === 0) {
        const { top, left, width, height } =
          buttonRef.current.getBoundingClientRect()
        x = left + width / 2
        y = top + height / 2
      }

      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      )

      root.style.setProperty('--theme-transition-x', `${x}px`)
      root.style.setProperty('--theme-transition-y', `${y}px`)
      root.style.setProperty('--theme-transition-radius', `${radius}px`)
      root.setAttribute('data-theme-transition', '')

      let transition: ViewTransition | undefined

      try {
        transition = document.startViewTransition(() => {
          flushSync(() => setTheme(nextTheme))
        })

        await Promise.all([transition.ready, transition.finished])
      } catch {
        transition?.skipTransition()

        await transition?.finished.catch(() => {})

        setTheme(nextTheme)
      } finally {
        root.removeAttribute('data-theme-transition')
        root.style.removeProperty('--theme-transition-x')
        root.style.removeProperty('--theme-transition-y')
        root.style.removeProperty('--theme-transition-radius')
      }
    },
    [theme, resolvedTheme, setTheme],
  )

  const button = (
    <Button
      ref={buttonRef}
      variant='ghost'
      size='icon'
      onClick={changeTheme}
      className={cn('group w-8 h-8 transition-none')}
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
