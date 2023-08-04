import React from "react";
import "./FrenchAppleCake.css";
import Title from "./Title.js";
import Body from "./Body.js";

export default function FrenchAppleCake() {
  return (
    <div className="FrenchAppleCake">
      <div className="container-fluid">
        <Title />
        <Body />
      </div>
    </div>
  );
}
