import * as React from "react";
import { SVGProps } from "react";
const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.414 4.846.574.543V9.15l5.84-4.303Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Play;
