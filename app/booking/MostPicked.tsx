'use client'

import React from 'react'

type Hotel = {
    name: string
    location: string
    price: string
    image: string
}

export default function MostPicked() {
    const hotels: Hotel[] = [
        {
            name: 'Hotel Mamba',
            location: 'Davao City',
            price: '₱ 1,500 Per Night',
            image: 'https://gttp.images.tshiftcdn.com/316951/x/0/10-best-hotels-in-davao-city-philippines-near-attractions-amp-airport-family-friendly-with-pool-8.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883',
        },
        {
            name: 'Sunset Bay Resort',
            location: 'La Union',
            price: '₱ 2,000 Per Night',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c5/1f/47/sunset-bay-beach-resort.jpg',
        },
        {
            name: 'The Manor',
            location: 'Baguio',
            price: '₱ 3,500 Per Night',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/361350007.jpg?k=b0e81c16e9075fe4257cc4dcf404f35a78eff7a7a7c43728f3f793477f7be04b&o=',
        },
        {
            name: 'Lime Hotel',
            location: 'El Nido',
            price: '₱ 4,000 Per Night',
            image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqL16S73YIDFFbR7oYDzMflD8TRSIUtVg7C6YF8Y_MaQ9mloTX-RtH8ZzpQ0_EzbOpFBAfUcUWqR90jdhHwviwWmilpyvQlBB864a3iXcYgHJ0g9Z6lhumBHFxcJtqsP8FmcXuQbA=s1360-w1360-h1020-rw',
        },
        {
            name: 'Henann Crystal Sands',
            location: 'Boracay',
            price: '₱ 6,000 Per Night',
            image: 'https://lh3.googleusercontent.com/p/AF1QipPKhf0jWLR8dJHQy6TSTq5stmjvOQND0Dx62fMu=s1360-w1360-h1020-rw',
        },
    ];

    const HotelInfo = ({ name, location, price }: Omit<Hotel, 'image'>) => {
        return (
            <>
                <div className='rounded-b-lg bg-primary text-center content-center absolute top-0 right-0 h-[40px] w-[180px] rounded-bl-lg rounded-tr-lg'>
                    <p className='text-primary-foreground'>{price}</p>
                </div>
                <div className='rounded-b-lg absolute bottom-0 left-0 right-0 h-[60px] px-6 bgGradiant text-primary-foreground'>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-xs opacity-80'>{location}</p>
                </div>
            </>
        );
    };

    return (
        <div className='max-w-[1128px] mx-auto px-4 mt-20 mb-20'>
            <p className='NavBefore'>
                Most Picked
            </p>

            <div className='flex gap-[29px] mt-4'>
                {/* Main Left Card */}
                <div
                    className='relative h-[459px] w-[361px] rounded-lg bg-gray-500'
                    style={{
                        backgroundImage: `url(${hotels[0].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'color-dodge',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <HotelInfo
                        name={hotels[0].name}
                        location={hotels[0].location}
                        price={hotels[0].price}
                    />
                </div>

                {/* Right Grid Cards */}
                <div className='gap-[29px]'>
                    <div className='flex gap-[29px] mb-[29px]'>
                        {[1, 2].map((i) => (
                            <div
                                key={i}
                                className='relative h-[215px] w-[361px] rounded-lg bg-gray-500'
                                style={{
                                    backgroundImage: `url(${hotels[i].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundBlendMode: 'color-dodge',
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <HotelInfo
                                    name={hotels[i].name}
                                    location={hotels[i].location}
                                    price={hotels[i].price}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-[29px]'>
                        {[3, 4].map((i) => (
                            <div
                                key={i}
                                className='relative h-[215px] w-[361px] rounded-lg bg-gray-500'
                                style={{
                                    backgroundImage: `url(${hotels[i].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundBlendMode: 'color-dodge',
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <HotelInfo
                                    name={hotels[i].name}
                                    location={hotels[i].location}
                                    price={hotels[i].price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
