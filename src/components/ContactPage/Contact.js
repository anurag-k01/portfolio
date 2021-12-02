import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NavbarInner from "../Navbar/NavbarInner";
import "./Contact.css";
function Contact() {
  document.title = "Anurag Kumar | Contact";
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

        <div className="layout">
          <div>
            <h2>Reach Out via Socials</h2>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Contact;
