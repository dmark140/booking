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
    <div className="w-full max-w-full sm:max-w-6xl mx-auto px-2 sm:px-4">
      <div className="overflow-x-auto">
        <IMonth onDateClick={handleDateClick} />
      </div>
      <BookingDialog
        date={selectedDate}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  )
}


