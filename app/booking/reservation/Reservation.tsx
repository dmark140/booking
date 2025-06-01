import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ReservationProps {
    page: number
    setPage: (page: number) => void
}

export default function Reservation({ page, setPage }: ReservationProps) {
    return (
        <div className=" bg-white flex flex-col items-center pt-2 pb-10 px-4">
            {/* Step Indicator */}
            <h1 className="text-2xl font-semibold text-center text-[#3B3B98] mb-4 w-full">
                BIGLITE<span className="text-black">Estate.</span>
            </h1>

            <div className="flex items-center justify-center gap-6 mb-4">
                {[1, 2, 3].map((step, index) => (
                    <div
                        key={index}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 1 ? "border-gray-800 text-gray-800" : "border-gray-300 text-gray-400"
                            }`}
                    >
                        {step}
                    </div>
                ))}
            </div>

            {/* Booking Info Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Booking Information</h2>
                <p className="text-gray-400">Please fill up the blank fields below</p>
            </div>

            <div className=" sm:flex w-full  gap-4 justify-center max-w-[1128px] ">
                {/* Property Preview */}
                <div className="rounded-xl overflow-hidden sm:max-w-[420px] w-full">
                    <div
                        className=' '
                        style={{
                            // add a background image bgImg center it then fit it center screen
                            backgroundImage: `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '270px',
                            width: '420px',
                        }}
                    >
                    </div>
                    <div className="p-4 flex justify-between">
                        <div>
                            <h3 className="text-lg font-semibold">Podo Wae</h3>
                            <p className="text-sm text-gray-500">Madiun, Indonesia</p>
                        </div>
                        <p className="text-sm text-gray-800 mt-2 float-right w-fit">
                            <span className="font-semibold">₱3,000</span> for 2 nights
                        </p>
                    </div>
                </div>
                <Separator orientation="vertical" />
                {/* Booking Form */}
                <form className="flex flex-col gap-4 sm:max-w-[320px] w-full ">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <Input type="text" placeholder="" className="mt-1" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <Input type="text" placeholder="" className="mt-1" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <Input type="email" placeholder="" className="mt-1" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <Input type="tel" placeholder="" className="mt-1" />
                    </div>
                </form>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 ">
                <Button
                    onClick={() => setPage(2)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                    Continue to Book
                </Button>
                <Button variant="ghost" className="text-gray-500">
                    Cancel
                </Button>
            </div>
            <p className="hidden">{page}</p>
        </div>
    );
};


