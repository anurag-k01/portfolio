import React from "react";
import "./LeftSidebar.css";

import { Link } from "react-router-dom";
function LeftSidebar() {
  return (
    <div className="leftSideBar">
      <Link to= '/'>
      <div>
        <img src="./doc.png" className="nav_logos" />
      </div>
      </Link>
      <Link to='/github'>
      <div>
        <img src="./github.png" className="nav_logos" />
      </div>
      </Link>
      <Link to='/skills'>
      <div>
        <img src="./skills.png" className="nav_logos" />
      </div>
      </Link>
      <Link to='/projects'>
      <div>
        <img src="./coder.png" className="nav_logos" />
      </div>
      </Link>
      <Link to='/contact'>
      <div>
        <img src="./mail.png" className="nav_logos" />
      </div>
      </Link>
    </div>
  );
}
export default LeftSidebar;
