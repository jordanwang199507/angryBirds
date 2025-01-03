import React from "react";
import "../_styles/blackBird.css";

const BlackBird = ({ position, focus }) => {
  return (
    <div className={`birdBlack ${position} `}>
      <div className="birdBlack-hair"></div>
      <div className="birdBlack-hair-outline"></div>
      <div className="birdBlack-body">
        <div className="birdBlack-center">
          <div className="birdBlack-inner-center"></div>
        </div>
        <div className="eyeBlack-outter-left">
          <div className="eyeBlack-left">
            <div className={`eyeballBlack-left ${focus}`}></div>
          </div>
        </div>

        <div className="eyeBlack-outter-right">
          <div className="eyeBlack-right">
            <div className={`eyeballBlack-right ${focus}`}></div>
          </div>
        </div>
      </div>
      <div className="birdBlack-beak-top"></div>
      <div className="birdBlack-beak-bottom"></div>

      <div className="birdBlack-inner-body">
        <div className="birdBlack-stomach"></div>
      </div>
    </div>
  );
};

export default BlackBird;
