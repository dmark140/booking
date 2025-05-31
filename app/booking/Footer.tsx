import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-primary-foreground max-w-[1128px] border-t border-gray-200 py-12 mx-auto ">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                {/* Logo and Tagline */}
                <div>
                    <h2 className="text-2xl font-semibold">
                        <span className="text-blue-600">Biglite</span>
                        <span className="text-gray-800">Estates</span>
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Forget Busy Work
                    </p><p className=" text-gray-400">
                        Start Next Vacation
                    </p>
                </div>

                {/* For Beginners */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">For Beginners</h3>
                    <ul className="space-y-2 text-gray-500">
                       
                        <li><a href="#">Start Booking a Room</a></li>
                        <li><a href="#">Use Payments</a></li>
                    </ul>
                </div>

                {/* Explore Us */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Explore Us</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Connect Us */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect Us</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li><a href="mailto:support@staycation.id">support@avianta.tech</a></li>
                        <li><a href="tel:02122081996">095 - 5566 - 7279</a></li>
                        <li>Valenzuela Cagayan De Oro City</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-400 text-sm">
                Copyright 2025 • All rights reserved • Avianta
            </div>
        </footer>
    )
}
