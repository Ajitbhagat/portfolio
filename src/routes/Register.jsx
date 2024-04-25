import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Login from '../components/Login'

const Register = () => {
  useEffect(() => {
    document.title = "AjitBhagat | Register";
  },[]);
  return (
    <div>
      <Navbar/>
      <Login/>
      <Footer/>
      </div>
  )
}

export default Register