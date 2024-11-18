'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export type CalendarProps = ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        nav_button_previous: 'absolute left-1',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        head_row: 'flex',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        head_cell:
          'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100',
        ),
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        day_range_start: 'day-range-start',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        day_range_end: 'day-range-end',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        day_today: 'bg-accent text-accent-foreground',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        day_outside:
          'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        day_disabled: 'text-muted-foreground opacity-50',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        // biome-ignore lint/style/useNamingConvention: this is a third party library
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
