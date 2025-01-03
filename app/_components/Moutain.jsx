import React from "react";

const Mountain = ({
  color1 = "#15888d",
  color2 = "#149490",
  bottom = 0,
  left = 0,
  height,
  width,
}) => {
  const styles = {
    position: "absolute",
    bottom: `${bottom}%`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `
      linear-gradient(to bottom right, transparent 50%, ${color1} 0),
      linear-gradient(to top right, ${color2} 50%, transparent 0)
    `,
    backgroundSize: "50% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left, right",
  };

  return <div className="mountain" style={styles} />;
};

export default Mountain;
