import Nav from '@/app/Nav'
import React from 'react'
import MainSelection from '../MainSelection'
import RoomDetailes from './RoomDetailes'

export default function page() {
  return (
    <div>
      <div>
        <Nav className='text-black' />
      </div>
      <div className='mx-auto '>
        <MainSelection />
      </div>
      <div>
        <RoomDetailes/>
      </div>
    </div>
  )
}
