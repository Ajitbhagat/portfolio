import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Home_main from '../components/Home_main'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import SkillCard from '../components/SkillCard'
import Form from '../components/Form'
import Projectlist from '../components/Projectlist'

const Home = () => {
  useEffect(() => {
    document.title = "AjitBhagat | Home";
  },[]);
  return (
    <div>
      <Navbar/>
      <Home_main/>
      <AboutContent/>
      <SkillCard/>
      <Projectlist/>
      <Form/>
      
      <Footer/>
      </div>
  )
}

export default Home