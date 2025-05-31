'use client';

import { DialogTrigger, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { CalendarIcon, Ghost, MapPin, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'
import SearchLocations from './SearchLocations';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@radix-ui/react-menubar';
import { Input } from '@/components/ui/input';
type HouseInfo = {
    city: string;
    house: string;
    picture: string;
};

export default function MainSelection() {
    const [range, setRange] = React.useState<DateRange | undefined>()
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [childrenAges, setChildrenAges] = useState<number[]>([]);
    // const [selectedLocation, setSelectedLocation] = useState<string>("");
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
        <div>

            <div className=' bg-white rounded-md  text-black flex gap-10 items-center justify-center p-2 '>
                <div className='flex gap-2 items-center justify-center'>
                    <Dialog>
                        <DialogTrigger>
                            <div className='flex gap-2 items-center justify-center'>
                                <MapPin size={20} />
                                {selectedHouse ? selectedHouse.city + ' - ' + selectedHouse.house : ' Where you want to go?...'}
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Pick your destination</DialogTitle>
                                <DialogDescription>
                                    <React.Fragment>
                                        <SearchLocations
                                            onSelect={(houseData: HouseInfo) => {
                                                setSelectedHouse(houseData);
                                                const toClose = document.getElementById('toClose');
                                                if (toClose instanceof HTMLElement) {
                                                    toClose.click();
                                                }
                                            }}
                                        />
                                    </React.Fragment>
                                </DialogDescription>
                            </DialogHeader>

                            <DialogFooter className="sm:justify-start ">
                                <DialogClose asChild>
                                    <Button className='float-right w-full' id='toClose' >
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
                                <CalendarIcon size={20} />
                                {range ? `${range.from ? range.from.toLocaleDateString() : 'Start Date'} - ${range.to ? range.to.toLocaleDateString() : 'End Date'}` : 'Pick a Date'}
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
    )
}
