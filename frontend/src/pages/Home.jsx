import React from 'react'
import Nav from '../components/Nav'
import bg from '../assets/homebg.jpg'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}} className='flex flex-col min-h-screen'>
      <Nav/>
      <Hero/>
      <Explore/>
      <Footer/>
    </div>
  )
}

export default Home
