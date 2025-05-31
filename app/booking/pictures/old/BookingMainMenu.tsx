"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Minus, Plus } from "lucide-react";
import hotel1  from "./pictures/hotel1.png"
import Image from "next/image";
const locations = [
    { city: "Davao City", house: "House 1" },
    { city: "Davao City", house: "House 2" },
    { city: "Cebu City", house: "Villa A" },
];

export default function BookingMainMenu() {
    const [selectedLocation, setSelectedLocation] = useState<string>("");
    const [dateFrom, setDateFrom] = useState<Date | undefined>();
    const [dateTo, setDateTo] = useState<Date | undefined>();

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [childrenAges, setChildrenAges] = useState<number[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [submittedData, setSubmittedData] = useState<any>(null);

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

    const handleSubmit = () => {
        const formData = {
            location: selectedLocation,
            dateFrom,
            dateTo,
            guests: {
                adults,
                children,
                childrenAges,
            },
        };
        setSubmittedData(formData);
    };
    // const [selected, setselected] = useState(0)

    return (
        <div className=" space-y-4 p-4 min-w-[300px] w-full mx-auto bg-background rounded-lg shadow-md ">
            {/* <div>
                    <Button>Overnight Stays</Button>
                    <Button>Day Use</Button>
                </div> */}

            {/* Location Dialog */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full ">
                        {selectedLocation || "Select Location"}
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Title</DialogTitle>
                    <div className=" gap-2 grid  grid-cols-2">
                        {locations.map((loc, i) => (
                            <Button
                                key={i}
                                variant={"ghost"}
                                className="w-full justify-start"
                                onClick={() => setSelectedLocation(`${loc.city} -> ${loc.house}`)}
                            >
                                {/* {loc.city} → {loc.house} */}
                                <div className="flex items-center gap-2">
                                    <Image src={hotel1} alt="Hotel" className="w-8 h-8 rounded-md" />
                                    <div>
                                        <div className="font-semibold">{loc.city} </div>
                                        <div className="text-muted-foreground"> {loc.house}</div>
                                    </div>
                                </div>
                            </Button>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Date Pickers */}
            <div className="grid grid-cols-2 gap-4">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="w-full justify-start">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateFrom ? format(dateFrom, "PPP") : "Date From"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} />
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="w-full justify-start">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateTo ? format(dateTo, "PPP") : "Date To"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar mode="single" selected={dateTo} onSelect={setDateTo} />
                    </PopoverContent>
                </Popover>
            </div>

            {/* Guest Picker */}
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        Guests: {adults} Adults, {children} Children
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

            {/* Submit Button */}
            <Button className="w-full" onClick={handleSubmit}>
                Submit
            </Button>

            {/* Final Output Preview */}
            {submittedData && (
                <div className="mt-4 space-y-2 text-black">
                    <p><strong>Location:</strong> {submittedData.location}</p>
                    <p><strong>Date:</strong> {submittedData.dateFrom ? format(submittedData.dateFrom, 'PPP') : 'N/A'} → {submittedData.dateTo ? format(submittedData.dateTo, 'PPP') : 'N/A'}</p>
                    <p><strong>Guests:</strong> {submittedData.guests.adults} Adult(s), {submittedData.guests.children} Child(ren)</p>
                    {submittedData.guests.children > 0 && (
                        <ul className="list-disc ml-6">
                            {submittedData.guests.childrenAges.map((age: number, i: number) => (
                                <li key={i}>Child #{i + 1} Age: {age}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
