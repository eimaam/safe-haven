import React from 'react'
import { Link } from 'react-router-dom'
import {FaAt, FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaMailBulk, FaTwitter, FaYoutube} from "react-icons/fa"
import {MdMarkEmailRead} from "react-icons/md"


const Footer = () => {
  return (
    <footer>
      <div id='footer'>
        <div data-aos="fade-up">
          <h3>SafeHaven</h3>
          <p>SafeHaven is home to an amazing experience! We pride ourselves as the best with over a million of positive reviews both offline and online from our Customers.</p>
          <p>The best place one can be to have an amazing time in Diusburg!</p>
        </div>
        <div data-aos="fade-up">
          <h3>Connect with us:</h3>
          <div className='socials'>
            <h4><MdMarkEmailRead /></h4>
            <h4><FaTwitter /></h4>
            <h4><FaLinkedinIn /></h4>
            <h4><FaYoutube /></h4>
            <h4><FaInstagram /></h4>
          </div>
        </div>
        <div data-aos="fade-up">
          <h3>Company:</h3>
          <ul>
            <li><Link>Privacy Policy</Link></li>
            <li><Link>Terms of Use</Link></li>
            <li><Link>API</Link></li>
          </ul>
        </div>
        <div data-aos="fade-up">
          <h3>Quick Links:</h3>
          <ul>
            <li><Link>Resources</Link></li>
            <li><Link>Pricing</Link></li>
            <li><Link>Explore</Link></li>
            <li><Link>Reviews</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <p>All rights reserved. &copy; Safe Haven 2023</p>
      </div>
    </footer>
  )
}

export default Footer