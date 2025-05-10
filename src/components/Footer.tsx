import { MediaInfo } from './media-info'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-4 pb-16'>
      <MediaInfo />
      <p className='text-xs text-muted-foreground'>©2023 Arthur Teixeira</p>
    </footer>
  )
}
