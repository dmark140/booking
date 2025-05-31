'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type HouseInfo = {
    city: string;
    house: string;
    picture: string;
};

type ImageSelectorProps = {
    onSelect: (data: HouseInfo) => void;
};


const locations = [
    {
        city: "Davao City",
        house: "House Bahay",
        picture: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
    },
    {
        city: "Valenzuela City",
        house: "Balay Nga Barato",
        picture: "http://photos.hotelbeds.com/giata/bigger/74/740740/740740a_hb_a_002.jpg"
    },
    {
        city: "Cebu City",
        house: "Laaganan Namo NI!",
        picture: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    },
    {
        city: "Quezon City",
        house: "The Nest",
        picture: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
    },
    {
        city: "Tagaytay",
        house: "Skyline Lodge",
        picture: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npyNaahE8uW4v2aJxIQfkX4HG-TKp7UapC6cIeMYcyYYQ6_PbrXb3HdhwvQdEse8KWqi4uEQPySvV7ghtXiOxVv8FuvA9OQtEffCEhW7Gx3CeJfLlsN3PsSGoKJc4Bs1ILn6XjF=w270-h312-n-k-no"
    },
    {
        city: "Baguio City",
        house: "Pine Retreat",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCegUi4uSZOTVXbfgcM8ijIKIkQDqOIU4Ajy4D4hsEwMrOzw6wMq9oYWIPY_ByxQvRYdw&usqp=CAU"
    },
    {
        city: "Iloilo City",
        house: "Casa Verde",
        picture: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
    },
    {
        city: "Makati City",
        house: "Urban Loft",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xNn0wMh9vSZBBzDCzA09vK1IIHRWUaq4CA&s"
    },
    {
        city: "Pasig City",
        house: "The Glass House",
        picture: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
    },
    {
        city: "Marikina City",
        house: "Riverstone Villa",
        picture: "http://photos.hotelbeds.com/giata/bigger/74/740740/740740a_hb_a_002.jpg"
    }
];

export default function SearchLocations({ onSelect }: ImageSelectorProps) {
    const [search, setSearch] = useState("");
    // const [selectedLocation, setSelectedLocation] = useState<string>("");

    const filteredLocations = locations.filter((loc) => {
        const query = search.toLowerCase();
        return (
            loc.city.toLowerCase().includes(query) ||
            loc.house.toLowerCase().includes(query)
        );
    });

    return (
        <>
            <div className="max-w-2xl mx-auto p-4">
                <Input
                    placeholder="Search by city or house..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-4"
                />
                <div className="grid gap-4 col-span-2 overflow-auto max-h-[60vh]">
                    {filteredLocations.map((loc, i) => (
                        <Button
                            key={i}
                            variant={"ghost"}
                            className="w-full justify-start"
                            onClick={() => onSelect(loc)}
                        // onClick={() => setSelectedLocation(`${loc.city} -> ${loc.house}`)}
                        >
                            {/* {loc.city} → {loc.house} */}
                            <div className="flex items-center gap-2">
                                <Image src={loc.picture} alt="Hotel" className="rounded-md"

                                    style={{ width: '38px', height: '38px', backgroundSize: 'cover', objectFit: 'cover' }}
                                />
                                <div>
                                    <div className="font-semibold">{loc.city} </div>
                                    <div className="text-muted-foreground"> {loc.house}</div>
                                </div>
                            </div>
                        </Button>
                    ))}
                    {filteredLocations.length === 0 && (
                        <div>No results found.</div>
                    )}
                </div>
            </div></>
    );
}
