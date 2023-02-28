import React from 'react'
import sectionImage from "../assets/room.jpg"

function Section2() {
  return (
    <section data-aos="fade-up">
      <div id='section'>
        <div className='img'>
          <img src={sectionImage} alt="" />
        </div>
        <div className='notes'>
          <h1>Why Choose us?</h1>
          <ul style={{listStyleType: "disc", paddingLeft: "1rem"}}>
            <li>Spacious Rooms</li>
            <li>Affordable</li>
            <li>Serene Environment</li>
            <li>Fully equipped Gymn</li>
            <li>Large Outdoor Pool</li>
            <li>Local and Intercontinental Dishes</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus, tenetur maxime libero deleniti perferendis in cum voluptatum omnis nisi rerum voluptates repellendus cupiditate impedit! Cum aut enim fugit veniam!</p>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  )
}

export default Section2