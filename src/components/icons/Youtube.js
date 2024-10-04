import * as React from "react";
const YoutubeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <g
      fill={props.fill}
      fillRule="evenodd"
      clipPath="url(#youtube_svg__a)"
      clipRule="evenodd"
    >
      <path d="M12 3v2h-.075a87 87 0 0 0-1.016.007c-.668.007-1.575.022-2.534.05-.961.029-1.966.071-2.833.134-.888.065-1.548.147-1.877.233a1.78 1.78 0 0 0-1.227 1.25A28 28 0 0 0 2 11.745v.011a28 28 0 0 0 .434 5.093 1.78 1.78 0 0 0 1.227 1.186c.327.087.99.168 1.881.234.867.063 1.872.105 2.833.134a137 137 0 0 0 3.55.057h.37a140 140 0 0 0 3.33-.057c.961-.029 1.966-.071 2.833-.134.888-.065 1.548-.147 1.877-.233a1.78 1.78 0 0 0 1.227-1.25c.298-1.66.444-3.345.438-5.032v-.01a28 28 0 0 0-.438-5.11 1.78 1.78 0 0 0-1.217-1.247c-.34-.08-1.002-.154-1.88-.212a75 75 0 0 0-2.837-.123 149 149 0 0 0-3.333-.051h-.22L12 5V3h.08a107 107 0 0 1 1.032.007c.675.006 1.595.02 2.57.046s2.01.066 2.915.126c.88.059 1.714.141 2.24.27l.035.009a3.78 3.78 0 0 1 2.652 2.784c.328 1.818.487 3.662.476 5.51a30 30 0 0 1-.49 5.49 3.78 3.78 0 0 1-2.638 2.72l-.014.004c-.533.143-1.375.233-2.255.297-.907.066-1.944.11-2.918.14a139 139 0 0 1-3.605.057h-.16a117 117 0 0 1-1.033-.007c-.676-.008-1.596-.022-2.572-.05a71 71 0 0 1-2.918-.14c-.88-.064-1.722-.154-2.255-.297l-.006-.001a3.78 3.78 0 0 1-2.638-2.611 1 1 0 0 1-.022-.096A30 30 0 0 1 0 11.749a30 30 0 0 1 .49-5.532 3.78 3.78 0 0 1 2.638-2.72l.014-.003c.533-.143 1.375-.233 2.255-.297.907-.066 1.944-.11 2.918-.14A138 138 0 0 1 11.92 3z" />
      <path d="M9.247 7.616a1 1 0 0 1 .997-.005l5.75 3.27a1 1 0 0 1 0 1.738l-5.75 3.27a1 1 0 0 1-1.494-.869V8.48a1 1 0 0 1 .497-.864m1.503 2.583v3.102l2.727-1.551z" />
    </g>
    <defs>
      <clipPath id="youtube_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default YoutubeIcon;
