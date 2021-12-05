import React from "react";
import "./Home.css";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NavbarInner from "../Navbar/NavbarInner";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
function Home() {
  document.title = "Anurag Kumar | Home";
  return (
    <>
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
        <div>
          <div className="layout">
            <div className="home_layout">
              <div>
                <h2>Anurag Kumar</h2>
              </div>
              <div className="type_writer">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Full-stack Web Developer")

                      .pauseFor(1000)

                      .start();
                  }}
                />
              </div>
              <div>
                <Link
                  to="/projects"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button className="project_btn">Projects</button>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1gd1JljsXgZiUBMKsUtqYN8LOV7UWGc6H/view?usp=sharing"
                  style={{
                    textDecoration: "none",
                    color: "#857EE2",
                  }}
                >
                  <button className="reach_btn">Resume</button>
                </a>
              </div>
            </div>
            <div className="anurag_pic_div">
              <img src="./anurag.png" className="anurag_pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
