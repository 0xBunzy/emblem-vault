"use client";
import { IPrimaryButton, IDisplayButton } from "../../types";
import { Fragment, useContext } from "react";

export default function Primary({
  title,
  onClick,
  icon,
  disabled,
  isLoading = false,
  color = "primary",
  size = "medium",
  className: string,
}: IPrimaryButton) {
  const variations: any = {
    primary:
      "text-white border border-1 border-[#F4EBDD] focus:outline-none focus:border-none bg-valadium hover:bg-titanium hover:text-black hover:shadow-inner",
    silver:
      "text-white border border-[1.5px] fill-steel border-[#EBEBFC)] focus:outline-none focus:border-none bg-valadium hover:bg-titanium hover:text-black hover:shadow-inner",
  };

  const sizes: any = {
    medium: "leading-[8.5px] px-[20px] py-[16px] text-[14px]",
  };

  return (
    <button
      onClick={onClick}
      className={`font-inter w-fit gap-[12px] transition duration-300 ease-in-out cursor-pointer flex flex-row items-center group ${
        sizes[size]
      } ${variations[color]} ${icon ? "pl-10" : ""}}`}
    >
      {icon ? (
        <span className={"relative w-[10px]"}>
          <span className={"absolute -left-3 -top-3"}>{icon}</span>
        </span>
      ) : null}
      <span>{title}</span>
    </button>
  );
}
