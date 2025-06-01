'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar } from 'lucide-react'
import React from 'react'
import { useRouter } from "next/navigation";

export default function RoomPrice() {

  const router = useRouter();
  const handleContinue = () => {
    router.push("/booking/reservation");
  };


  return (
    <div className='max-w-[487px] border rounded-lg  p-20 gap-4 grid'>

      <div className='w-full text-center'>
        <p>Start Booking</p>
        <p className='font-semibold'>₱1,500 <span className='text-muted-foreground'>per night</span></p>
      </div>
      <div>
        <p>How long would you stay?</p>
        <div className='flex items-center '>
          <Button variant="destructive" className='rounded-r-none'>-</Button>
          <Input className='rounded-none text-center' type='number' defaultValue={2} />
          <Button variant="default" className='rounded-l-none'>+</Button>
        </div>
      </div>

      <div>
        <p>Pick a date</p>
        <div className='flex items-center '>
          <Button variant="default" className='rounded-r-none relative'>
            <Calendar className='absolute text-white' />
            <span className='text-transparent'>-</span>
          </Button>
          <Input className='rounded-none text-center' type='date' />

        </div>
      </div>
      <p>You will pay <span className='font-semibold'>₱3,000</span> for <span className='font-semibold'>2 nights</span></p>
      <Button onClick={handleContinue} className='w-full'>Book Now</Button>
    </div>

  )
}
