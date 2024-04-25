import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkillCard from '../components/SkillCard'
import HeroImg2 from '../components/HeroImg2'

const Skill = () => {
  useEffect(() => {
    document.title = "AjitBhagat | Skill";
  },[]);
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="EDUCATION" text="Some of
       my most recent Skills"/>
     <SkillCard/>
      <Footer/>
      </div>
  )
}

export default Skill