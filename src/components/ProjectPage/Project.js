import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NavbarInner from "../Navbar/NavbarInner";
import "./Project.css";
import styled from "styled-components";
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
            <div>
              <h1>Healthkart</h1>
              <p style={{ width: "300px" }}>
                Healthkart is a E-commerce website from where you can buy
                products related to Fitness Stuffs.
              </p>
              <a href="https://healthkart--clone.herokuapp.com/users/web">
                <button className="live_btn">Live Demo</button>
              </a>
              <a href="https://github.com/akifpatel8/HealthKart2.0">
                <button className="source_btn">Source Code</button>
              </a>
            </div>
          </div>
          <div>
            <a href="https://newegg-clone.herokuapp.com/">
              <img src="./newEgg.png" alt="newEgg" className="projects_img" />
            </a>
            <div>
              <h1>Newegg</h1>
              <p style={{ width: "300px" }}>
                Newegg is mostly popular for buying products related to
                computers and its parts. You will get best products related to
                those stuffs.
              </p>

              <a href="https://newegg-clone.herokuapp.com/">
                <button className="live_btn">Live Demo</button>
              </a>
              <a href="https://github.com/anurag-k01/newegg">
                <button className="source_btn">Source Code</button>
              </a>
            </div>
          </div>
          <div style={{ display: "block" }}>
            <div>
              <a href="https://vrbo-clone.vercel.app/">
                <img
                  src="./homepage.jpg"
                  alt="newEgg"
                  className="projects_img"
                />
              </a>
              <div>
                <h1>Vrbo</h1>
                <p style={{ width: "300px" }}>
                  Vrbo is an American vacation rental online marketplace
                  originally known as Vacation Rentals. You can book beach
                  houses,cabin,etc.
                </p>

                <a href="https://vrbo-clone.vercel.app/">
                  <button className="live_btn">Live Demo</button>
                </a>
                <a href="https://github.com/anurag-k01/project-vrbo">
                  <button className="source_btn">Source Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
