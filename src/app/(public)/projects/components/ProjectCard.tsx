import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ProjectsListType } from '@/types/ProjectsListType'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  project: ProjectsListType
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className='min-h-72 lg:p-3 lg:border lg:border-transparent lg:hover:border-muted-foreground/15 lg:hover:bg-muted-foreground/5 lg:hover:rounded-xl lg:transition-all lg:duration-150'>
      <div className='flex flex-col lg:flex-row items-center h-full gap-4 lg:gap-12'>
        <div className='lg:max-w-lg w-full'>
          <AspectRatio
            ratio={16 / 9}
            className='rounded-md'
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className='w-full h-full object-cover rounded-md shadow-md'
            />
          </AspectRatio>
        </div>

        <div className='flex-1 flex flex-col gap-4'>
          <div className='space-y-3 md:space-y-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg md:text-2xl font-semibold text-foreground transition-colors'>
                {project.name}
              </h3>
              <Link
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={project.name}
                className='font-medium text-sm flex items-center gap-2 text-foreground hover:text-teal-700 transition-all duration-300'
              >
                Open project <ExternalLink size={16} />
              </Link>
            </div>
            <div className='text-muted-foreground text-sm md:text-base flex items-center gap-1'>
              Made at{' '}
              <Link
                href={project.madeAtLink}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={project.madeAt}
                className='text-foreground hover:text-teal-700 transition-all duration-300'
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p>{project.madeAt}</p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open {project.madeAt} website</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            </div>

            <p className='text-muted-foreground text-sm md:text-base'>
              {project.description}
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            {project.technologies.map(tech => (
              <Badge
                key={tech}
                variant='outline'
                className='bg-teal-700/10 border-teal-600 text-teal-600 rounded-full font-semibold'
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
