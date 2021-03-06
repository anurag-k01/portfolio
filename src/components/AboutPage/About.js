import React from "react";
import { LeftSidebar } from "../LeftSidebar/LeftSidebar";
import Sidebar from "../LeftSidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import NavbarInner from "../Navbar/NavbarInner";
import "./About.css";
import Typewriter from "typewriter-effect";
function About() {
  document.title = "Anurag Kumar | About";
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

        <div className="About_layout">
          <div>
            <h1 className="font-semibold"> About Me</h1>
          </div>
          <div>
            <img src="./anurag.png" alt="anurag" className="anurag_img" />
          </div>
          <div className="about_description">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Full-stack Web Developer")

                  .pauseFor(1000)

                  .start();
              }}
            />
            <p>
              Hi there ! I am Anurag Kumar.Since childhood, I have been helping
              my father in his cyber cafe business and while helping him, I
              developed an interest in computers.
            </p>

            <p>
              After completing my diploma, I heard about Masai School and I took
              my first step to become a Web Developer and fulfill my dream. I am
              very passionate about building attractive web pages and I am
              enthusiastically looking forward to becoming the best in my field.
              You can get in touch with me at anurag.kmr3214@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
