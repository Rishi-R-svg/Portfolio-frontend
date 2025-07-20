import React, { useContext } from "react";
import "./Skills.css";
import { ChangeContext } from "../App";

import html from "../assets/html-5-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import js from "../assets/javascript-svgrepo-com.svg";
import react from "../assets/react-svgrepo-com.svg";
import figma from "../assets/figma-svgrepo-com.svg";
import msoffice from "../assets/office-365-logo-svgrepo-com.svg";
import tailwind from "../assets/tailwind-svgrepo-com.svg";
import adobe from "../assets/adobe-xd-svgrepo-com.svg";
import vscode from "../assets/vs-code-svgrepo-com.svg"

const Skills = () => {
  const { isimgtrue, setbool } = useContext(ChangeContext);
  return (
    <div
      className="skills-section"
      style={{
        color: isimgtrue ? "white" : "black",
        backgroundColor: isimgtrue ? "black" : "white",
      }}
    >
      <div className="heading-box">
        <h1>What are my skills ?</h1>

        <div className="slide-box">
          <div className="slides">
            <div className="box">
              <img src={html} alt="" />
            </div>
            <div className="box">
              <img src={css} alt="" />
            </div>
            <div className="box ">
              <img src={js} alt="" className="js-slide"/>
            </div>
            <div className="box">
              <img src={react} alt="" className="react-slide"/>
            </div>
          </div>
        </div>
      </div>

      <div className="show-skills">
        <h1>
         My core skills and Tools i use
        </h1>
        <div className="all-skills">
          <div className="skill"
          style={{backgroundColor:isimgtrue?'rgba(215, 172, 230, 0.141)':'rgba(199, 166, 211, 0.26)'}}
          >
            <img src={html} alt="" />
            <div className="skill-content">
              <h1>HTML</h1>
              <div className="progress-bar"
                style={{backgroundColor:isimgtrue?'black':'white'}}
              >
                <div className="bar-child html-child"> <div className="progress-num">90%</div> </div>
              </div>
            </div>
          </div>
          <div className="skill"
          style={{backgroundColor:isimgtrue?'rgba(215, 172, 230, 0.141)':'rgba(199, 166, 211, 0.26)'}}
          >
            <img src={css} alt="" />
            <div className="skill-content">
              <h1>CSS</h1>
              <div className="progress-bar"
                style={{backgroundColor:isimgtrue?'black':'white'}}
              >
                <div className="bar-child css-child"><div className="progress-num">95%</div> </div>
              </div>
            </div>
          </div>
          <div className="skill"
          style={{backgroundColor:isimgtrue?'rgba(215, 172, 230, 0.141)':'rgba(199, 166, 211, 0.26)'}}
          >
            <img src={js} alt="" className="js-position"/>
            <div className="skill-content">
              <h1>JAVASCRIPT</h1>
              <div className="progress-bar"
                style={{backgroundColor:isimgtrue?'black':'white'}}
              >
                <div className="bar-child js-child"> <div className="progress-num">80%</div> </div>
              </div>
            </div>
          </div>
          <div className="skill"
          style={{backgroundColor:isimgtrue?'rgba(215, 172, 230, 0.141)':'rgba(199, 166, 211, 0.26)'}}
          >
            <img src={react} alt="" />
            <div className="skill-content">
              <h1>REACT</h1>
              <div className="progress-bar"
              style={{backgroundColor:isimgtrue?'black':'white'}}
              >
                <div className="bar-child react-child"><div className="progress-num">70%</div> </div>
              </div>
            </div>
          </div>




               <div className="skill"
          style={{backgroundColor:isimgtrue?'rgba(215, 172, 230, 0.141)':'rgba(199, 166, 211, 0.26)'}}
          >
            <img src={tailwind} alt="" />
            <div className="skill-content">
              <h1>TAILWIND</h1>
              <div className="progress-bar"
              style={{backgroundColor:isimgtrue?'black':'white'}}
              >
                <div className="bar-child tailwind-child"><div className="progress-num">70%</div> </div>
              </div>
            </div>
          </div>


           <div className="skill"
          style={{backgroundColor:isimgtrue?'rgba(215, 172, 230, 0.141)':'rgba(199, 166, 211, 0.26)'}}
          >
            <img src={figma} alt="" />
            <div className="skill-content">
              <h1>FIGMA</h1>
              <div className="progress-bar"
              style={{backgroundColor:isimgtrue?'black':'white'}}
              >
                <div className="bar-child figma-child"><div className="progress-num">80%</div> </div>
              </div>
            </div>
          </div>


           <div className="skill"
          style={{backgroundColor:isimgtrue?'rgba(215, 172, 230, 0.141)':'rgba(199, 166, 211, 0.26)'}}
          >
            <img src={adobe} alt="" className="office-img" />
            <div className="skill-content">
              <h1>ADOBE XD</h1>
              <div className="progress-bar"
              style={{backgroundColor:isimgtrue?'black':'white'}}
              >
                <div className="bar-child adobe-child"><div className="progress-num">60%</div> </div>
              </div>
            </div>
          </div>


           <div className="skill"
          style={{backgroundColor:isimgtrue?'rgba(215, 172, 230, 0.141)':'rgba(199, 166, 211, 0.26)'}}
          >
            <img src={vscode} alt="" />
            <div className="skill-content">
              <h1>VS CODE</h1>
              <div className="progress-bar"
              style={{backgroundColor:isimgtrue?'black':'white'}}
              >
                <div className="bar-child vscode-child"><div className="progress-num">80%</div> </div>
              </div>
            </div>
          </div>











        </div>
        
          
      </div>
    </div>
  );
};

export default Skills;
