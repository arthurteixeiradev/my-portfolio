import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { cn } from '@/lib/utils'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={cn('group w-[50px] h-[50px]')}
          >
            <div className='transform transition-transform duration-300 ease-in-out group-hover:scale-110'>
              <Sun className='h-5 w-5 hidden dark:block fill-foreground' />
              <Moon className='dark:hidden h-5 w-5 block fill-foreground' />
            </div>
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
