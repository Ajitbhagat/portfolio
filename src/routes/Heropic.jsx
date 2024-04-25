import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroPhoto from '../components/HeroPhoto'

const Heropic = () => {
  useEffect(() => {
    document.title = "AjitBhagat";
  },[]);
  return (
    <div>
      <Navbar/>
      <HeroPhoto/>
    </div>
  )
}

export default Heropic