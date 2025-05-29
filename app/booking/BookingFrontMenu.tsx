'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon, Ghost, MapPin, Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import hotel1 from "./pictures/hotel1.png"


type HouseInfo = {
  city: string;
  house: string;
  picture: string;
};

const locationsPopular = [
    { city: "Davao City", house: "House 1" },
    { city: "Davao City", house: "House 2" },
    { city: "Cebu City", house: "Villa A" },
];

import type { DateRange } from "react-day-picker"
import Image from 'next/image';
import SearchLocations from './SearchLocations';
export default function BookingFrontMenu() {
    const [range, setRange] = React.useState<DateRange | undefined>()
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [childrenAges, setChildrenAges] = useState<number[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>("");
    const [selectedHouse, setSelectedHouse] = useState<HouseInfo | null>(null);
    const handleChildrenChange = (value: number) => {
        setChildren(value);
        setChildrenAges((prev) => {
            const updated = [...prev];
            if (value > prev.length) {
                for (let i = prev.length; i < value; i++) updated.push(0);
            } else {
                updated.length = value;
            }
            return updated;
        });
    };
    return (
        <div className='mt-20 transition-all'>
            <div className='flex flex-col items-center justify-center  h-[80%] '>
                <h1 className='text-7xl text-white   w-[752px] text-center'>Where every journey</h1>
                <h1 className='text-7xl  text-white  w-[752px] text-center'> becomes an adventure</h1>
                <div className=' bg-white rounded-md  text-black flex gap-10 items-center justify-center p-2 mt-20'>
                    <div className='flex gap-2 items-center justify-center'>
                        <Dialog>
                            <DialogTrigger>
                                <div className='flex gap-2 items-center justify-center'>
                                    <MapPin size={20} />
                                    <div >Where you want to go?...</div>
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Pick your destination</DialogTitle>
                                    <DialogDescription>
                                        <SearchLocations onSelect={(houseData) => setSelectedHouse(houseData)}  />
                                    </DialogDescription>
                                </DialogHeader>

                                <DialogFooter className="sm:justify-start ">
                                    <DialogClose asChild>
                                        <Button className='float-right w-full' >
                                            Done
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>

                        </Dialog>

                    </div>
                    <div className='flex gap-4  items-center justify-center' >
                        <Separator orientation='vertical' className='h-6' />
                        <div className='flex gap-2 items-center justify-center '>
                            <Popover>
                                <PopoverTrigger className='flex gap-2 items-center justify-center'>
                                    <CalendarIcon size={20} /><p>
                                        {range ? `${range.from ? range.from.toLocaleDateString() : 'Start Date'} - ${range.to ? range.to.toLocaleDateString() : 'End Date'}` : 'Pick a Date'}
                                    </p>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Calendar mode="range" selected={range} onSelect={setRange} />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Separator orientation='vertical' className='h-6' />
                        <div className='flex gap-2 items-center justify-center'>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" className="w-full">
                                        <Ghost size={20} />  Guests: {adults} Adults, {children} Children
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="space-y-4 w-64">
                                    <div className="flex justify-between items-center">
                                        <span>Adults</span>
                                        <div className="flex items-center gap-2">
                                            <Button size="icon" variant="ghost" onClick={() => setAdults(Math.max(1, adults - 1))}>
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span>{adults}</span>
                                            <Button size="icon" variant="ghost" onClick={() => setAdults(adults + 1)}>
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Children</span>
                                        <div className="flex items-center gap-2">
                                            <Button size="icon" variant="ghost" onClick={() => handleChildrenChange(Math.max(0, children - 1))}>
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span>{children}</span>
                                            <Button size="icon" variant="ghost" onClick={() => handleChildrenChange(children + 1)}>
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    {childrenAges.map((age, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <Label>Age of Child #{i + 1}</Label>
                                            <Input
                                                type="number"
                                                value={age}
                                                min={0}
                                                max={17}
                                                onChange={(e) => {
                                                    const updated = [...childrenAges];
                                                    updated[i] = Math.min(17, Math.max(0, Number(e.target.value)));
                                                    setChildrenAges(updated);
                                                }}
                                            />
                                        </div>
                                    ))}
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Button
                            onClick={() => console.log(range)}
                        > Search </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
