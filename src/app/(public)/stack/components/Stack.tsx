import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { techStack } from '@/data/techStack'
import Link from 'next/link'

export const Stack = () => {
  return (
    <section className='flex flex-col gap-12 mx-auto mt-40 max-w-[1345px]'>
      <div className='space-y-8'>
        <h1 className='text-foreground text-6xl font-bold text-center'>
          Stack
        </h1>
        <p className='text-base text-muted-foreground text-center'>
          Technologies and tools I master to turn ideas into real projects.
        </p>
      </div>

      <div className='mt-6 flex flex-wrap gap-6 justify-center items-center'>
        {techStack.map(tech => (
          <Link
            href={tech.site}
            key={tech.title}
            className='w-60 h-28 hover:border hover:rounded-md flex justify-center items-center'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex flex-1 flex-col items-center justify-center gap-2'>
                    <img
                      alt={tech.alt}
                      src={tech.src}
                      width={32}
                      height={32}
                    />
                    <p className='text-sm text-muted-foreground'>
                      {tech.title}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open {tech.title} site</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </div>
    </section>
  )
}
