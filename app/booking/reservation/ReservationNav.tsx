'use client' // if you're using Next.js app directory and client-side interactivity

import React, { useState } from 'react'
import Reservation from './Reservation'
import Reservation2 from './Reservation2'
import Reservation3 from './Reservation3'

export default function ReservationNav() {
    const [page, setPage] = useState<number>(1)

    return (
        <div>
            {page === 1 && <Reservation page={page} setPage={setPage} />}
            {page === 2 && <Reservation2 page={page} setPage={setPage} />}
            {page === 3 && <Reservation3  />}
        </div>
    )
}
