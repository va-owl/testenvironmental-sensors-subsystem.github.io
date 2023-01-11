import * as React from "react"

const Twilight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    width="10em"
    height="10em"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={36.88}
        y1={15.33}
        x2={41.12}
        y2={22.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fcd966" />
        <stop offset={0.45} stopColor="#fcd966" />
        <stop offset={1} stopColor="#fccd34" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={43.79}
        y1={25.17}
        x2={48.21}
        y2={32.83}
        xlinkHref="#a"
      />
      <linearGradient
        id="c"
        x1={36.78}
        y1={24.9}
        x2={39.21}
        y2={29.1}
        xlinkHref="#a"
      />
      <linearGradient
        id="d"
        x1={21.92}
        y1={18.75}
        x2={38.52}
        y2={47.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.45} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
        <animateTransform
          attributeName="gradientTransform"
          type="rotate"
          values="5 32 32; -15 32 32; 5 32 32"
          dur="10s"
          repeatCount="indefinite"
        />
      </linearGradient>
    </defs>
    <path
      d="m35.44 16.87 1.3 2.13a.55.55 0 0 1 .06.5l-.8 2.36a.59.59 0 0 0 .87.7l2.13-1.3a.55.55 0 0 1 .5-.06l2.36.8a.59.59 0 0 0 .7-.87L41.26 19a.55.55 0 0 1-.06-.5l.8-2.36a.59.59 0 0 0-.87-.7L39 16.74a.55.55 0 0 1-.5.06l-2.36-.8a.59.59 0 0 0-.7.87Z"
      stroke="#fcd34d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      fill="url(#a)"
    >
      <animate
        attributeName="opacity"
        values="1; 0; 1"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="m42.27 30.82 2.49.07a.62.62 0 0 1 .46.22l1.53 2a.6.6 0 0 0 1.07-.35l.07-2.49a.62.62 0 0 1 .22-.46l2-1.53a.6.6 0 0 0-.35-1.07l-2.49-.07a.62.62 0 0 1-.46-.22l-1.53-2a.6.6 0 0 0-1.07.35l-.07 2.49a.62.62 0 0 1-.22.46l-2 1.53a.6.6 0 0 0 .35 1.07Z"
      stroke="#fcd34d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      fill="url(#b)"
    >
      <animate
        attributeName="opacity"
        values="1; 0; 1"
        dur="3s"
        begin="-1s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="m35.31 26.35 1.25 1.1a.4.4 0 0 1 .14.31v1.66a.39.39 0 0 0 .69.27l1.1-1.25a.4.4 0 0 1 .31-.14h1.66a.39.39 0 0 0 .27-.69l-1.25-1.1a.4.4 0 0 1-.14-.31v-1.66a.39.39 0 0 0-.69-.27l-1.1 1.25a.4.4 0 0 1-.31.14h-1.66a.39.39 0 0 0-.27.69Z"
      stroke="#fcd34d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      fill="url(#c)"
    >
      <animate
        attributeName="opacity"
        values="1; 0; 1"
        dur="3s"
        begin="-2s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M46.66 36.2a16.66 16.66 0 0 1-16.78-16.55 16.29 16.29 0 0 1 .55-4.15A16.56 16.56 0 1 0 48.5 36.1c-.61.06-1.22.1-1.84.1Z"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      fill="url(#d)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="-5 32 32;15 32 32;-5 32 32"
        dur="10s"
        repeatCount="indefinite"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="-5 32 32; 15 32 32; -5 32 32"
        dur="10s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

export default Twilight
