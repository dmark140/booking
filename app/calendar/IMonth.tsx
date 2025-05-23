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
  addDays
} from 'date-fns'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CalendarProps {
  onDateClick: (date: Date) => void
}

export default function IMonth({ onDateClick }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <Button variant="outline" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>Prev</Button>
      <h2 className="text-xl font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
      <Button variant="outline" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>Next</Button>
    </div>
  )

  const renderDays = () => (
    <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 border-b">
      {daysOfWeek.map(day => (
        <div key={day} className="py-2">{day}</div>
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
      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        const formattedDate = format(day, 'd')

        days.push(
          <div
            key={day.toString()}
            className={`border h-full w-full relative text-sm cursor-pointer hover:bg-blue-50 ${!isSameMonth(day, monthStart) ? 'bg-gray-100 text-gray-400' : ''
              } ${isSameDay(day, new Date()) ? 'bg-blue-100 border-blue-500' : ''}`}
            onClick={() => onDateClick(cloneDay)}
          >
            <div className="absolute top-1 left-1 text-xs">{formattedDate}</div>
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 flex-1">
          {days}
        </div>
      )
      days = []
    }

    return <div className="flex flex-col flex-1">{rows}</div>
  }

  return (
    <div className="h-[92vh] flex flex-col">
      {renderHeader()}
      {renderDays()}
      <div className="flex-1 flex flex-col">{renderCells()}</div>
    </div>
  )
}
