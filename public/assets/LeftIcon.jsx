import React from "react";

const LeftIcon = (props) => {
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
        d="M21.34 1.136 2.513 10.85c-2.405 1.238-2.405 3.27 0 4.51l18.827 9.715c2.405 1.241 4.37.225 4.37-2.255V3.39c0-2.48-1.968-3.497-4.37-2.255Z"
      />
    </svg>
  );
};

export default LeftIcon;
