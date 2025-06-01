import Nav from '@/app/Nav'
import React from 'react'
import RoomDetailes from './RoomDetailes'
import AboutTheRoom from './AboutTheRoom'
import RoomPrice from './RoomPrice'
import Footer from '../Footer'

export default function page() {

  return (
    <div>
      <div>
        <Nav className='text-black' />
      </div>
      <RoomDetailes />
      <div className='max-w-[1128px] mx-auto px-4 mt-4 flex gap-4  mb-10 '>
        <div className='max-w-[643px] pr-4'>
          <AboutTheRoom />
        </div>
        <div className='max-w-[487px]'>
          <RoomPrice />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
