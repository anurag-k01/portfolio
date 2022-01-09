import React from "react";
import {LeftSidebar }from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NavbarInner from "../Navbar/NavbarInner";
import "./Github.css";
function Github() {
  document.title = "Anurag Kumar | Github";
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
        <div className="github_layout">
          <div>
            <h1 className="font-semibold">Check Out My Github</h1>
          </div>
          <div>
            <a href="https://github.com/anurag-k01">
              <button className="view_btn">View Profile</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
