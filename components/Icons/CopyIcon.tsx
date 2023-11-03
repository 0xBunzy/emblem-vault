import * as React from "react";
import { SVGProps } from "react";

const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <path
      d="M4.001.563h6v2.5h-6v-2.5Zm-1.5 4v-3.25H.251l.001 15.5h6.5v-10h7v-5.5h-2.25v3.25h-9Zm5.75 3.75h11.5l.001 13.5h-11.5v-13.5Zm4.751 5.5h3.5v-1.5h-3.5v1.5Zm3.5 4h-5v-1.5h5v1.5Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={10.002}
        x2={10.002}
        y1={21.813}
        y2={0.562}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEBFC" />
        <stop offset={1} stopColor="#A2A3AE" />
      </linearGradient>
    </defs>
  </svg>
);
export default CopyIcon;
