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
          <div className="reachOut_div">
            <h2 className="reachOut">Reach Out via Socials</h2>

            <div className="flex items-center">
              <div className="flex flex-col text-lg  text-grey">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
              </div>
              <div className="flex flex-col space-y-2 pl-9">
                <p className="social">
                  <span>.socials</span>
                  {"  {"}
                </p>
                <div className="flex flex-col space-y-2 pl-9">
                  <p className="text-[#857ee2]">
                    <span className="text-white">email:</span>
                    <span>
                      <a
                        href="mailto:anurag.kmr3214@gmail.com"
                        style={{
                          textDecoration: "none",
                          color: "#857EE2",
                        }}
                      >
                        anurag.kmr3214@gmail.com
                      </a>
                    </span>
                  </p>
                  <p className="text-[#857ee2]">
                    <span className="text-white">github:</span>
                    <span className="text-white">
                      <a
                        href="https://github.com/anurag-k01"
                        style={{
                          textDecoration: "none",
                          color: "#857EE2",
                        }}
                      >
                        anurag-k01
                      </a>
                    </span>
                  </p>
                  <p className="text-[#857ee2]">
                    <span className="text-white">instagram:</span>
                    <span className="text-white">
                      <a
                        href="https://github.com/anurag-k01"
                        style={{
                          textDecoration: "none",
                          color: "#857EE2",
                        }}
                      >
                        anurag-k01
                      </a>
                    </span>
                  </p>
                  <p className="text-[#857ee2]">
                    <span className="text-white">instagram:</span>
                    <span className="text-white">
                      <a
                        href="https://github.com/anurag-k01"
                        style={{
                          textDecoration: "none",
                          color: "#857EE2",
                        }}
                      >
                        anurag-k01
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
