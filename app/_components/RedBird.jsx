"use client";
import React from "react";
import "../_styles/redBird.css";

const RedBird = ({ position, focus }) => {
  console.log("Focus prop:", focus);
  return (
    <div className={`birdRed ${position}`}>
      <div className="hair1"></div>
      <div className="hair1-outline"></div>
      <div className="hair2"></div>
      <div className="hair2-outline"></div>
      <div className="bird-body">
        <div className={`eye-left eye-left-${focus}`}>
          <div className={`eyeball-left`}></div>
          {/* <div className={`eyeball-left ${focus}`}></div> */}
        </div>
        <div className="eye-decor-left"></div>
        <div className={`eye-right eye-right-${focus}`}>
          <div className={`eyeball-right`}></div>
        </div>
        <div className="body-decor1"></div>
        <div className="body-decor2"></div>
        <div className="beak-top"></div>
        <div className="beak-bottom"></div>
        <div className="stomach"></div>
      </div>
      <div className="tail1"></div>
      <div className="tail2"></div>
      <div className="tail3"></div>
      <div className="birdRed-inner"></div>
    </div>
  );
};

export default RedBird;
