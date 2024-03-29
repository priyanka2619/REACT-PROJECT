import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


export default function Root() {
    return (
        <div className='w-full h-full'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
