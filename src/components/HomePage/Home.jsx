import React from "react";
import "./Home.css";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NavbarInner from "../Navbar/NavbarInner";

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
              <div>
                <h3 className="full_stack">Full-Stack Web Developer</h3>
              </div>
              <div>
                <button>Projects</button>
              </div>
              <div>
                {" "}
                <button>Reach Me</button>
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
