"use client";
import { IPrimaryButton, IDisplayButton, IPlayButton } from "../../types";
import { Fragment, useContext } from "react";

export default function PlayButton({
  onClick,
  disabled,
  icon,
  isLoading = false,
  color = "primary",
  size = "medium",
  className: string,
}: IPlayButton) {
  const PlayButtonVariations: any = {
    primary:
      "bg-valadium rotate-45 text-white border border-1 border-[#F4EBDD] focus:outline-none focus:border-none hover:bg-titanium hover:text-black hover:shadow-inner",
  };

  const hexSizes: any = {
    medium: "h-[24px] w-[24px]",
  };

  return (
    <button
      disabled={(disabled as boolean) || (isLoading as boolean)}
      onClick={onClick}
      className={`flex items-center justify-center transition-all select-none disabled:cursor-not-allowed ${hexSizes[size]} ${PlayButtonVariations[color]}`}
    >
      <span className={"-rotate-45"}>
        {" "}
        {isLoading ? <span className="loading loading-spinner"></span> : icon}
      </span>
    </button>
  );
}
