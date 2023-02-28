import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialsSection = () => {
  return (
    <div id='miniSection'>
        <div className='mini--section'>
          <div data-aos="fade-up">
            <h2>FIND US ON SOCIALS</h2>
          </div>
          <div className='socials' data-aos="fade-down">
            <h2><FaLinkedin /></h2>
            <h2><FaTwitter /></h2>
            <h2><FaFacebook /></h2>
            <h2><FaYoutube /></h2>
            <h2><FaInstagram /></h2>
          </div>
        </div>
    </div>
  )
}

export default SocialsSection