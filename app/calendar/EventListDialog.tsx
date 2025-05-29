'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

interface EventListDialogProps {
    open: boolean
    onClose: () => void
    events: { title: string }[]
    onSelectEvent: (event: { title: string }) => void
}

export default function EventListDialog({ open, onClose, events, onSelectEvent }: EventListDialogProps) {
    const handleSelect = (event: { title: string }) => {
        onSelectEvent(event)
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={(open) => { if (!open) onClose() }}>
            <DialogContent>
                <DialogTitle>Events</DialogTitle>
                <ul className="space-y-2">
                    {events.map((event, index) => (
                        <li
                            key={index}
                            className="cursor-pointer hover:underline"
                            onClick={() => handleSelect(event)}
                        >
                            {event.title}
                        </li>
                    ))}
                </ul>
            </DialogContent>
        </Dialog>
    )
}
