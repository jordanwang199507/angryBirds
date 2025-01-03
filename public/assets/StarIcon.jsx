import React from "react";

const StarIcon = ({ color, width, height }) => {
  const isYellow = color === "#F7FE30";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 39 37"
      className={isYellow ? "star-animate" : ""}
      style={{
        transition: "fill 0.5s ease, opacity 0.5s ease",
        opacity: 1,
      }}
    >
      <path
        fill={color}
        d="m7.922 36.375 3.047-13.172L.75 14.343l13.5-1.171L19.5.75l5.25 12.422 13.5 1.172-10.219 8.86 3.047 13.171L19.5 29.391 7.922 36.375Z"
      />
    </svg>
  );
};

export default StarIcon;
