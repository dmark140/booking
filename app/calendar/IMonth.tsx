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
import EventListDialog from './EventListDialog'
import EventDetailDialog from './EventDetailDialog'
import CalendarParameters from './CalendarParameters'

interface CalendarProps {
  onDateClick: (date: Date) => void
}

export default function IMonth({ onDateClick }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  const [selectedDayEvents, setSelectedDayEvents] = useState<any[] | null>(null)
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null)
  const [isListOpen, setIsListOpen] = useState(false)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const [cameFromList, setCameFromList] = useState(false)

  const eventsMap: Record<string, { title: string }[]> = {
    '2025-05-24': [
      { title: 'sample title' },
      { title: 'sample title 1' },
      { title: 'another title' },
      { title: 'and one more' }
    ],
    '2025-05-25': [{ title: 'Kasa de something test this is a long text' }],
    '2025-05-27': [{ title: 'Kasa de something test this is a long text' }, { title: 'Kasa de something test this is a long text' }, { title: 'Kasa de something test this is a long text' }]
  }

  const renderHeader = () => (
    <div className="   w-full gap-2 mb-2">
      <div className=" flex justify-between items-center mb-4 w-fit gap-2">
        <Button variant="outline" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>{'<'}</Button>
        <Button variant="outline" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>{'>'}</Button>
        <p className='whitespace-nowrap'>{format(currentMonth, 'MMMM yyyy')}</p>
      </div>
      <CalendarParameters />
      
    </div>
  )

  const renderDays = () => (
    <div className="grid grid-cols-8 text-center text-sm font-medium text-gray-600 border-b" style={{ gridTemplateColumns: '40px repeat(7, 1fr)' }}>
      <div className="py-2" />
      {daysOfWeek.map(day => (
        <div key={day} className="py-2 border">{day}</div>
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
              <div className="flex items-center justify-center text-xs text-gray-500 border h-full">
                {weekNumber}
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-xs">
              Week {weekNumber}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )

      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        const formattedDate = format(day, 'd')
        const dateKey = format(day, 'yyyy-MM-dd')
        const events = eventsMap[dateKey] || []

        days.push(
          <div
            key={day.toString()}
            className={`border h-full w-full relative text-sm cursor-pointer ${!isSameMonth(day, monthStart) ? 'text-gray-600' : ''}`}
            onClick={() => onDateClick(cloneDay)}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center h-full">
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

            {/* Event previews */}
            <div className="absolute bottom-1 left-1 right-1 space-y-1">
              {events.length === 1 && (
                <div
                  className="bg-muted text-xs  rounded overflow-hidden whitespace-nowrap text-ellipsis"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedEvent(events[0])
                    setIsDetailOpen(true)
                  }}
                >
                  {events[0].title}
                </div>
              )}
              {events.length > 1 && (
                <> {events.length > 1 && (
                  <div
                    className="bg-muted text-xs  rounded overflow-hidden whitespace-nowrap text-ellipsis"

                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedDayEvents(events)
                      setIsListOpen(true)
                    }}
                  >
                    View all  {events.length} events
                  </div>
                )}
                </>
              )}
            </div>
          </div>
        )
        day = addDays(day, 1)
      }

      rows.push(
        <div key={day.toString()} className="grid flex-1 font-bold" style={{ gridTemplateColumns: '40px repeat(7, 1fr)' }}>
          {days}
        </div>
      )
      days = []
    }

    return <div className="flex flex-col flex-1">{rows}</div>
  }

  return (
    <div className="h-[85vh] flex flex-col">
      {renderHeader()}
      {renderDays()}
      <div className="flex-1 flex flex-col">{renderCells()}</div>

      {/* Dialogs */}
      <EventListDialog
        open={isListOpen}
        onClose={() => setIsListOpen(false)}
        events={selectedDayEvents || []}
        onSelectEvent={(event) => {
          setSelectedEvent(event)
          setIsDetailOpen(true)
          setCameFromList(true)
        }}

      />

      <EventDetailDialog
        open={isDetailOpen}
        onClose={() => {
          setIsDetailOpen(false)
          setCameFromList(false)
        }}
        onBack={() => {
          setIsDetailOpen(false)
          setIsListOpen(true)
          setCameFromList(false)
        }}
        event={selectedEvent}
      />
      {cameFromList}
    </div>
  )
}
