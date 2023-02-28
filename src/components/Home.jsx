import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import { Header } from './Header'
import MiniSection from './MiniSection'
import Nav from './Nav'
import Section from './Section'
import Section2 from './Section2'
import SocialsSection from './SocialsSection'

const Home = () => {
  return (
    <>
    <Nav />
    <Header />
    <Section />
    <MiniSection />
    <Section2 />
    <SocialsSection />
    <Contact />
    <Footer />
    </>
  )
}

export default Home