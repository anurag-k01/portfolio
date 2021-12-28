import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NavbarInner from "../Navbar/NavbarInner";
import "./Skills.css";
function Skills() {
  document.title = "Anurag Kumar | Skills";
  return (
    <div>
      <Navbar />
      <div className="home_layout_outer">
        <div className="sidebar">
          <div>
            <LeftSidebar />
          </div>
          <div className="sidebar_inner">
            <Sidebar />
          </div>
        </div>
        <div>
          <NavbarInner />
        </div>
        <div className="layout_skills">
          <div>
            <h1 className="font-semibold">My Skills</h1>
          </div>

          <div className="skills_sections">
            <div className="Front-End">
              <h5>Front-End</h5>

              <p>HTML 5</p>
              <p>CSS 3</p>
              <p>Javascript</p>
              <p>ReactJs</p>
              <p>Redux</p>
              <p>Bootstrap</p>
              <p>Material UI</p>

            </div>
            <div className="Back-End">
              <h5>Back-End</h5>
              <p className="backend_p">Node.Js</p>
              <p className="backend_p">Express</p>
              <p className="backend_p">EJS</p>

              <p className="backend_p">MongoDb</p>
            </div>
            <div className="Tools">
              <h5>Tools</h5>
              <p>Github</p>
              <p>VS Code</p>
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
