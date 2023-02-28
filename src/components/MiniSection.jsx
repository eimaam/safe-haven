import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const MiniSection = () => {
  return (
    <div id='miniSection'>
        <div className='mini--section'>
          <div>
            <h2>Affordable Rooms for you</h2>
          </div>
          <div>
            <button>
              Explore <HiOutlineArrowNarrowRight />
            </button>

          </div>
        </div>
    </div>
  )
}

export default MiniSection