import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import icon from "../assets/favicon.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="logo  ">
        <Link className="icon" to={"/"}>
          <img src={icon} />
        </Link>
        <span>𝓐𝓙𝓘𝓣</span>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skill">Skill</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <button className={'btn'}>
          <Link to="https://production-mern-ecommerce-app-24.vercel.app/">Click me</Link>
        </button>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
