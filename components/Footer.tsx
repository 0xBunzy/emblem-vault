import type { NextPage } from "next";
import emblemIcon from "@/public/emblemIcon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <div className="relative bg-eclipse-dark w-full flex flex-col items-center justify-center py-6 px-2.5 box-border text-left text-sm text-grey-50">
      <div className="flex flex-col items-center justify-start gap-[80px]">
        <div className="flex flex-row items-start justify-center gap-[12px]">
          <div className="w-80 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border gap-[40px] text-mini text-grey-70 font-labels-label-small">
            <div className="self-stretch relative h-[50px]">
              <div className="absolute top-[13px] left-[0px] flex flex-row items-center justify-start gap-[7.2px]">
                <img
                  className="relative w-[24.03px] h-6"
                  alt=""
                  src="/emblemIcon.svg"
                />
                <img
                  className="relative w-[102.79px] h-[11.78px]"
                  alt=""
                  src="EmblemVault.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative leading-[24px] capitalize">
              Explore Emblem Markets unique multichain experience. Buy, Sell,
              and Trade digital assets from any blockchain on any blockchain.
              Powered by Emblem Vault technology.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="w-[230px] flex flex-row items-center justify-start py-0 pr-3 pl-0 box-border gap-[12px]">
              <div className="relative bg-grey-80 w-px h-[50px] overflow-hidden shrink-0" />
              <div className="flex-1 relative leading-[8.5px] font-medium">
                Ecosystem
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mini text-greyscale-gray-70 font-labels-label-small">
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://emblem.finance/featured"
                target="_blank"
              >
                Emblem.Finance
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.emblem.markets/"
                target="_blank"
              >
                Emblem.Markets
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.emblem.pro/"
                target="_blank"
              >
                Emblem.Pro
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.coingecko.com/en/coins/circuits-of-value"
                target="_blank"
              >
                COVAL
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="w-[230px] flex flex-row items-center justify-start py-0 pr-3 pl-0 box-border gap-[12px]">
              <div className="relative bg-grey-80 w-px h-[50px] overflow-hidden shrink-0" />
              <div className="flex-1 relative leading-[8.5px] font-medium">
                Tools
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mini text-greyscale-gray-70 font-labels-label-small">
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://docs.emblem.wiki/apis/api-documentation"
                target="_blank"
              >
                APIs
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://emblem.finance/vaults"
                target="_blank"
              >
                Vault Management
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://github.com/EmblemCompany/emblem-vault-solidity/tree/RC1.1/contracts"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="w-[230px] flex flex-row items-center justify-start py-0 pr-3 pl-0 box-border gap-[26px]">
              <div className="relative bg-grey-80 w-px h-[50px] overflow-hidden shrink-0" />
              <div className="flex-1 relative leading-[8.5px] font-medium">
                Team
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mini text-greyscale-gray-70 font-labels-label-small">
              <div className="self-stretch relative leading-[24px] capitalize">
                About
              </div>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.youtube.com/playlist?list=PLSFKZ82mnEvDp-JiNr2kAgQWlPVOCi7MT"
                target="_blank"
              >
                Video Archive
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.youtube.com/playlist?list=PLSFKZ82mnEvDz0k4kxPRGwMcObatIRwjp"
                target="_blank"
              >
                Shows
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="w-[230px] flex flex-row items-center justify-start py-0 pr-3 pl-0 box-border gap-[12px]">
              <div className="relative bg-grey-80 w-px h-[50px] overflow-hidden shrink-0" />
              <div className="flex-1 relative leading-[8.5px] font-medium">
                Info
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mini text-greyscale-gray-70 font-labels-label-small">
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://docs.emblem.wiki/terms-of-service"
                target="_blank"
              >
                Terms of Services
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://docs.emblem.wiki/"
                target="_blank"
              >
                Documentation
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.youtube.com/playlist?list=PLSFKZ82mnEvBNJsqpZs0ErvnLPJaZzp2Z"
                target="_blank"
              >
                Tutorials
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.nfthistory.org/wiki/Emblem_Vault"
                target="_blank"
              >
                Wiki
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.nfthistory.org/wiki/Emblem_Vault"
                target="_blank"
              >
                Sales Bot
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://twitter.com/DocumentingNFT"
                target="_blank"
              >
                Documenting NFTs
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="w-[230px] flex flex-row items-center justify-start py-0 pr-3 pl-0 box-border gap-[12px]">
              <div className="relative bg-grey-80 w-px h-[50px] overflow-hidden shrink-0" />
              <div className="flex-1 relative leading-[8.5px] font-medium">
                Socials
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mini text-greyscale-gray-70 font-labels-label-small">
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://twitter.com/emblemvault"
                target="_blank"
              >
                X
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://discord.gg/N6sj6f8WNU"
                target="_blank"
              >
                Discord
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://www.youtube.com/@emblemvault"
                target="_blank"
              >
                Youtube
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://emblem-vault.medium.com/"
                target="_blank"
              >
                Medium
              </a>
              <a
                className="self-stretch relative leading-[24px] capitalize text-[inherit] [text-decoration:none]"
                href="https://podcasters.spotify.com/pod/show/thevaultpod/"
                target="_blank"
              >
                Podcast
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[18.5px] bg-steel bg-clip-text text-transparent">
            2019 - 2023 Emblem Vault
          </div>
          <div className="flex flex-row items-center justify-start gap-[7.2px]">
            <img
              className="relative w-[24.03px] h-6"
              alt=""
              src="/emblemIcon.svg"
            />
            <img
              className="relative w-[102.79px] h-[11.78px]"
              alt=""
              src="EmblemVault.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
