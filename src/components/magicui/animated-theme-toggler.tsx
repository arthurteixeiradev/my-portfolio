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

    isAnimating.current = true

    const toggleTheme = () => {
      setTheme(nextTheme)
    }

    const transition = document.startViewTransition(toggleTheme)

    transition.ready
      .then(() => {
        if (!buttonRef.current) return

        const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
        const x = left + width / 2
        const y = top + height / 2
        const right = window.innerWidth - left
        const bottom = window.innerHeight - top
        const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom))

        const styleId = 'vt-theme-animation'
        let styleEl = document.getElementById(styleId)
        if (!styleEl) {
          styleEl = document.createElement('style')
          styleEl.id = styleId
          document.head.appendChild(styleEl)
        }

        styleEl.innerHTML = `
          ::view-transition-image-pair(root) {
            mix-blend-mode: normal;
          }
          ::view-transition-new(root) {
            animation: vt-dummy 700ms linear forwards;
            clip-path: circle(var(--vt-radius, 0px) at ${x}px ${y}px);
            z-index: 2;
          }
          ::view-transition-old(root) {
            animation: vt-dummy 700ms linear forwards;
            z-index: 1;
          }
          @keyframes vt-dummy {
            from { opacity: 1; }
            to { opacity: 1; }
          }
        `

        const duration = 700
        const start = performance.now()
        const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
        
        let rafId: number

        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = easeInOut(progress)
          const currentRadius = eased * maxRad

          document.documentElement.style.setProperty(
            '--vt-radius',
            `${currentRadius}px`,
          )

          if (progress < 1) {
            rafId = requestAnimationFrame(tick)
          }
        }

        rafId = requestAnimationFrame(tick)

        transition.finished.finally(() => {
          cancelAnimationFrame(rafId)
          document.documentElement.style.removeProperty('--vt-radius')
          if (styleEl?.parentNode) {
            styleEl.parentNode.removeChild(styleEl)
          }
          isAnimating.current = false
        })
      })
      .catch(() => {
        isAnimating.current = false
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
