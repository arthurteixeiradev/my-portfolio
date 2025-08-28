import blombo2 from '@/assets/images/blombo2.png'
import { HoverCardInfo } from '@/components/ui/HoverCardInfo'

export const FeaturedProjects = () => {
  return (
    <div className='flex justify-between max-w-full h-96'>
      <div className='max-w-md h-full flex flex-col gap-2'>
        <p className='text-gradient-br max-w-max'>
          Made at{' '}
          <HoverCardInfo
            title='VIFE Solutions'
            description='A software development company that provides services to companies and individuals.'
            icon='https://github.com/vifesolutions.png'
            link='https://vifesolutions.com/'
          />
        </p>
        <h1 className='text-3xl text-gradient-br max-w-max'>Blombô</h1>
        <p className='text-muted-foreground'>
          Hoppscotch makes it easy to create and test your APIs, helping you to
          ship products faster.
        </p>
        <div></div>
      </div>
      <div className='max-w-lg h-full'>
        <img
          src={blombo2.src}
          alt='Hoppscotch'
          className='w-full h-full object-cover rounded-lg border border-muted-foreground/15 shadow-md'
        />
      </div>
    </div>
  )
}
