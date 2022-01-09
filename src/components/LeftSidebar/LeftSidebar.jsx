import React, { useState } from "react";
import "./LeftSidebar.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
function LeftSidebar() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    console.log(toggle);
  };

  return (
    <>
      <div className="leftSideBar">
        <Link to="/">
          <div onClick={handleToggle}>
            <img src="./doc.png" className="nav_logos" />
          </div>
        </Link>
        <Link to="/github">
          <div>
            <img src="./github.png" className="nav_logos" />
          </div>
        </Link>
        <Link to="/skills">
          <div>
            <img src="./skills.png" className="nav_logos" />
          </div>
        </Link>
        <Link to="/projects">
          <div>
            <img src="./coder.png" className="nav_logos" />
          </div>
        </Link>
        <Link to="/contact">
          <div>
            <img src="./mail.png" className="nav_logos" />
          </div>
        </Link>
      </div>
    </>
  );
}
export default LeftSidebar;
