import React from 'react'
import Image from 'next/image'
import imsgx from './wallpper.webp'
import BookingMainMenu from './BookingMainMenu'
export default function MainBookingPage() {
    return (
        <div>
            <div className="w-[100vw] h-[50vh] relative">
                <Image
                    src={imsgx}
                    alt="Cartoon graduates jump with happiness"
                    quality="100"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2  
                sm:min-w-[300px]
                sm:max-w-[300px]
                 md:min-w-[500px]
                md:max-w-[500px]
                -translate-y-1/2 text-center text-primary-foreground">
                    <BookingMainMenu />
                </div>
            </div>
        </div>

    )
}
