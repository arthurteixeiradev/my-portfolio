import { mediaInfoList } from '@/data/mediaInfoList'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export const MediaInfo = () => {
  return (
    <div className='flex items-center gap-4'>
      {mediaInfoList.map(item => (
        <Link
          key={item.title}
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={item.description}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <item.icon
                size={20}
                className='hover:text-teal-700 transition-colors duration-150'
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Open {item.title}</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      ))}
    </div>
  )
}
