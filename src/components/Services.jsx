import React from 'react'
import { services } from '../data'
import Card  from "./Card"

const Services = () => {
  return (
    <div id='services'>
        <div className='services'>
            <h2>OUR SERVICES</h2>
            <div className='card--section'>
                {services.map((item, index) => {
                    return <Card title={item.title} image={item.image}/>
                })}
            </div>

        </div>
    </div>
  )
}

export default Services