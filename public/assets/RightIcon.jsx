import React from "react";

const RightIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
      style={{
        zIndex: 1,
      }}
      {...props}
    >
      <path
        fill="#ffffe0"
        d="m4.418 25.276 18.826-9.715c2.405-1.239 2.405-3.27 0-4.51L4.417 1.337C2.012.095.047 1.111.047 3.591v19.43c0 2.48 1.968 3.497 4.37 2.255h.001Z"
      />
    </svg>
  );
};

export default RightIcon;
