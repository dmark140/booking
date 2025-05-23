'use client'
import React from 'react'
import { Calendar } from '../ui/calendar'
export default function ICalendarX() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md "
            /></div>
    )
}
