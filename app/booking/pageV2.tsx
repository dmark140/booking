import React from 'react'
import bgImg from './wallpaperflare.jpg';
import Nav from '../Nav';
import BookingFrontMenu from './BookingFrontMenu';
export default function page() {
  return (
    <>
      <div
        className=' '
        style={{
          // add a background image bgImg center it then fit it center screen
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'darken',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // dark overlay
          height: '100vh',
          width: '100%',
          position: 'absolute',
          top: 0, left: 0,
          zIndex: -1,
        }}
      >
        <Nav className='text-white'/>
        <BookingFrontMenu/>
      </div>
    </>
  )
}
