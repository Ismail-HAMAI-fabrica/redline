import React from 'react'
// import Footer from '../components/Fouter'
import Navheader from '../components/nav-header'
import  About  from '../components/About'
import Forstarter from '../components/Forstarter'
import Picks from '../components/Picks'
import Footer from '../components/Fouter'
import Feedback from '../components/Feedback'


const Homepage = () => {
  return (
    <>
      <Navheader/>
      <About/>
      <Forstarter/>
      <Picks/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default Homepage
