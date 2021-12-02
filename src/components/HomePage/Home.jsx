import React from "react";
import "./Home.css";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

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

        <div className="home_layout">
          <h2>Anurag Kumar</h2>
          <h3 className="full_stack">Full-Stack Web Developer</h3>
          <button>Projects</button>
          <button>Reach Me</button>
        </div>
      </div>
    </>
  );
}

export default Home;
