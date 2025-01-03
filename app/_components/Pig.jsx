import React from "react";
import "../_styles/pig.css";

const Pig = ({ position, index }) => {
  return (
    <div className={`pig ${position} vibrate-${index}`}>
      <div className="pig-body">
        <div className="pigOutterEye-left">
          <div className="pigEye-left">
            <div className={`pigEyeball-left pig-blink-${index}`}></div>
          </div>
        </div>
        <div className="pigEye-decor-left"></div>
        <div className="pigOutterEye-right">
          <div className="pigEye-right">
            <div className={`pigEyeball-right pig-blink-${index}`}></div>
          </div>
        </div>
        <div className="pigEye-decor-right"></div>

        <div className={`pig-nose nose-animation-${index}`}>
          <div className="pig-nostril-left"></div>
          <div className="pig-nostril-right"></div>
        </div>
        <div className="pig-nose-shadow"></div>
      </div>
      <div className="pig-inner-body">
        <div className="pig-inner-body-shadow"></div>
      </div>
      <div className="pigEar-left"></div>
      <div className="pigEar-left-outline"></div>
      <div className="pigEar-right"></div>
      <div className="pigEar-right-outline"></div>
    </div>
  );
};

export default Pig;
