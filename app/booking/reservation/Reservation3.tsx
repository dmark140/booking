import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";




export default function Reservation3() {
    const router = useRouter();
    const handleContinue = () => {
        router.push("/booking");
    };
    return (
        <div className=" bg-white flex flex-col items-center pt-2 pb-10 px-4 h-[100vh]">
            {/* Step Indicator */}
            <h1 className="text-2xl font-semibold text-center text-[#3B3B98] mb-4 w-full">
                BIGLITE<span className="text-black">Estate.</span>
            </h1>

            <div className="flex items-center justify-center gap-6 mb-4">
                {[1, 2, 3].map((step, index) => (
                    <div
                        key={index}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step === 1 ? " text-white bg-teal-500" : "text-white bg-teal-500"
                            }`}
                    >
                        ✓
                    </div>
                ))}
            </div>



            {/* Booking Info Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Yay! Completed</h2>
            </div>
            <p className="text-muted-foreground w-[396px] text-center sm:pt-[150px]">
                We will inform you via email later
                once the transaction has been accepted
            </p>
            {/* Buttons */}
            <div className="flex gap-4 my-10 pb-10">
                <Button
                    onClick={handleContinue}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                    Go Back To Home
                </Button>
            </div>
        </div>
    );
};


