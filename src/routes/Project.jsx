import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Projectlist from '../components/Projectlist'


const Project = () => {
  useEffect(() => {
    document.title = "AjitBhagat | Project";
  },[]);
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of
       my most recent works"/>
       <Projectlist />
       
      <Footer/>
      </div>
  )
}

export default Project