import React from "react";

const Facebook = ({ fill, ...props }) => {
  return (
    <svg version="1.1" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
      />
    </svg>
  );
};

Facebook.defaultProps = {
  fill: "#FFF",
};

export default Facebook;
