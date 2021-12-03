import React from "react";
import "./NavbarInner.css";
import { Link } from "react-router-dom";
function NavbarInner() {
  return (
    <>
      <div className="navbar_innerContent">
        <Link to="/" style={{ textDecoration: "none", color: "silver" }}>
          <div className="logo_title">
            <div>
              <img src="./react_icon.svg" className="title_icon" />
            </div>
            <div>home.jsx</div>
          </div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "silver" }}>
          <div className="logo_title">
            <div>
              <img src="./html_icon.svg" className="title_icon" />
            </div>
            <div>about.html</div>
          </div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "silver" }}>
          <div className="logo_title">
            <div>
              <img src="./css.svg" className="title_icon" />
            </div>
            <div>contact.css</div>
          </div>
        </Link>
        <Link
          to="/projects"
          style={{ textDecoration: "none", color: "silver" }}
        >
          <div className="logo_title">
            <div>
              <img src="./js_icon.svg" className="title_icon" />
            </div>
            <div >projects.js</div>
          </div>
        </Link>
        <Link to="/skills" style={{ textDecoration: "none", color: "silver" }}>
          <div className="logo_title">
            <div>
              <img src="./typescript.svg" className="title_icon" />
            </div>
            <div>skills.ts</div>
          </div>
        </Link>
        <Link to="/github" style={{ textDecoration: "none", color: "silver" }}>
          <div className="logo_title">
            <div>
              <img src="./markdown_icon.svg" className="title_icon" />
            </div>
            <div>github.md</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default NavbarInner;
