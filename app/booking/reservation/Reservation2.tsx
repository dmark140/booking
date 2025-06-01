import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


interface ReservationProps {
    page: number
    setPage: (page: number) => void
}


export default function Reservation2({ page, setPage }: ReservationProps) {
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
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 1 ? " text-white bg-teal-500" : "border-gray-300 text-gray-400"
                            }`}
                    >
                        {step === 1 ? "✓" : step}
                    </div>
                ))}
            </div>



            {/* Booking Info Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Booking Information</h2>
                <p className="text-gray-400">Please fill up the blank fields below for <span className="text-black">BANK</span> information</p>
            </div>

            <div className=" sm:flex w-full  gap-4 justify-center max-w-[1128px] ">
                {/* Property Preview */}
                <div className="rounded-xl overflow-hidden sm:max-w-[320px] w-full">
                    <div>
                        <p className="text-gray-700 mb-2">Bank Transfer </p>
                        <p className="text-sm text-gray-800">Tax: <strong>12%</strong></p>
                        <p className="text-sm text-gray-800">Sub total: <strong>₱3,000 PHP</strong></p>
                        <p className="text-sm text-gray-800 mb-6">Total: <strong>₱3,360 PHP</strong></p>

                        <div className="mb-4">
                            {/* <div className="flex items-center gap-2 mb-2">
                                <div
                                    className=' '
                                    style={{
                                        // add a background image bgImg center it then fit it center screen
                                        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '50px',
                                        width: '50px',
                                    }}
                                >
                                </div>
                                <div>
                                    <p className="text-sm font-medium">PayPal</p>
                                    <p className="text-sm">2208 1996</p>
                                    <p className="text-sm">BuildWith Angga</p>
                                </div>
                            </div> */}

                            <div className="flex items-center gap-2">
                                <div
                                    className=' '
                                    style={{
                                        // add a background image bgImg center it then fit it center screen
                                        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSU3hFvvnNeFYhsNG6n4Yz6BU4_xWbFM1dbA&s)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '50px',
                                        width: '50px',
                                    }}
                                >
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Gcash</p>
                                    <p className="text-sm">0955-1111-2222</p>
                                    <p className="text-sm">Av****a</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
               {/* Separator */}
               <div className="border">

               </div>
               
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
                    </div><div>
                        <label className="block text-sm font-medium text-gray-700">Reference #</label>
                        <Input type="tel" placeholder="" className="mt-1" />
                    </div>
                </form>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
                <Button 
                 onClick={() => setPage(3)}
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


