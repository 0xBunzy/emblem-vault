import * as React from "react";
import { SVGProps } from "react";
const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M.262.387v9.167H1.93V.387H.262Zm3.75 0v9.167H5.68V.387H4.012Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Pause;
