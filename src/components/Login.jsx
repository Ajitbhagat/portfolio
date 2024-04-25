import React from 'react'
import '../components/Login.css'
import { FaLock, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login_ma">
    <div className="login_home">
      <span className="bg-animate"></span>
      {/* <span className="bg-animate2"></span> */}

      <div className="form_box login">
          <h2>Login</h2>
        <form className="form_login" action="#">
          <div className="input_box">
            <input type="text" required />
            <label htmlFor="">Username</label>
            <FaUser className="icon_login" />
          </div>
          <div className="input_box">
            <input type="password" required />
            <label htmlFor="">Password</label>
            <FaLock className="icon_login" />
          </div>
          <button className="btn_login">Login</button>
          <div className="logreg_link">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="info_text login">
        <h2>Welcome Back!</h2>
        <p>It's a Login Page</p>
      </div>
      
    </div>
  </div>

  )
}

export default Login