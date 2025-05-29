'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface EventDetailDialogProps {
  open: boolean
  onClose: () => void
  onBack?: () => void // Optional back handler
  event: { title: string } | null
}

export default function EventDetailDialog({ open, onClose, event, onBack }: EventDetailDialogProps) {
  if (!event) return null
  const i: number = 2;
  return (
    <Dialog open={open} onOpenChange={(open) => { if (!open) onClose() }}>
      <DialogContent>
        <DialogTitle>{event.title}</DialogTitle>

        <p className="mt-2 text-sm text-gray-600">Event details go here.</p>

        <div className="mt-4 flex justify-between">
          {i === 1 ? onBack && (
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
          ) : ""}

          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
