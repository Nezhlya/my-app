import React from "react";
import "./FrenchAppleCake.css";
import Body from "./Body.js";

export default function FrenchAppleCake() {
  return (
    <div className="FrenchAppleCake">
      <div className="container-fluid">
        <div className="page1"></div>
        <div className="page2wrapper">
          <div className="page2">
            <div className="content">
              < Body />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
