import "./HeroPhoto.css";
import React from "react";
import p from '../assets/ajitphoto.jpg'
const HeroPhoto = () => {
  return (
    <div className="main_pic">
      <div className="box">
        <div className="pic-content">
          <img src={p} alt="" srcset="" />
        
          <h2> 
          {/* Someone Famous */}
            Ajit Bhagat <br />
            {/* <span>Front-end Developer</span> */}
            <span>Software Developer</span>
          </h2>
          <a href="/contact">Hire me</a>
        </div>
      </div>
    </div>
  );
};

export default HeroPhoto;
