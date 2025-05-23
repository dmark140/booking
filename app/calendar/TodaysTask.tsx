'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import BookingStatusDialog from "./BookingStatusDialog"
import { Card, CardContent } from "@/components/ui/card"
 
export default function TodaysTask() {

  const bookings = [
    { status: "Pending" },
    { status: "Confirmed" },
    { status: "Pending" },
    { status: "Cancelled" },
    { status: "Confirmed" },
    { status: "Confirmed" },
    { status: "Pending" },
  ]

  const total = bookings.length

  const statusCount = bookings.reduce(
    (acc, curr) => {
      acc[curr.status] = (acc[curr.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )

  const statusColor = {
    Pending: "text-yellow-500",
    Confirmed: "text-green-600",
    Cancelled: "text-red-500",
  }

  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("")
  const [selectedPercentage, setSelectedPercentage] = useState("")

  const handleClick = (status: string, percentage: string) => {
    setSelectedStatus(status)
    setSelectedPercentage(percentage)
    setDialogOpen(true)
  }

  return (
    <div className="p-4">
      <h2 className="  font-semibold mb-4">Today's Booking Requests</h2>
      <Card className="bg-transparent shadow-none p-0">
        <CardContent className="px-0 py-2 space-y-2">
          {Object.entries(statusCount).map(([status, count]) => {
            const percentage = ((count / total) * 100).toFixed(0)
            return (
              <Button
                key={status}
                variant="ghost"
                className="w-full justify-between px-0 text-sm font-medium"
                onClick={() => handleClick(status, percentage)}
              >
                <span className={statusColor[status as keyof typeof statusColor]}>
                  {status}
                </span>
                <span>{percentage}%</span>
              </Button>
            )
          })}
        </CardContent>
      </Card>

      <BookingStatusDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        status={selectedStatus}
        percentage={selectedPercentage}
      />
    </div>
  )
}


