import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NavbarInner from "../Navbar/NavbarInner";
import "./Project.css";
function Project() {
  document.title = "Anurag Kumar | Project";
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

        <div className="projects_layout">
          <div>
            <a href="https://healthkart--clone.herokuapp.com/users/web">
              <img
                src="./healthkart.jpg"
                alt="healthkart"
                className="projects_img"
              />
            </a>
          </div>
          <div>
            <a href="https://newegg-clone.herokuapp.com/">
              <img src="./newEgg.png" alt="newEgg" className="projects_img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
