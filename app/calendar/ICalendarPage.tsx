'use client'

import { useState } from 'react'
import BookingDialog from './BookingDialog'
import IMonth from './IMonth'

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setDialogOpen(true)
  }

  return (
    <div className=" max-w-6xl mx-auto px-4">
      <IMonth onDateClick={handleDateClick} />
      <BookingDialog
        date={selectedDate}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  )
}
