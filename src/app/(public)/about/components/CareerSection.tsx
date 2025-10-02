import { HoverCardInfo } from '@/components/ui/HoverCardInfo'
import { careerList } from '@/data/careerList'

export const CareerSection = () => {
  return (
    <div className='flex flex-col items-start gap-4 mt-6'>
      <h1 className='text-lg sm:text-2xl text-gradient-br font-semibold'>
        Career
      </h1>
      <div className='flex flex-col gap-8'>
        {careerList.map(career => (
          <div
            className='flex flex-col gap-4'
            key={career.id}
          >
            <div className='flex flex-col gap-1'>
              <p className='text-sm sm:text-base font-semibold'>
                {career.title} ({career.startDate} - {career.endDate})
              </p>
              <p className='text-sm sm:text-base text-muted-foreground italic'>
                {career.description}
              </p>
              <p>
                <HoverCardInfo
                  placeholder={`${career.placeholder}`}
                  title={career.title}
                  description={career.companyDescription}
                  icon={career.icon}
                  link={career.link}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
