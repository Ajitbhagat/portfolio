import React from "react";
import "./Home_main.css";

import Intro_img from "../assets/intro-bg.jpg";
import { Link, Outlet } from "react-router-dom";
import resume from "../assets/resume/AjitBhagat.pdf";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home_main = () => {
  const [text] = useTypewriter({
    words: ["Software Developer"],
    loop: {},
  });

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Intro_img} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Ajit Bhagat</p>
        <h1>
          I'm a <span>{text}</span>
          <span>
            <Cursor />
          </span>
        </h1>
        <div>
          <Link to={resume} className={"btn"}>
            Resume
          </Link>
          <Link to="/contact" className={"btn"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home_main;
