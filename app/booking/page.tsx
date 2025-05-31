import React from 'react'
import Nav from '../Nav'
import Landing from './Landing'
import MostPicked from './MostPicked'
import Footer from './Footer'


export default function page() {
    return (
        <div>
            <Nav />
            <Landing />
            <MostPicked/>
            <Footer/>
        </div>
    )
}
