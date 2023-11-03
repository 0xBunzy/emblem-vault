import * as React from "react";
import { SVGProps } from "react";
const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        width={7.37}
        height={12.529}
        x={2.669}
        y={11.192}
        fill="#BF5AF2"
        rx={2}
        transform="rotate(-39.154 2.67 11.192)"
      />
      <rect
        width={6.37}
        height={11.529}
        x={3.373}
        y={11.264}
        stroke="url(#b)"
        rx={1.5}
        transform="rotate(-39.154 3.373 11.264)"
      />
    </g>
    <g filter="url(#c)">
      <rect
        width={9.305}
        height={15.819}
        x={6.456}
        y={5.772}
        fill="#FFD60A"
        rx={2}
        transform="rotate(-16.792 6.456 5.772)"
      />
      <rect
        width={8.305}
        height={14.819}
        x={7.079}
        y={6.106}
        stroke="url(#d)"
        rx={1.5}
        transform="rotate(-16.792 7.079 6.106)"
      />
    </g>
    <g filter="url(#e)">
      <rect
        width={10.388}
        height={17.659}
        x={12.942}
        y={3.084}
        fill="#32D74B"
        rx={2}
      />
      <rect
        width={9.388}
        height={16.659}
        x={13.442}
        y={3.584}
        stroke="url(#f)"
        rx={1.5}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={6.354}
        x2={6.354}
        y1={23.721}
        y2={11.192}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEBFC" />
        <stop offset={1} stopColor="#A2A3AE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={11.108}
        x2={11.108}
        y1={21.591}
        y2={5.772}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEBFC" />
        <stop offset={1} stopColor="#A2A3AE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={18.136}
        x2={18.136}
        y1={20.743}
        y2={3.084}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEBFC" />
        <stop offset={1} stopColor="#A2A3AE" />
      </linearGradient>
      <filter
        id="a"
        width={17.626}
        height={18.369}
        x={-0.331}
        y={4.538}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_327_10890"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_327_10890"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        width={17.478}
        height={21.833}
        x={3.456}
        y={1.084}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_327_10890"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_327_10890"
          result="shape"
        />
      </filter>
      <filter
        id="e"
        width={14.388}
        height={21.66}
        x={9.942}
        y={1.084}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_327_10890"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_327_10890"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Pause;
