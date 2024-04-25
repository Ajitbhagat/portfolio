import React, { useEffect } from "react";
import "../components/Projectlist.css";
import Aos from "aos";
import 'aos/dist/aos.css'; 

const Projectlist = () => {


    useEffect(() => {
      Aos.init({ duration: "1500" });
    }, []);


  return (
    <div className="project_home">
      <h1 className="about pro">Project</h1>
      <div className="box_1" data-aos="zoom-in">
        <h2 className="dec_pro" >EILTTE ATTENDANCE SYSTEM</h2>
        <span className="dec_pro" >Android Studio Platform Tools</span>
      </div>
      <div className="box_1" data-aos="fade-left">
        <h2 className="dec_pro" >HOSPITAL MANAGEMENT APPLICATION</h2>
        <span className="dec_pro" >Android Studio Platform Tools</span>
      </div>
      <div className="box_1" data-aos="zoom-in-right">
        <h2 className="dec_pro" >Chat Apps</h2>
        <span className="dec_pro" >Android Studio Platform Tools</span>
      </div>
      <div className="box_1" data-aos="fade-up">
        <h2 className="dec_pro" >Crud Project</h2>
        <span className="dec_pro">React Js</span>
      </div>
      <div className="box_1" data-aos="fade-down">
        <h2  className="dec_pro" >Crud Project</h2>
        <span className="dec_pro" >Java Database Connectivity</span>
      </div>
      <div className="box_1" data-aos="zoom-in-left">
        <h2 className="dec_pro" >Portfolio</h2>
        <span className="dec_pro" >React js</span>
      </div>
      <div className="box_1" data-aos="zoom-in-right">
        <h2 className="dec_pro" >E-commerce</h2>
        <span className="dec_pro" >React js</span>
      </div>
      <div className="box_1" data-aos="zoom-in-down">
        <h2 className="dec_pro" >Responsive website</h2>
      </div>
    </div>
  );
};

export default Projectlist;
