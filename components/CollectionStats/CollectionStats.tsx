import type { NextPage } from "next";
import Button from "@/components/Buttons";
import CardIcon from "@/components/Icons/CardIcon";
import CopyIcon from "@/components/Icons/CopyIcon";

const CollectionStats: NextPage = () => {
  return (
    <div className="relative bg-valadium w-full flex flex-row items-center justify-between py-6 px-20 box-border text-left text-small text-eclipse-light">
      <div className="flex flex-row items-center justify-start gap-[40px]">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[140%] bg-titanium bg-clip-text text-transparent">
            Floor Price
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px] text-mini">
            <img
              className="relative w-[24px] h-[24px]"
              alt=""
              src="Rectangle-6.svg"
            />
            <div className="relative leading-[24px] capitalize [text-shadow:0px_4px_15px_#000]">
              12.03
            </div>
            <div className="relative text-sm leading-[140%] text-colours-green-green-40 [text-shadow:0px_4px_15px_#000]">
              +0.99%
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[140%] bg-steel bg-clip-text text-transparent">
            Top Offer
          </div>
          <div className="flex flex-row items-center justify-start text-mini">
            <div className="relative leading-[24px] capitalize [text-shadow:0px_4px_15px_#000]">
              10.33
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[140%] bg-steel bg-clip-text text-transparent">
            24h Vol
          </div>
          <div className="flex flex-row items-center justify-start text-mini">
            <div className="relative leading-[24px] capitalize [text-shadow:0px_4px_15px_#000]">
              1.2K
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[140%] bg-steel bg-clip-text text-transparent">
            Total Vol
          </div>
          <div className="flex flex-row items-center justify-start text-mini">
            <div className="relative leading-[24px] capitalize [text-shadow:0px_4px_15px_#000]">
              840.5K
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[140%] bg-steel bg-clip-text text-transparent">
            24H Sales
          </div>
          <div className="flex flex-row items-center justify-start text-mini">
            <div className="relative leading-[24px] capitalize [text-shadow:0px_4px_15px_#000]">
              106
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[140%] bg-steel bg-clip-text text-transparent">
            Listed Supply
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px] text-mini">
            <div className="relative leading-[24px] capitalize [text-shadow:0px_4px_15px_#000]">
              371
            </div>
            <div className="relative leading-[24px] capitalize [text-shadow:0px_4px_15px_#000]">
              /
            </div>
            <div className="relative leading-[24px] capitalize [text-shadow:0px_4px_15px_#000]">
              7.8K
            </div>
            <div className="relative text-sm leading-[140%] bg-steel bg-clip-text text-transparent ">
              +0.99%
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative leading-[140%] bg-steel bg-clip-text text-transparent">
            Owners
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px] text-mini">
            <div className="relative leading-[24px] capitalize ">3K</div>
            <div className="relative text-sm leading-[140%] bg-steel bg-clip-text text-transparent">
              +39.2%
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end ">
        <div className="flex flex-row items-center justify-start py-4">
          <div className="relative leading-[8.5px] font-medium">
            {" "}
            <Button.Primary
              size={"medium"}
              title={"Copy Link"}
              color={"silver"}
              icon={<CopyIcon className="fill-white" />}
            />
          </div>
        </div>
        <div className="h-10 flex flex-row items-center justify-start ">
          <div className="relative w-[19px] h-[19px]"></div>
          <div className="relative leading-[8.5px] font-medium">
            {" "}
            <Button.Primary
              size={"medium"}
              title={"Get Pass"}
              icon={<CardIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionStats;
