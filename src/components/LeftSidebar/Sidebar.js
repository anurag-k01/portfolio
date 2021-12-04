import React, { useState } from "react";
import "./Sidebar.css";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
function Sidebar() {
  const [show, setShow] = useState(true);
  const contents = ["home.jsx","about.html","contact.css","projects.js","skills.ts","github.md"];
  const icons = [
    "https://portfolio-ben-carter.vercel.app/_next/image?url=%2Fimages%2Freact_icon.svg&w=32&q=75",
    "https://portfolio-ben-carter.vercel.app/_next/image?url=%2Fimages%2Freact_icon.svg&w=32&q=75",
    "https://portfolio-ben-carter.vercel.app/_next/image?url=%2Fimages%2Freact_icon.svg&w=32&q=75",
    "https://portfolio-ben-carter.vercel.app/_next/image?url=%2Fimages%2Freact_icon.svg&w=32&q=75",
  ];
  const images = ["./react_icon.svg","./html_icon.svg","./css.svg","./js_icon.svg","typescript.svg","markdown_icon.svg"];

  const toggleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <div className="Sidebar_main">
        <div>
          <div className="explorer">EXPLORER</div>
          <div onClick={toggleShow} className="toggle">
            <div>
              {show ? (
                <KeyboardArrowDownOutlinedIcon className="iconDropdown" />
              ) : (
                <KeyboardArrowRightOutlinedIcon className="iconDropdown" />
              )}
            </div>
            <div className="portfolio_title">PORTFOLIO</div>
          </div>
          {show
            ? contents &&
              contents.map((e, ind) => (
                <div className="tabs">
                  <div className="tab_inner">
                   <div><img src={images[ind]} className="logos" /></div>
                 <div>
                    {e}
                    </div>
                    </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
