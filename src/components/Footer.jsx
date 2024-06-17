import React from "react";
import "../components/Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaWhatsapp,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import icon from "../assets/favicon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <a href="https://maps.app.goo.gl/QA5xBGg5Uc6kT3fY9">
              <FaHome
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <div>
              <a href="https://maps.app.goo.gl/QA5xBGg5Uc6kT3fY9">
                <p>Shibpur Howrah West Bengal India.</p>
              </a>
            </div>
          </div>
          <div className="phone">
            <h4>
              <a href="https://wa.me/+916291697254">
                <FaPhone
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
              </a>
              <a href="tel:+6291697254">6291697254</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <a href="mailto:ajitbhagat1410@gmail.com">
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
              </a>
              <a href="mailto:ajitbhagat1410@gmail.com">
                ajitbhagat1410@gmail.com
              </a>
            </h4>
          </div>
        </div>

        <div className="right">
          <div>
            <div className="logo   " id="logo">
              <Link className="icon" to={"/"}>
                <img src={icon} />
              </Link>
              <span>𝓐𝓙𝓘𝓣</span>
            </div>
          </div>

          <div className="social">
            <div className=" icon_social facebook">
              <Tippy content="Facebook">
                <span>
                  <a href="https://www.facebook.com/profile.php?id=100077689595570&mibextid=rS40aB7S9Ucbxw6v">
                    <FaFacebook
                      size={30}
                      style={{ color: "white", marginRight: "1rem" }}
                    />
                  </a>
                </span>
              </Tippy>
            </div>

            {/* <div className=" icon_social twitter">
              <Tippy content="Twitter">
                <span>
                  <a href="">
                    <FaXTwitter
                      size={30}
                      style={{ color: "white", marginRight: "1rem" }}
                    />
                  </a>
                </span>
              </Tippy>
            </div> */}

            <div className=" icon_social github">
              <Tippy content="Github">
                <span>
                  <a href="https://github.com/Ajitbhagat">
                    <FaGithub
                      size={30}
                      style={{ color: "white", marginRight: "1rem" }}
                    />
                  </a>
                </span>
              </Tippy>
            </div>

            <div className=" icon_social twitter">
              <Tippy content="Whatsapp">
                <span>
                  <a href="https://wa.me/+916291697254">
                    <FaWhatsapp 
                      size={30}
                      style={{ color: "white", marginRight: "1rem" }}
                    />
                  </a>
                </span>
              </Tippy>
            </div>


            {/* <div className=" icon_social twitter">
              <Tippy content="LinkedIn">
                <span>
                  <a href="https://www.linkedin.com/in/ajitbhagat/">
                    <FaLinkedin
                      size={30}
                      style={{ color: "white", marginRight: "1rem" }}
                    />
                  </a>
                </span>
              </Tippy>
            </div> */}
          </div>
          <div className="web_counter">
            <h2>Visits</h2>
            <a
              class="isDisabled"
              href="https://www.hitwebcounter.com"
              target="_blank"
            >
              <img
                src="https://hitwebcounter.com/counter/counter.php?page=12307891&style=0001&nbdigits=5&type=ip&initCount=0"
                title="Counter Widget"
                Alt="Visit counter For Websites"
                border="0"
              />
            </a>
          </div>
        </div>
       
      </div>
      <div className="f_dev">
      <Link  to={"/"}>
      © 2024 Developed by Ajit kumar bhagat
        </Link>
        </div>
    </div>
  );
};

export default Footer;
