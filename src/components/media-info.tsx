import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { mediaInfoList } from '@/data/mediaInfoList'

export const MediaInfo = () => {
  return (
    <div className='flex items-center gap-4'>
      {mediaInfoList.map(item => (
        <Link
          key={item.title}
          href={item.link}
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
