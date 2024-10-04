import * as React from "react";
const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6z"
      clipRule="evenodd"
    />
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M12.483 8.99a3 3 0 1 0-.88 5.934 3 3 0 0 0 .88-5.935M9.74 7.518a5 5 0 1 1 4.606 8.876A5 5 0 0 1 9.74 7.519M16.5 6.5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default InstagramIcon;
