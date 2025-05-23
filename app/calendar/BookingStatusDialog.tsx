'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface BookingStatusDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  status: string
  percentage: string
}

const BookingStatusDialog: React.FC<BookingStatusDialogProps> = ({ open, onOpenChange, status, percentage }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Booking Status: {status}</DialogTitle>
        </DialogHeader>
        <div className="text-sm mt-2">
          This status represents <span className="font-medium">{percentage}%</span> of today’s bookings.
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BookingStatusDialog
