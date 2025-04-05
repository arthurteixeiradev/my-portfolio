'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip'

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
						className='group absolute -right-14'
					>
						<div className='transform transition-transform duration-300 ease-in-out group-hover:scale-110 text-background'>
							<Sun className='h-[1.5rem] w-[1.3rem] dark:hidden fill-background' />
							<Moon className='hidden h-5 w-5 dark:block fill-background' />
						</div>
						<span className='sr-only'>Toggle theme</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>
						{theme === 'light' ? 'Switch to light mode' : 'Switch to dark mode'}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
