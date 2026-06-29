import { ExternalLink } from 'lucide-react'
import { HoverCardInfo } from '@/components/ui/HoverCardInfo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { careerList } from '@/data/careerList'
import { CareerType } from '@/types/CareerType'

type RoleType = {
  title: string
  startDate: string
  endDate: string
}

const CareerRoleItem = ({ role, isLast }: { role: RoleType; isLast: boolean }) => {
  const isCurrent = role.endDate === 'Current'

  return (
    <div className="relative flex gap-4 sm:gap-6 group">
      <div className="relative flex-none flex justify-center w-6 pt-0.5">
        {!isLast && (
          <div className="absolute top-4 -bottom-8 left-[11px] w-[2px] bg-muted-foreground/30 z-0" />
        )}

        <div className="relative z-10 flex items-center justify-center bg-background rounded-full py-1">
          {isCurrent ? (
            <div className="relative flex items-center justify-center">
              <div className="absolute h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <div className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 border border-emerald-200" />
            </div>
          ) : (
            <div className="h-2 w-2 rounded-full bg-muted-foreground/50 transition-colors group-hover:bg-muted-foreground" />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1 transition-transform group-hover:translate-x-1 pb-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <h4 className="text-sm sm:text-base font-medium text-foreground flex items-center gap-3">
            {role.title}
            {isCurrent && (
              <Badge className="bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20 border-emerald-400/20 px-2 h-5 text-[10px] font-bold tracking-wider">
                NOW
              </Badge>
            )}
          </h4>
        </div>

        <time className="text-xs sm:text-sm text-muted-foreground font-mono">
          {role.startDate} — {role.endDate}
        </time>
      </div>
    </div>
  )
}

const CareerItem = ({ career }: { career: CareerType }) => {
  const roles =
    career.roles && career.roles.length > 0
      ? career.roles
      : [
          {
            title: career.description,
            startDate: career.startDate,
            endDate: career.endDate,
          },
        ]

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-sm sm:text-base font-semibold text-foreground">
            {career.title}
          </h3>
          <Badge
            variant="secondary"
            className="font-mono font-normal whitespace-nowrap cursor-default"
          >
            <time>{career.startDate}</time> — <time>{career.endDate}</time>
          </Badge>
        </div>

        {career.link && (
          <div className="-ml-3 sm:ml-0">
            <HoverCardInfo
              placeholder={`${career.placeholder}`}
              title={career.title}
              description={career.companyDescription}
              icon={career.icon}
              link={career.link}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground h-8 group"
                asChild
              >
                <a
                  href={career.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar site da ${career.title}`}
                >
                  {career.placeholder.replace(' ->', '')}
                  <ExternalLink className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </HoverCardInfo>
          </div>
        )}
      </div>

      <div className="relative ml-1 sm:ml-2 mt-4 space-y-8">
        {roles.map((role, idx) => (
          <CareerRoleItem
            key={idx}
            role={role}
            isLast={idx === roles.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export const CareerSection = () => {
  return (
    <div className="flex flex-col items-start gap-4 mt-6 w-full">
      <h1 className="text-lg sm:text-2xl text-gradient-br font-semibold">
        Career
      </h1>

      <div className="flex flex-col gap-8 w-full">
        {careerList.map((career) => (
          <CareerItem key={career.id} career={career} />
        ))}
      </div>
    </div>
  )
}
