"use client";
import { IPrimaryButton, IDisplayButton } from "../../types";
import { Fragment, useContext } from "react";

export default function Circle({
  title,
  onClick,
  disabled,
  icon,
  isLoading = false,
  color = "primary",
  size = "medium",
  className: string,
}: IPrimaryButton) {
  const variations: any = {
    primary:
      "text-white border-[#F4EBDD] bg-valadium hover:bg-titanium hover:text-black hover:shadow-inner",
    secondary:
      "text-grey-70 border-[#2F2F32] bg-black hover:bg-valadium hover:text-grey-50 hover:shadow-inner",
  };

  const sizes: any = {
    medium:
      "py-4 px-5 rounded-full leading-[8.5px] px-[20px] py-[16px] text-[14px]",
  };

  return (
    <button
      onClick={onClick}
      className={`flex-shrink w-fit font-inter border border-1 transition duration-300 ease-in-out cursor-pointer flex flex-row items-center group ${
        sizes[size]
      } ${variations[color]} ${icon ? "pl-7" : ""}`}
    >
      {icon ? (
        <span className={"relative w-[10px]"}>
          <span className={"absolute -left-4 -top-[10px]"}>{icon}</span>
        </span>
      ) : null}
      <span>{title}</span>
    </button>
  );
}
