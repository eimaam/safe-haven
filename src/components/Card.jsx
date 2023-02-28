import React from 'react'
import dummy from "../assets/accomodation.png"

const Card = ({ title, image }) => {
  return (
    <div className='card'>
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  )
}

export default Card