import React from "react";
import "./SkillCard.css";
import Java from "../assets/Skill_pic/java.svg";
import SQL from "../assets/Skill_pic/sql.svg";
import SDLC from "../assets/Skill_pic/sdlcpng.png";
import JDBC from "../assets/Skill_pic/jdbc.jpg";
import HTML from "../assets/Skill_pic/html.svg";
import CSS from "../assets/Skill_pic/css.png";
import JS from "../assets/Skill_pic/javascript-js.svg";
import REACT_js from "../assets/Skill_pic/reactjs.webp";
import ANDROID_STUDIO from "../assets/Skill_pic/androidstudio.svg";
import C from "../assets/Skill_pic/c.png";
import DS from "../assets/Skill_pic/DS.jpg";
import Firebase from "../assets/Skill_pic/firebase.png";


const SkillCard = () => {
  return (
    <div className="container">
      <h1 className="project-heading">Skills</h1>
      <div className="card__container">
        <div className="card__article card_copy">
          <img className="card__img" src={Java} alt="java" srcset="" />
          <div className="card__data">
            <span class="card__description">Java</span>
            <h2 class="card__title">JAVA</h2>
          </div>
          <span class="top span"></span>
          <span class="right span"></span>
          <span class="bottom span"></span>
          <span class="left span"></span>
        </div>
        <div className="card__article">
          <img className="card__img" src={SQL} alt="sql" srcset="" />
          <div className="card__data">
            <span class="card__description">Structured Query Language</span>
            <h2 class="card__title">SQL</h2>
          </div>
        </div>
        <div className="card__article">
          <img className="card__img" src={SDLC} alt="sdlc" srcset="" />
          <div className="card__data">
            <span class="card__description">
              Software Development Lifecycle
            </span>
            <h2 class="card__title">SDLC</h2>
          </div>
        </div>
        <div className="card__article">
          <img className="card__img" src={JDBC} alt="jdbc" srcset="" />
          <div className="card__data">
            <span class="card__description">Java Database Connectivity</span>
            <h2 class="card__title">JDBC</h2>
          </div>
        </div>
        <div className="card__article">
          <img className="card__img" src={HTML} alt="html" srcset="" />
          <div className="card__data">
            <span class="card__description">HyperText Markup Language</span>
            <h2 class="card__title">HTML</h2>
          </div>
        </div>
        <div className="card__article">
          <img className="card__img" src={CSS} alt="css" srcset="" />
          <div className="card__data">
            <span class="card__description">Cascading Style Sheets</span>
            <h2 class="card__title">CSS</h2>
          </div>
        </div>
        <div className="card__article">
          <img className="card__img" src={JS} alt="js" srcset="" />
          <div className="card__data">
            <span class="card__description">JavaScript</span>
            <h2 class="card__title"> JAVASCRIPT</h2>
          </div>
        </div>
        <div className="card__article">
          <img className="card__img" src={REACT_js} alt="react_js" srcset="" />
          <div className="card__data">
            <span class="card__description">React js</span>
            <h2 class="card__title">REACT JS</h2>
          </div>
        </div>
        <div className="card__article">
          <img
            className="card__img"
            src={ANDROID_STUDIO}
            alt="android studio"
            srcset=""
          />
          <div className="card__data">
            <span class="card__description">Android Studio</span>
            <h2 class="card__title">ANDROID STUDIO</h2>
          </div>
        </div>
        <div className="card__article">
          <img
            className="card__img"
            src={C}
            alt="android studio"
            srcset=""
          />
          <div className="card__data">
            <span class="card__description">C Programming</span>
            <h2 class="card__title">C</h2>
          </div>
        </div>
        <div className="card__article">
          <img
            className="card__img"
            src={DS}
            alt="android studio"
            srcset=""
          />
          <div className="card__data">
            <span class="card__description">Data Structure</span>
            <h2 class="card__title">DATA STRUCTURE</h2>
          </div>
        </div>
        <div className="card__article">
          <img
            className="card__img"
            src={Firebase}
            alt="android studio"
            srcset=""
          />
          <div className="card__data">
            <span class="card__description">Firebase</span>
            <h2 class="card__title">FIREBASE</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
