import * as React from "react";
import { SVGProps } from "react";
const ETHIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path fill="#BF5AF2" d="M7.296 10 11 5.5l3.704 4.5L11 14.5 7.296 10Z" />
      <path
        stroke="url(#b)"
        strokeWidth={1.077}
        d="M6.88 9.658 6.598 10l.282.342 3.704 4.5.416.506.416-.506 3.704-4.5.282-.342-.282-.342-3.704-4.5L11 4.653l-.416.505-3.704 4.5Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={13.25}
        x2={8.75}
        y1={12.25}
        y2={7.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEBFC" />
        <stop offset={1} stopColor="#A2A3AE" />
      </linearGradient>
      <filter
        id="a"
        width={17.381}
        height={19.572}
        x={0.514}
        y={0.214}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-1.795} />
        <feGaussianBlur stdDeviation={1.795} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_402_10819"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_402_10819"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default ETHIcon;
