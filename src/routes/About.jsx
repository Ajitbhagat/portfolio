import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import HeroImg2 from '../components/HeroImg2'

<style>

</style>
const About = () => {

  useEffect(() => {
    document.title = "AjitBhagat | About";
  },[]);

  return (
    <div>
      <Navbar/>
      <HeroImg2   heading="About." text="I'm a Software Developer." />
      <AboutContent/>
      <Footer/>
      </div>
  )
}

export default About