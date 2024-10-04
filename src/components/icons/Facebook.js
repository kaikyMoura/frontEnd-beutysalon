import * as React from "react";
const FacebookIcon = (props) => (
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
      d="M10.757 2.757A6 6 0 0 1 15 1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v2h3a1 1 0 0 1 .97 1.242l-1 4A1 1 0 0 1 17 15h-2v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-7H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2V7a6 6 0 0 1 1.757-4.243M15 3a4 4 0 0 0-4 4v3a1 1 0 0 1-1 1H8v2h2a1 1 0 0 1 1 1v7h2v-7a1 1 0 0 1 1-1h2.22l.5-2H14a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h2V3z"
      clipRule="evenodd"
    />
  </svg>
);
export default FacebookIcon;
