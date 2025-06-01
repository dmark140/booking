import React from 'react'

import {
    BedDouble,
    Users,
    ShowerHead,
    Car,
    Wifi,
    UtensilsCrossed,
    AirVent,
    Tv,
    LucideIcon,
} from "lucide-react";

export type Amenity = {
    icon: LucideIcon;
    label: string;
    value: string | number;
};



export default function AboutTheRoom() {

    const resortAmenities: Amenity[] = [
        { icon: BedDouble, label: "Bedrooms", value: 5 },
        { icon: Users, label: "Max Guests", value: 12 },
        { icon: ShowerHead, label: "Bathrooms", value: 3 },
        { icon: Car, label: "Parking Spaces", value: 4 },
        { icon: Wifi, label: "Wi-Fi", value: "Available" },
        { icon: UtensilsCrossed, label: "Kitchen", value: "Full" },
        { icon: AirVent, label: "Air Conditioning", value: "" },
        { icon: Tv, label: "Smart TVs", value: 2 },
    ];
    return (
        <div className=' w-full grid gap-4'>
            <p className='font-semibold text-blue-950 NavBefore mt-10 text-lg '>About the place</p>
            <p>Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p>
            <p>Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p>
            <p>Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.</p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {resortAmenities.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-2">
                        <Icon className="w-6 h-6 " />
                        <div>
                            <p className="text-sm font-semibold">{value}</p>
                            <p className="text-sm ">{label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
