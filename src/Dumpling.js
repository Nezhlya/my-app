import React from "react";
import "./Dumpling.css";
import Body from "./Body.js";
import CommentBox from "./CommentBox.js";

export default function Dumpling() {
  return (
   
      <div>
        <div className="page1"></div>
        <div className="page2wrapper">
          <div className="page2">
            <div className="content">
              < Body />
              <CommentBox />
            </div>
          </div>
        </div>
    </div>
  );
}


