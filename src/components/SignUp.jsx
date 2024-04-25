import React, { useEffect } from 'react'
import "../components/Login.css";
import "../components/SignUp.css";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';
import { MdOutlineEmail } from "react-icons/md";

const SignUp = () => {
  useEffect(() => {
    document.title = "AjitBhagat | SignUp";
  },[]);
  return (
    <>
    <Navbar/>
    <div className="login_ma">
      <div className="login_home">
      <span className="bg-animate2 bg_anim"></span>
      <div className="form_box register">
          <h2>Sign Up</h2>
          <form className="form_login" action="#">
            <div className="input_box">
              <input type="text" required />
              <label htmlFor="">Username</label>
              <FaUser className="icon_login" />
            </div>
            <div className="input_box">
              <input type="text" required />
              <label htmlFor="">Email</label>
              <MdOutlineEmail className="icon_login" />
            </div>
            <div className="input_box">
              <input type="password" required />
              <label htmlFor="">Password</label>
              <FaLock className="icon_login" />
            </div>
            <button className="btn_login">Sign Up</button>
            <div className="logreg_link">
              <p>
                Already have an account? <Link to="/register">Login</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="info_text register">
          <h2>Welcome Back!</h2>
          <p>It's a Register Page</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp