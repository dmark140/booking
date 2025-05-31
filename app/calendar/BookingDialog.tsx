'use client'

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
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

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
  const [selectedProperty, setSelectedProperty] = useState<string>('')

  const listOfObj = [
    {
      label: 'Date From',
      type: 'datetime-local',
      value: date ? new Date().toISOString().slice(0, 16) : '',
      readOnly: true
    },
    {
      label: 'Date To',
      type: 'datetime-local',
      value: '',
      readOnly: false
    },
    {
      label: 'Payment Method',
      type: 'text',
      value: 'Gcash',
      readOnly: true
    },
    {
      label: 'Peyment Reference',
      type: 'text',
      value: '',
      readOnly: false
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Booking
            <p className='text-transparent'>{selectedProperty}</p>

          </DialogTitle>
        </DialogHeader>
        <div className='overflow-y-auto max-h-[70vh]'>
          <form className="space-y-4"  >
            {listOfObj.map((field, idx) => (
              <div key={idx}>
                <Label>{field.label}</Label>
                <Input
                  type={field.type}
                  defaultValue={field.value}
                  readOnly={field.readOnly}
                  required
                />
              </div>
            ))}

            <div>
              <Label>Booked By</Label>
              <Input type="text" placeholder="John Doe" required />
            </div>

            <div>
              <Label>Select Property</Label>
              <Select onValueChange={setSelectedProperty}>
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

            <div>
              <Label>Remarks</Label>
              <Textarea placeholder="Additional notes or remarks..." />
            </div>

            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
