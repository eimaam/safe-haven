import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div id='nav'>
            <div>
                <h1>Safe Haven</h1>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
                <li>
                    <Link to="/">Services</Link>
                </li>
                <li>
                    <Link to="/">Book Now</Link>
                </li>
            </ul>
            <div>
                <button>
                    Login
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Nav