import * as React from "react";
const MapPinIcon = (props) => (
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
      d="M12 2a8 8 0 0 0-8 8c0 3.098 2.016 6.104 4.226 8.437A29.4 29.4 0 0 0 12 21.773a29.412 29.412 0 0 0 3.774-3.335C17.984 16.103 20 13.097 20 10a8 8 0 0 0-8-8m0 21-.555.832-.003-.002-.007-.005-.023-.015-.082-.057q-.109-.074-.302-.214a31.428 31.428 0 0 1-4.254-3.727C4.484 17.397 2 13.903 2 10a10 10 0 0 1 20 0c0 3.902-2.484 7.396-4.774 9.813a31.4 31.4 0 0 1-4.254 3.726 19 19 0 0 1-.384.27l-.023.016-.007.005-.002.001s-.001.001-.556-.831m0 0 .555.832a1 1 0 0 1-1.11 0z"
      clipRule="evenodd"
    />
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M17 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      clipRule="evenodd"
    />
  </svg>
);
export default MapPinIcon;
