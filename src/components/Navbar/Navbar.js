import React from "react";
import styled from "styled-components";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <Outer>
        <div className="Navbar sticky top-0 z-50 grid grid-cols-3 bg-[#1f2428] h-[30px] px-3">
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
      </Outer>
    </>
  );
}
const Outer = styled.div`
  position: "fixed";
`;
export default Navbar;
