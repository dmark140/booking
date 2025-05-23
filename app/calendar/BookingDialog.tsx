'use client'

import { format } from 'date-fns'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

interface Property {
  id: string
  name: string
  booked: boolean
}

const properties: Property[] = [
  { id: 'villa1', name: 'Beach Villa 1', booked: false },
  { id: 'villa2', name: 'Beach Villa 2', booked: true },
  { id: 'penthouse', name: 'City Penthouse', booked: false },
  { id: 'suiteA', name: 'Mountain Suite A', booked: true },
  { id: 'suiteB', name: 'Mountain Suite B', booked: false },
]

interface BookingDialogProps {
  date: Date | null
  open: boolean
  onClose: () => void
}

export default function BookingDialog({ date, open, onClose }: BookingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Booking</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <Label>Date</Label>
            <Input type="text" value={date ? format(date, 'PPP') : ''} readOnly />
          </div>
          <div>
            <Label>Booked By</Label>
            <Input type="text" placeholder="John Doe" required />
          </div>
          <div>
            <Label>Select Property</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a property" />
              </SelectTrigger>
              <SelectContent>
                {properties.map((property) => (
                  <SelectItem
                    key={property.id}
                    value={property.id}
                    disabled={property.booked}
                  >
                    {property.name} {property.booked ? '(Booked)' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Confirm Booking</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
