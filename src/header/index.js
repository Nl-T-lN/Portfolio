import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import pandaLogo from "../assets/images/Pandablackbg.png";
import useScrollSpy from "../hooks/useScrollSpy";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const sectionIds = ['home', 'about', 'portfolio', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close menu after clicking
    setActive("false");
    document.body.classList.remove("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <button 
            className="navbar-brand nav_ac logo-scroll-btn" 
            onClick={() => scrollToSection('home')}
          >
            <img src={pandaLogo} alt="Sadharanpanda Logo" className="logo-img" />
            <span className="logo-text">{logotext}</span>
          </button>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <button 
                      onClick={() => scrollToSection('home')} 
                      className={`nav-scroll-btn my-3 ${activeSection === 'home' ? 'active' : ''}`}
                    >
                      Home
                    </button>
                  </li>
                  <li className="menu_item">
                    <button 
                      onClick={() => scrollToSection('about')} 
                      className={`nav-scroll-btn my-3 ${activeSection === 'about' ? 'active' : ''}`}
                    >
                      About
                    </button>
                  </li>
                  <li className="menu_item">
                    <button 
                      onClick={() => scrollToSection('portfolio')} 
                      className={`nav-scroll-btn my-3 ${activeSection === 'portfolio' ? 'active' : ''}`}
                    >
                      Portfolio
                    </button>
                  </li>
                  <li className="menu_item">
                    <button 
                      onClick={() => scrollToSection('contact')} 
                      className={`nav-scroll-btn my-3 ${activeSection === 'contact' ? 'active' : ''}`}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            {socialprofils.github && <a href={socialprofils.github}>Github</a>}
            {socialprofils.linkedin && <a href={socialprofils.linkedin}>LinkedIn</a>}
            </div>
            <p className="copyright m-0">© 2025 {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
