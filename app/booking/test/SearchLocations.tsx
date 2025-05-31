// app/components/SearchLocations.tsx
'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
];

export default function SearchLocations() {
    const [search, setSearch] = useState("");
    const [selectedLocation, setSelectedLocation] = useState<string>("");

    const filteredLocations = locations.filter((loc) => {
        const query = search.toLowerCase();
        return (
            loc.city.toLowerCase().includes(query) ||
            loc.house.toLowerCase().includes(query)
        );
    });

    return (
        <div className="max-w-2xl mx-auto p-4">
            {selectedLocation}
            <Input
                placeholder="Search by city or house..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4"
            />

            <div className="grid gap-4 col-span-2">
                {filteredLocations.map((loc, i) => (
                    <Button
                        key={i}
                        variant={"ghost"}
                        className="w-full justify-start"
                        onClick={() => setSelectedLocation(`${loc.city} -> ${loc.house}`)}
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
                    <p className="text-center text-muted-foreground">No results found.</p>
                )}
            </div>
        </div>
    );
}
