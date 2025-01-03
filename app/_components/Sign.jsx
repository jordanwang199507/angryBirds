import React from "react";
import StarIcon from "@/public/assets/StarIcon";
import { birds } from "../_constant";
import "../_styles/sign.css";

const Sign = ({ index }) => {
  const targetBird = (index) => {
    return birds[index];
  };
  return (
    <div className="sign-outter-container">
      <div className="sign">
        <div className="top-banner">
          <div className="top-banner-left">
            <div className="top-banner-inner-left uppercase">
              <div className="bird-name uppercase font-angryBirdsFont">
                {targetBird(index).name}
              </div>
            </div>
            <div className="top-banner-inner-right"></div>
          </div>
          <div className="top-banner-right">
            <div className="curve"></div>
            <div className="cover"></div>
          </div>
        </div>
        <div className="sign-container">
          <div className="inner-layer">
            <div className="inner-inner-layer">
              <div className="stat-row">
                <div className="stat-title font-angryBirdsFont">DAMAGE</div>
                <div className="stat-stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < targetBird(index).damage ? "#F7FE30" : "#222222"
                      } // Yellow for damage, gray otherwise
                      height={35}
                      width={35}
                    />
                  ))}
                </div>
              </div>
              <div className="stat-row">
                <div className="stat-title font-angryBirdsFont">SPEED</div>
                <div className="stat-stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < targetBird(index).speed ? "#F7FE30" : "#222222"
                      } // Yellow for damage, gray otherwise
                      height={35}
                      width={35}
                    />
                  ))}
                </div>
              </div>
              <div className="stat-row">
                <div className="stat-title font-angryBirdsFont">
                  EFFECTIVENESS
                </div>
                <div className="stat-stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < targetBird(index).effectiveness
                          ? "#F7FE30"
                          : "#222222"
                      } // Yellow for damage, gray otherwise
                      height={35}
                      width={35}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
