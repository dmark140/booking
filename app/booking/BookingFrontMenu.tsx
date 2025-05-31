'use client'
import React from 'react'
import Nbsp from '../Nbsp';
import MainSelection from './MainSelection';
export default function BookingFrontMenu() {
    return (
        <div className='mt-20 transition-all'>
            <div className='flex flex-col items-center justify-center  h-[80%] '>
                {/* <h1 className='text-5xl text-white   w-[752px] text-center'>Your Home, Your Getaway</h1> */}
                <h1 className='text-6xl flex w-fit  text-white  font-serif  text-center'>Where every<Nbsp /><div className='NavBefore2'> journey</div></h1>
                <h1 className='text-6xl flex w-fit   text-white  font-serif text-center'> becomes an<Nbsp /><div className='NavBefore2'> adventure</div></h1>
                <div className='mt-20'></div>
                <MainSelection />
            </div>
        </div>
    )
}
