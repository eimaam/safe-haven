import React from 'react'
import { MdHotel } from "react-icons/md"

export const Header = () => {
  return (
    <header>
        <div>
            <h1>Safe Environment & Best Services</h1>
            <h2>Your comfort is what we so much care about!</h2>    
            <button className='cta'>
                BOOK NOW 
                <h3><MdHotel /></h3>
            </button>
        </div>
    </header>
  )
}
