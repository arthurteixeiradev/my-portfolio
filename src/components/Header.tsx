'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'

export const Header = () => {
	const pathname = usePathname()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 200)
		return () => clearTimeout(timer)
	}, [])

	const navItems = [
		{ href: '/about', label: 'About' },
		{ href: '/Projects', label: 'Projects' },
		{ href: '/stack', label: 'Stack' },
		{ href: '/contact', label: 'Contact' },
	]

	return (
		<>
			<div
				className={cn(
					'fixed top-0 left-0 w-full h-1 z-50 transition-all duration-500 ease-in-out',
					isLoading ? 'bg-cyan-400/60' : 'bg-transparent',
					isLoading && 'animate-loading-bar',
				)}
			/>
			<header
				className={cn(
					'fixed top-4 left-0 right-0 z-10 flex justify-center items-center py-2',
					'bg-transparent backdrop-blur-md rounded-full h-auto max-w-fit mx-auto border border-accent/20',
				)}
			>
				<nav className='text-zinc-400 font-medium p-1'>
					<ul className='flex justify-center gap-1'>
						{navItems.map(({ href, label }) => (
							<li key={href}>
								<Link
									href={href}
									className={cn(
										'rounded-full px-4 py-2 transition-all duration-300 border border-transparent',
										'hover:text-zinc-200 dark:text-secondary/70 dark:hover:text-secondary hover:border-accent/20 hover:bg-zinc-900/50 dark:hover:bg-zinc-400/20',
										pathname === href &&
											'text-accent dark:text-secondary border-accent/20 dark:bg-zinc-400/20 bg-zinc-900/50',
									)}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{pathname !== '/home' && <ModeToggle />}
			</header>
		</>
	)
}
