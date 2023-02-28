import React from 'react'
import Footer from './Footer'
import { Header } from './Header'
import MiniSection from './MiniSection'
import Nav from './Nav'
import Section from './Section'
import Section2 from './Section2'

const Home = () => {
  return (
    <>
    <Nav />
    <Header />
    <Section />
    <MiniSection />
    <Section2 />
    <Footer />
    </>
  )
}

export default Home