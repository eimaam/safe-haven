import React from 'react'
import sectionImage from "../assets/header2.jpeg"

function Section() {
  return (
    <section data-aos="fade-up">
      <div id='section'>
        <div className='notes'>
          <h1>Comfortability & Convinience!</h1>
          <h3>With us you get both comfortability and convinience.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus, tenetur maxime libero deleniti perferendis in cum voluptatum omnis nisi rerum voluptates repellendus cupiditate impedit! Cum aut enim fugit veniam!</p>
          <button>Explore Now</button>
        </div>
        <div className='img'>
          <img src={sectionImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Section