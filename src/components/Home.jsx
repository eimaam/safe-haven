import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import { Header } from './Header'
import MiniSection from './MiniSection'
import Nav from './Nav'
import Section from './Section'
import Services from './Services'
import SocialsSection from './SocialsSection'
import { sectionData } from '../data'

const Home = () => {
  return (
    <>
    <Nav />
    <Header />
    <Section 
    image={sectionData[0].image} 
    button="Explore Now" 
    align={"right"}
    children={
      <>
      <h1>Comfortability & Convinience!</h1>
      <h3>With us you get both comfortability and convinience.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus, tenetur maxime libero deleniti perferendis in cum voluptatum omnis nisi rerum voluptates repellendus cupiditate impedit! Cum aut enim fugit veniam!</p>
      </>
    }
    />
    <MiniSection />
    <Section 
    image={sectionData[1].image} 
    button="Explore Now" 
    align={"left"}
    children={
      <>
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
      </>
    }
    />
    <SocialsSection />
    <Services />
    <Contact />
    <Footer />
    </>
  )
}

export default Home