import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Link from 'next/link'

type HoverCardInfoProps = {
  placeholder?: string
  title: string
  description: string
  icon: string
  link: string
}

export function HoverCardInfo({
  placeholder,
  title,
  description,
  icon,
  link,
}: HoverCardInfoProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href={link}
          aria-label={`Go to ${title}`}
          className='text-foreground hover:text-teal-600 transition-colors duration-200'
        >
          {placeholder ? placeholder : title}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between gap-4'>
          <Avatar>
            <AvatarImage src={icon} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>{title}</h4>
            <p className='text-sm'>{description}</p>
            <Link
              href={link}
              aria-label={`Go to ${title}`}
              className='text-muted-foreground text-xs hover:text-teal-600 transition-colors duration-200'
            >
              Click to visit the website.
            </Link>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
