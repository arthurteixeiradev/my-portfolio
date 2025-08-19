import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { techStack } from '@/data/techStack'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const Stack = () => {
  return (
    <section className='flex flex-col gap-12 mx-auto mt-16 sm:mt-40 max-w-[1345px]'>
      <div className='space-y-4 sm:space-y-8 flex flex-col items-center'>
        <h1 className='text-[32px] sm:text-6xl text-gradient bg-gradient-to-r font-semibold'>
          Stack
        </h1>
        <p className='text-sm sm:text-base text-muted-foreground'>
          Technologies and tools I master to turn ideas into real projects.
        </p>
      </div>

      <div className='mt-6 flex flex-wrap gap-6 justify-center items-center'>
        {techStack.map(tech => (
          <Link
            href={tech.site}
            key={tech.title}
            className={cn(
              'flex justify-center items-center w-60 h-28',
              'hover:border hover:border-muted-foreground/15 hover:bg-muted-foreground/5 hover:rounded-md',
              'text-muted-foreground hover:text-foreground',
              'transition-all duration-150',
            )}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className='flex flex-1 flex-col items-center justify-center gap-2'>
                  <img
                    alt={tech.alt}
                    src={tech.src}
                    width={32}
                    height={32}
                  />
                  <p className='text-sm'>{tech.title}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open {tech.title} site</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        ))}
      </div>
    </section>
  )
}
