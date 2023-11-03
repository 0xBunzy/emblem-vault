import type { NextPage } from "next";
import Typography from "@/components/Typography";

const Text: NextPage = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start text-left text-13xl text-eclipse-light font-headlines-h3">
      <div className="self-stretch bg-eclipse-dark flex flex-col items-start justify-start pt-28 px-28 pb-[136px] gap-[80px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[56px]">
          <div className="relative leading-[120%] bg-bronze text-transparent bg-clip-text">
            Headlines
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-5xl">
            <div className="self-stretch bg-greyscale-gray-100 flex flex-row items-center justify-start p-12 gap-[24px]">
              <div className="relative w-[150px] h-[29px]">
                <div className="absolute top-[0px] left-[0px] leading-[120%]">
                  H1
                </div>
              </div>
              <div className="flex-1 relative text-29xl leading-[120%] text-white">
                <Typography.Headline as={"h1"}>
                  Emblem Vault
                </Typography.Headline>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start p-12 gap-[24px]">
              <div className="relative w-[150px] h-[29px]">
                <div className="absolute top-[0px] left-[0px] leading-[120%]">
                  H2
                </div>
              </div>
              <div className="flex-1 relative text-21xl leading-[120%] text-white">
                <Typography.Headline as={"h2"}>
                  Emblem Vault
                </Typography.Headline>
              </div>
            </div>
            <div className="self-stretch bg-greyscale-gray-100 flex flex-row items-center justify-start p-12 gap-[24px]">
              <div className="relative w-[150px] h-[29px]">
                <div className="absolute top-[0px] left-[0px] leading-[120%]">
                  H3
                </div>
              </div>
              <div className="flex-1 relative text-13xl leading-[120%] text-white">
                <Typography.Headline as={"h3"}>
                  Emblem Vault
                </Typography.Headline>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start p-12 gap-[24px]">
              <div className="relative w-[150px] h-[29px]">
                <div className="absolute top-[0px] left-[0px] leading-[120%]">
                  H4
                </div>
              </div>
              <div className="flex-1 relative leading-[120%] text-white">
                <Typography.Headline as={"h4"}>
                  Emblem Vault
                </Typography.Headline>
              </div>
            </div>
            <div className="self-stretch bg-greyscale-gray-100 flex flex-row items-center justify-start p-12 gap-[24px]">
              <div className="relative w-[150px] h-[29px]">
                <div className="absolute top-[0px] left-[0px] leading-[120%]">
                  H5
                </div>
              </div>
              <div className="flex-1 relative text-xl leading-[100%] text-white">
                <Typography.Headline as={"h5"}>
                  Emblem Vault
                </Typography.Headline>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start p-12 gap-[24px]">
              <div className="relative w-[150px] h-[29px]">
                <div className="absolute top-[0px] left-[0px] leading-[120%]">
                  H6
                </div>
              </div>
              <div className="flex-1 relative text-lg leading-[100%] text-white">
                <Typography.Headline as={"h6"}>
                  Emblem Vault
                </Typography.Headline>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[56px]">
          <div className="relative leading-[120%] bg-bronze text-transparent bg-clip-text">
            Headlines
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-xs font-labels-label-extra-small">
            <div className="self-stretch bg-greyscale-gray-100 flex flex-row items-start justify-start p-12 gap-[24px]">
              <div className="relative w-[150px] h-[15px]">
                <div className="absolute top-[1px] left-[0px] leading-[100%] font-semibold [background:linear-gradient(0deg,_#9c99a6,_#484950)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Paragraph Regular
                </div>
              </div>
              <div className="flex-1 relative text-mini leading-[24px] capitalize">
                Emblem Vault color palette and typeface selections are
                meticulously curated to harmonize with the distinct branding of
                each project within our ecosystem.
              </div>
            </div>
            <div className="self-stretch bg-eclipse-dark flex flex-row items-start justify-start p-12 gap-[24px] text-colours-blue-blue-40">
              <div className="relative w-[150px] h-[15px]">
                <div className="absolute top-[1px] left-[0px] leading-[100%] font-semibold [background:linear-gradient(0deg,_#9c99a6,_#484950)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Paragraph Link
                </div>
              </div>
              <div className="flex-1 relative text-mini [text-decoration:underline] leading-[32px]">
                Emblem Vault
              </div>
            </div>
            <div className="self-stretch bg-greyscale-gray-100 flex flex-row items-start justify-start p-12 gap-[24px]">
              <div className="relative w-[150px] h-[15px]">
                <div className="absolute top-[1px] left-[0px] leading-[100%] font-semibold [background:linear-gradient(0deg,_#9c99a6,_#484950)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Paragraph Small
                </div>
              </div>
              <div className="flex-1 relative text-sm leading-[140%]">
                Emblem Vault color palette and typeface selections are
                meticulously curated to harmonize with the distinct branding of
                each project within our ecosystem.
              </div>
            </div>
            <div className="self-stretch bg-eclipse-dark flex flex-row items-start justify-start p-12 gap-[24px] text-colours-blue-blue-40">
              <div className="relative w-[150px] h-[15px]">
                <div className="absolute top-[1px] left-[0px] leading-[100%] font-semibold [background:linear-gradient(0deg,_#9c99a6,_#484950)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Paragraph Small Link
                </div>
              </div>
              <div className="flex-1 relative text-sm [text-decoration:underline] leading-[140%]">
                Emblem Vault
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[56px]">
          <div className="relative leading-[120%] [background:linear-gradient(0deg,_#ebebfc,_#a2a3ae)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Labels
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-xs font-labels-label-extra-small">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start p-12 gap-[24px]">
                <div className="relative w-[150px] h-[15px]">
                  <div className="absolute top-[1px] left-[0px] leading-[100%] font-semibold [background:linear-gradient(0deg,_#9c99a6,_#484950)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Label Large
                  </div>
                </div>
                <div className="flex-1 relative text-lg leading-[100%] font-medium">
                  Emblem Vault Label
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch bg-greyscale-gray-100 flex flex-row items-start justify-start p-12 gap-[24px]">
                <div className="relative w-[150px] h-[15px]">
                  <div className="absolute top-[1px] left-[0px] leading-[100%] font-semibold [background:linear-gradient(0deg,_#9c99a6,_#484950)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Label Regular
                  </div>
                </div>
                <div className="flex-1 relative text-mini leading-[100%] font-medium">
                  Emblem Vault Label
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start p-12 gap-[24px]">
                <div className="relative w-[150px] h-[15px]">
                  <div className="absolute top-[1px] left-[0px] leading-[100%] font-semibold [background:linear-gradient(0deg,_#9c99a6,_#484950)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Label Small
                  </div>
                </div>
                <div className="flex-1 relative text-sm leading-[8.5px] font-medium">
                  Emblem Vault Label
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch bg-greyscale-gray-100 flex flex-row items-start justify-start p-12 gap-[24px]">
                <div className="relative w-[150px] h-[15px]">
                  <div className="absolute top-[1px] left-[0px] leading-[100%] font-semibold [background:linear-gradient(0deg,_#9c99a6,_#484950)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Label Extra Small
                  </div>
                </div>
                <div className="flex-1 relative leading-[100%] font-semibold">
                  Emblem Vault Label
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
