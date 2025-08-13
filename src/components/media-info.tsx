import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { Github, Instagram, Linkedin } from 'lucide-react'

export const MediaInfo = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link
        href={'https://www.linkedin.com/in/arthur-teixeira-451768215/'}
        aria-label={`Arthur Teixeira's LinkedIn profile`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Linkedin
                size={20}
                className='hover:text-teal-700 transition-colors duration-150'
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Open LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <Link
        href={'https://github.com/arthurteixeiradev'}
        aria-label={`Arthur Teixeira's GitHub repositories`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Github
                size={20}
                className='hover:text-teal-700 transition-colors duration-150'
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Open GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <Link
        href={'https://www.instagram.com/arthurtxeira/'}
        aria-label={`Arthur Teixeira's Instagram profile`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Instagram
                size={20}
                className='hover:text-teal-700 transition-colors duration-150'
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Open Instagram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  )
}
