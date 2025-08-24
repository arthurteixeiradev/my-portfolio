'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { Info, LoaderCircle, Mail } from 'lucide-react'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'The name must be at least 2 characters long'),
  email: z.string().email('Invalid email'),
  message: z
    .string()
    .min(10, 'The message must be at least 10 characters long'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const Contact = () => {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    startTransition(async () => {
      try {
        const templateParams = {
          name: data.name,
          email: data.email,
          message: data.message,
        }

        await emailjs.send(
          'service_q0btofy',
          'template_g8634gq',
          templateParams,
          'AF5o8zrRv1kUM4X0m',
        )

        toast.success('Message sent successfully!')
        reset()
      } catch (err) {
        toast.error('Something went wrong. Please try again.')
      }
    })
  }

  return (
    <section className='flex flex-col gap-16 mx-auto mt-16 sm:mt-40 max-w-5xl'>
      <div className='space-y-6'>
        <h1 className='text-[32px] sm:text-6xl text-gradient max-w-max font-semibold'>
          Let's talk!
        </h1>
        <p className='text-sm sm:text-base text-muted-foreground'>
          I'm really interested in what you have in mind. Fill out the form, and
          let's take the next step together.
        </p>
      </div>

      <div className='flex flex-col gap-4 max-w-xl'>
        <p className='text-lg sm:text-xl text-gradient-br max-w-max font-semibold'>
          Send an email
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-8'
        >
          <div className='flex flex-col gap-2'>
            <Label
              htmlFor='name'
              className='text-sm sm:text-base text-muted-foreground'
            >
              Name
            </Label>
            <Input
              id='name'
              type='text'
              aria-invalid={!!errors.name}
              placeholder='Your name'
              {...register('name')}
            />
            {errors.name && (
              <p className='text-red-500 text-sm flex items-center gap-1'>
                <Info size={16} />
                {errors.name.message}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <Label
              htmlFor='email'
              className='text-sm sm:text-base text-muted-foreground'
            >
              E-mail
            </Label>
            <Input
              id='email'
              type='email'
              aria-invalid={!!errors.email}
              placeholder='Your e-mail'
              {...register('email')}
            />
            {errors.email && (
              <p className='text-red-500 text-sm flex items-center gap-1'>
                <Info size={16} /> {errors.email.message}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <Label
              htmlFor='Message'
              className='text-sm sm:text-base text-muted-foreground'
            >
              Message
            </Label>
            <Textarea
              id='Message'
              aria-invalid={!!errors.message}
              placeholder='How can I help you?'
              {...register('message')}
            />
            {errors.message && (
              <p className='text-red-500 text-sm flex items-center gap-1'>
                <Info size={16} />
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type='submit'
            className={cn(
              'rounded-full px-10 cursor-pointer w-48',
              'text-foreground',
              'border border-muted-foreground/15 bg-muted-foreground/15 hover:bg-muted-foreground/30',
              'mx-auto sm:mx-0',
            )}
            disabled={Object.keys(errors).length > 0 || isPending}
          >
            {isPending ? (
              <>
                <LoaderCircle className='animate-spin' /> Sending...
              </>
            ) : (
              <>
                <Mail /> Send e-mail
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
