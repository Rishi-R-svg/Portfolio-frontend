import React, { useContext, useState } from "react";
import "./project.css";
import food1 from "../assets/food1.png";
import bussiness from "../assets/Screenshot (5).png";
import travel from "../assets/Screenshot (6).png";
import weather from "../assets/Screenshot (7).png";
import todo from "../assets/Screenshot (8).png";

import { ChangeContext } from "../App";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const { isimgtrue, setbool } = useContext(ChangeContext);

 



  return (
    <div className="project-section">
      <div className="project-heading">
        <h1>What I can build ?</h1>
       <h2>Here's my Projects</h2>
      </div>
      
    <div 
    className="project-container"
    >
      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">
          <div className="project-image">
            <img src={food1} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>E-Commerce</span> Website "Foodzy"
            </h1>
            <h2>
              builded With <span>HTML,CSS,JS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>Made that When i learned Javascript</h3>
            <h4>Still Updating</h4>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/Foodz/">See Live</a> </div>
          </div>
        </div>
        

      </div>

      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">
          <div className="project-image">
            <img src={bussiness} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>Bussiness Management</span> Website
            </h1>
            <h2>
              builded With <span>HTML,CSS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>
              Made that When i learned <span>CSS</span>{" "}
            </h3>
            <h4>Still Updating</h4>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/Business-management/">See Live</a> </div>
          </div>
        </div>
      
      </div>

      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">
          <div className="project-image">
            <img src={travel} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>Travel Agency</span> Website "Amping"
            </h1>
            <h2>
              builded With <span>HTML,CSS,JS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>Made that for practice</h3>
            <h4>Still Updating</h4>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/Travel/">See Live</a> </div>
          </div>
        </div>
      
      </div>

      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">
          <div className="project-image">
            <img src={weather} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>Weather App</span>
            </h1>
            <h2>
              builded With <span>HTML,CSS,JS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>
              Made that When i was learning about{" "}
              <span>API's, Promise's, and Async-Await</span>{" "}
            </h3>
            <h4>Completed</h4>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/Weather/">See Live</a> </div>
          </div>
        </div>
      
      </div>

      <div
        className="project-box"
        style={{
          color: isimgtrue ? "white" : "black",
          backgroundColor: isimgtrue
            ? "rgba(220, 205, 229, 0.097)"
            : "rgba(225, 176, 242, 0.316)",
        }}
      >
        <div className="project-child">
          <div className="project-image">
            <img src={todo} alt="" />
          </div>
          <div className="project-content">
            <h1>
              {" "}
              <span>To-do's list</span> App
            </h1>
            <h2>
              builded With <span>HTML,CSS,JS</span> and fully{" "}
              <span>Responsive</span>.{" "}
            </h2>
            <h3>Made that When i learned Javascript's basics</h3>
            <h4>Completed</h4>
            <div className="project-live-check"> <a href="https://rishi-r-svg.github.io/To-do-s-App/">See Live</a> </div>
          </div>
        </div>
      
      </div>

      </div>
    </div>
  );
};

export default Projects;
