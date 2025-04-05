'use client'

import MouseMoveEffect from '@/components/MouseMoveEffect'
import { Hero } from './components/Hero'

export default function HomePage() {
	return (
		<div className='relative min-h-dvh'>
			<MouseMoveEffect />
			<Hero />
		</div>
	)
}
