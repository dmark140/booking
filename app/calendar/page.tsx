
import ICalendarX from '@/components/iComponents/ICalendarX'
import React from 'react'
import IMonth from './IMonth'
import Tasks from './Tasks'
import Nav from '../Nav'
import TodaysTask from './TodaysTask'
import CalendarPage from './ICalendarPage'

export default function page() {
    return (
        <>
            <Nav />
            <div className='border flex h-full pt-2'>
                <div className='  max-w-[250px] min-w-[250px] w-full'>
                    <ICalendarX />
                    <TodaysTask />
                </div>
                <div className='   w-full'>
                    <CalendarPage/>
                </div>
            </div>
        </>
    )
}
