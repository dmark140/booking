import { Button } from '@/components/ui/button'
import bgImg from './wallpaperflare.jpg';
import React from 'react'
import { Clapperboard, MapPlus, Tent } from 'lucide-react';

export default function Landing() {
    return (
        <div><div className='max-w-[1128px] mx-auto mt-20 flex'>
            <div className='px-4'>
                <div className='text-4xl font-bold mb-10 text-blue-950 '>
                    <p className='mb-4'>Forget Busy Work,</p>
                    <p>Start Next Vacation</p>
                </div>
                <div className=' opacity-60 mb-8 w-[368px] mt-10'>
                    We provide what you need to enjoy your
                    holiday with family. Time to make another
                    memorable moments.
                </div>

                <Button className='w-[368px] mt-10'>Show me</Button>

                <div className='text-xs flex gap-4'>
                    <div className='mt-10 flex text-center  items-center'>
                        <Tent />10,420+ Travelers
                    </div>
                    <div className='mt-10 flex text-center  items-center'>
                        <Clapperboard />500+ Treasures
                    </div>
                    <div className='mt-10 flex text-center  items-center'>
                        <MapPlus />32 Locations
                    </div>
                </div>
            </div>
            <div className='relative w-full ml-20   text-transparent'>
                <div
                    className='rounded-3xl rounded-tl-[100px] rounded-br-[100px] '
                    style={{
                        // add a background image bgImg center it then fit it center screen
                        backgroundImage: `url(${bgImg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'darken',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', // dark overlay
                        height: '412px',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                >
                </div>
                _______________________________________________
            </div>
        </div>
        </div>
    )
}
