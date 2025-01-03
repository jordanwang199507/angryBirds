import React from "react";
import "../_styles/yellowBird.css";

const YellowBird = ({ position, focus }) => {
  return (
    <div className={`birdYellow ${position}`}>
      <div className="birdYellow-hair">
        <div className="birdYellow-hair1"></div>
        <div className="birdYellow-hair2"></div>
        <div className="birdYellow-hair3"></div>
        <div className="birdYellow-hair4"></div>
      </div>
      <div className="birdYellow-outline"></div>
      <div className="birdYellow-body">
        <div className="eyeYellow-left">
          <div className={`eyeballYellow-left ${focus}`}></div>
        </div>
        <div className="eyeYellow-right">
          <div className={`eyeballYellow-right ${focus}`}></div>
        </div>
      </div>
      <div className="birdYellow-beak-top"></div>
      <div className="birdYellow-beak-bottom"></div>
      <div className="birdYellow-tail">
        <div className="birdYellow-tail1"></div>
        <div className="birdYellow-tail2"></div>
        <div className="birdYellow-tail3"></div>
        <div className="birdYellow-tail4"></div>
      </div>

      <div className="birdYellow-inner-body">
        <div className="birdYellow-stomach"></div>
      </div>
    </div>
  );
};

export default YellowBird;
