import * as React from "react"

const Cloudy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="10em"
    height="10em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={22.56}
        y1={21.96}
        x2={39.2}
        y2={50.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.45} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
    </defs>
    <path
      d="M46.5 31.5h-.32a10.49 10.49 0 0 0-19.11-8 7 7 0 0 0-10.57 6 7.21 7.21 0 0 0 .1 1.14A7.5 7.5 0 0 0 18 45.5a4.19 4.19 0 0 0 .5 0h28a7 7 0 0 0 0-14Z"
      stroke="#e6effc"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      fill="url(#a)"
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        values="-3 0; 3 0; -3 0"
        dur="7s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

export default Cloudy
