import ICalendarX from '@/components/iComponents/ICalendarX'
import React from 'react'
import Nav from '../Nav'
import TodaysTask from './TodaysTask'
import CalendarPage from './ICalendarPage'

export default function page() {
  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row h-full pt-2">
        {/* Sidebar: only visible on md and up */}
        <div className="hidden md:flex md:flex-col md:max-w-[250px] md:min-w-[250px] md:border-r">
          <ICalendarX />
          <TodaysTask />
        </div>

        {/* Main content */}
        <div className="w-full flex flex-col">
          <CalendarPage />

          {/* Mobile view: show TodaysTask below CalendarPage */}
          <div className="md:hidden mt-4">
            <TodaysTask />
          </div>
        </div>
      </div>
    </>
  )
}
