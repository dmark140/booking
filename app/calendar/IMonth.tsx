'use client'

import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
  getISOWeek
} from 'date-fns'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface CalendarProps {
  onDateClick: (date: Date) => void
}

export default function IMonth({ onDateClick }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4"
    
    >

      <Button variant="outline" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>Prev</Button>
      <h2 className="text-xl font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
      <Button variant="outline" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>Next</Button>
    </div>
  )

  const renderDays = () => (
    <div className="grid grid-cols-8 text-center text-sm font-medium text-gray-600 border-b  "   style={{ gridTemplateColumns: '40px repeat(7, 1fr)' }}>
      <div className="py-2 "  /> {/* Empty cell for week labels */}
      {daysOfWeek.map(day => (
        <div key={day} className="py-2 border" >{day}</div>
      ))}
    </div>
  )



  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate

    while (day <= endDate) {
      const weekNumber = getISOWeek(day)
      days.push(
        <TooltipProvider key={`tooltip-${weekNumber}`}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="flex items-center justify-center text-xs text-gray-500 border h-full"
              >
                {weekNumber}
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-xs">
              Week {weekNumber}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )


      // Push the 7 days of the week
      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        const formattedDate = format(day, 'd')
        days.push(
          <div
            key={day.toString()}
            className={`border h-full w-full relative text-sm cursor-pointer ${!isSameMonth(day, monthStart) ? 'text-gray-600' : ''
              }`}
            onClick={() => onDateClick(cloneDay)}
          >
            <TooltipProvider key={`tooltip-${weekNumber}`}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="flex items-center justify-center   h-full"
                  >
                    <div className="absolute top-2 left-1 text-xs">
                      <span className={`${isSameDay(day, new Date()) ? 'bg-primary text-primary-foreground p-1.5 rounded-md' : ''}`}>
                        {formattedDate}
                      </span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-xs">
                  Click to Add Appointment
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )
        day = addDays(day, 1)
      }

      rows.push(
        <div
          key={day.toString()}
          className="grid flex-1 font-bold"
          style={{ gridTemplateColumns: '40px repeat(7, 1fr)' }}
        >
          {days}
        </div>
      )
      days = []
    }

    return <div className="flex flex-col flex-1">{rows}</div>
  }




  return (
    <div className="h-[85vh] flex flex-col ">
      {renderHeader()}
      {renderDays()}
      <div className="flex-1 flex flex-col">{renderCells()}</div>
    </div>
  )
}
