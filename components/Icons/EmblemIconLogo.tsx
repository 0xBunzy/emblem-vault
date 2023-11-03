import * as React from "react";

const EmblemIconLogo = ({
  colorStart,
  colorEnd,
}: {
  colorStart: string;
  colorEnd: string;
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={71} height={71} fill="none">
    <path
      className={"fill-iron"}
      d="M70.3 29.1 41.1 0l-6 6-6-6L0 29.1l6 6-6 6 29.1 29.1 6-6 6 6 29.1-29.1-6-6 6.1-6Zm-5.7 12L54.3 51.5l-6.7-6.7-2.8 2.8 6.7 6.7-10.4 10.3-3.1-3.2 6.7-6.7-2.8-2.8-6.7 6.7-6.7-6.7-2.8 2.8 6.7 6.7-3.2 3.2-10.4-10.3 6.7-6.7-2.8-2.8-6.7 6.7L5.7 41.1 8.8 38l6.7 6.7 2.8-2.8-6.7-6.7 6.7-6.7-2.8-2.8-6.7 6.7-3.2-3.2L16 18.8l6.7 6.7 2.8-2.8-6.7-6.7L29.1 5.7l3.2 3.2-6.7 6.7 2.8 2.8 6.7-6.7 6.7 6.7 2.8-2.8L38 8.8l3.2-3.2L51.5 16l-6.7 6.7 2.8 2.8 6.7-6.7 10.3 10.3-3.2 3.2-6.7-6.7-2.8 2.8 6.7 6.7-6.7 6.7 2.8 2.8 6.7-6.7 3.2 3.2Zm-44.3-6 14.8 14.8 14.8-14.8-14.8-14.8-14.8 14.8Zm14.8 9.2L26 35.1l9.1-9.1 9.1 9.1-9.1 9.2Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={35.15}
        x2={35.15}
        y1={70.2}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={colorStart} />
        <stop offset={1} stopColor={colorEnd} />
      </linearGradient>
    </defs>
  </svg>
);
export default EmblemIconLogo;
