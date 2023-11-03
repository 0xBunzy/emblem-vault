import type { NextPage } from "next";

const CardDetails: NextPage = () => {
  return (
    <div className="rounded-12xs bg-grey-100 flex flex-col items-start justify-start py-4 px-3 box-border gap-[24px] text-left text-lg text-eclipse-light font-headlines-h6 self-stretch">
      <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
        <div className="flex-1 h-[60px] flex flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[100%]">Frat Pepe</div>
            <div className="relative text-sm leading-[8.5px] font-medium font-labels-label-small text-grey-70">
              Series 1 | Card 11
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-mini font-labels-label-small">
            <div className="relative leading-[100%] bg-steel bg-clip-text text-transparent font-medium">{`Listed Price $230 `}</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px] text-sm font-labels-label-small">
          <div className="relative w-6 h-6">
            <div className="absolute top-[calc(50%_-_8.23px)] left-[0px] rounded-[9999px] bg-colours-orange-orange-40 shadow-[-1px_0px_2px_rgba(0,_0,_0,_0.25)] w-[14.98px] h-[14.93px]" />
            <div className="absolute top-[calc(50%_-_8.23px)] left-[calc(50%_-_0px)] bg-colours-green-green-40 shadow-[-1px_0px_2px_rgba(0,_0,_0,_0.25)] w-[10.56px] h-[10.56px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
            <img
              className="absolute top-[calc(50%_-_10.27px)] right-[0.33px] w-[16.35px] h-[19px]"
              alt=""
              src="Rectangle-6.svg"
            />
            {/* <img
              className="absolute top-[calc(50%_-_8.23px)] left-[0px] shadow-[-1px_0px_2px_rgba(0,_0,_0,_0.25)] "
              alt=""
              src="/Bits/CircleChain.svg"
            />

            <img
              className="absolute top-[calc(50%_-_8.23px)] left-[calc(50%_-_4px)]"
              alt=""
              src="/Bits/GreenChain.svg"
            />
            <img
              className="absolute top-[calc(50%_-_10.27px)] right-[0.33px] w-[16.35px] h-[19px]"
              alt=""
              src="/Bits/Ethereum.svg"
            /> */}
          </div>
          <div className="relative leading-[8.5px] font-medium">All</div>
        </div>
      </div>
      <div className="relative text-sm leading-[8.5px] font-medium  text-grey-70">
        Last Sale $123
      </div>
    </div>
  );
};

export default CardDetails;
