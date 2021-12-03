import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div>
          <span className="sections">File</span>
          <span className="sections">Edit</span>
          <span className="sections">Selection</span>
          <span className="sections">View</span>
          <span className="sections">Go</span>
          <span className="sections">Run</span>
          <span className="sections">Terminal</span>
          <span className="sections">Help</span>
        </div>
        <div className="middleTitle">Anurag Kumar - Visual Studio Code</div>
        <div className="lastTitle">
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="red"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
