import { HoverCardInfo } from '@/components/ui/HoverCardInfo'

export const CareerSection = () => {
  return (
    <div className='flex flex-col items-start gap-4 mt-6'>
      <h1 className='text-lg sm:text-2xl text-gradient-br font-semibold'>
        Career
      </h1>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-sm sm:text-base font-semibold'>
            VIFE Solutions (Dec 2024 - Current)
          </p>
          <p className='text-sm sm:text-base text-muted-foreground italic'>
            Frontend Development Intern
          </p>
          <p>
            <HoverCardInfo
              placeholder='vifesolutions.com ->'
              title='VIFE Solutions'
              description='A software development company that provides services to companies and individuals.'
              icon='https://github.com/vifesolutions.png'
              link='https://vifesolutions.com/'
            />
          </p>
        </div>
      </div>
    </div>
  )
}
