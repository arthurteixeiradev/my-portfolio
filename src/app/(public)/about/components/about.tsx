'use client'

export const About = () => {
	return (
		<main className='flex flex-col gap-24'>
			<section className='mx-40 my-36'>
				<div className='flex flex-col gap-8'>
					<div className='space-y-2 max-w-5xl'>
						<h1 className='text-foreground text-6xl font-bold'>
							I'm Arthur Teixeira — a software engineer, photographer and
							mountain biker.
						</h1>
					</div>

					<div className='space-y-4 max-w-5xl'>
						<p className='text-base text-muted-foreground'>
							I'm Arthur Teixeira, a front-end developer passionate about
							turning ideas into real, beautiful, and functional interfaces.
						</p>
						<p className='text-base text-muted-foreground'>
							I'm currently studying Computer Science, which allows me to
							explore the tech world from a broader perspective while applying
							everything I learn directly into practice. I like to say I'm
							always in development mode — evolving my code, my projects, and
							the way I see technology.
						</p>
						<p className='text-base text-muted-foreground'>
							I work mainly with React, Next.js, and Tailwind CSS, building
							modern, responsive, and well-structured interfaces. I'm especially
							interested in design systems, user experience, and best practices
							that make code cleaner, scalable, and easier to maintain.
						</p>
						<p className='text-base text-muted-foreground'>
							I believe front-end development is not just about writing code —
							it's about creating experiences that connect people and ideas..
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}
