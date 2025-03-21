// components/Header.jsx
import React from 'react'
import { cn } from '@/lib/utils'

export const Header = () => {
	return (
		<header
			className={cn(
				'fixed top-4 left-0 right-0 z-10 flex justify-center items-center py-2',
				'bg-transparent backdrop-blur-md rounded-full h-auto max-w-fit mx-auto border border-zinc-300/20',
			)}
		>
			<nav className='text-zinc-400 font-medium p-1'>
				<ul className='flex justify-center'>
					<li>
						<a
							href='#'
							className={cn(
								'hover:text-zinc-200 border border-transparent hover:border-zinc-300/20 hover:bg-gray-900/50 transition-all duration-300',
								'rounded-full px-4 py-2',
							)}
						>
							About
						</a>
					</li>
					<li>
						<a
							href='#'
							className={cn(
								'hover:text-zinc-200 border border-transparent hover:border-zinc-300/20 hover:bg-gray-900/50 transition-all duration-300',
								'rounded-full px-4 py-2',
							)}
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href='#'
							className={cn(
								'hover:text-zinc-200 border border-transparent hover:border-zinc-300/20 hover:bg-gray-900/50 transition-all duration-300',
								'rounded-full px-4 py-2',
							)}
						>
							Stack
						</a>
					</li>
					<li>
						<a
							href='#'
							className={cn(
								'hover:text-zinc-200 border border-transparent hover:border-zinc-300/20 hover:bg-gray-900/50 transition-all duration-300',
								'rounded-full px-4 py-2',
							)}
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
