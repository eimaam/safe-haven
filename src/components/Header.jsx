import React from 'react'
import { MdHotel } from "react-icons/md"

export const Header = () => {
  return (
    <header>
        <div>
            <h1 data-aos="fade-down">Safe Environment & Best Services</h1>
            <h2>A perfect destination for both Business & Leisures!</h2>    
            <button className='cta' data-aos="fade-up">
                BOOK NOW 
                <h3><MdHotel /></h3>
            </button>
        </div>
    </header>
  )
}
