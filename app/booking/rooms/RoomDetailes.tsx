import { Button } from '@/components/ui/button'
import React from 'react'

export default function RoomDetailes() {
    const img1 = 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/361350007.jpg?k=b0e81c16e9075fe4257cc4dcf404f35a78eff7a7a7c43728f3f793477f7be04b&o=&hp=1'
    const img2 = 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/361363650.jpg?k=265f86a1f98639b8f522118ca356f6fc7b0e5c93dd11ea5246bab1ab75400b27&o=&hp=1'
    const img3 = 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/361363644.jpg?k=28bddddeffd2d9a88c5fd1501f206d5f6f01152394e236d83e0ede95c915f470&o=&hp=1'
    const img4 = 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/361350036.jpg?k=e3877595eb383c46de76036959cb0b3cd64296d974dde2f563bfd7ce3e90324b&o=&hp=1'


    return (
        <div className='max-w-[1128px] mx-auto px-4 mt-4'>
            {/* title card */}
            <div className='flex justify-between' >
                <div className='flex gap-2'>
                    <p className='text-muted-foreground'>Home</p> / <p>Booking</p>
                </div>

                <div className=' gap-2 text-center'>
                    <p className='text-2xl font-bold'>Balay Amaya</p> <p className='text-muted-foreground text-sm'>Villanueva Missamis Oriental</p>
                </div>

                <div className='flex gap-2 text-transparent'>
                    <p className=''>Home</p> / <p>Booking</p>
                </div>
            </div>



            <div className="relative flex mt-4 gap-4">
                <div className="flex flex-col w-[643px] gap-4">
                    <div
                        className="rounded-md shadow-md h-[416px] w-[643px]"
                        style={{
                            backgroundImage: `url(${img1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>

                <div className="flex flex-col w-[487px] gap-4">

                    <div
                        className="rounded-md shadow-md h-[200px] w-full"
                        style={{
                            backgroundImage: `url(${img2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>

                    <div className="flex gap-4">
                        <div
                            className="rounded-md shadow-md h-[200px] w-1/2"
                            style={{
                                backgroundImage: `url(${img3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>

                        <div
                            className="rounded-md shadow-md h-[200px] w-1/2"
                            style={{
                                backgroundImage: `url(${img4})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                    </div>
                </div>

                <Button className="absolute right-0 bottom-0 m-4">See all photos</Button>
            </div>


        </div>
    )
}
