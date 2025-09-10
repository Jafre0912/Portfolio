import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'm a Software Developer skilled in MERN, Java, Python, AWS, and Docker.</p>
            <h1>Software Developer</h1>
            <div>
               <Link to="/project" className="btn">Project</Link>
               <Link to="/contact" className="btn btn-light">Contact</Link>   
            </div>
        </div>
    </div>
  )
}

export default Heroimg