import Typography from "@/components/Typography";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/Buttons";
import Field from "@/components/Inputs/Field";
import LaunchpadRow from "@/components/Launchpad";
import EmblemIconLogo from "@/components/Icons/EmblemIconLogo";
import Pause from "@/components/Icons/Pause";
import Play from "@/components/Icons/Play";
import CardIcon from "@/components/Icons/CardIcon";
import ETHIcon from "@/components/Icons/ETHIcon";
import Footer from "@/components/Footer";
import CollectionStats from "@/components/CollectionStats";
import CopyIcon from "@/components/Icons/CopyIcon";

export default function Home() {
  const colors = [
    "green",
    "yellow",
    "orange",
    "red",
    "pink",
    "purple",
    "blue",
    "cyan",
    "grey",
  ];

  const colorGradients = [
    "bronze",
    "iron",
    "steel",
    "valadium",
    "mithril",
    "adomant",
    "gold",
    "titanium",
    "cobalt",
  ];

  const moodGradients = [
    "mood-green",
    "mood-yellow",
    "mood-red",
    "mood-blue",
    "mood-purple",
    "mood-pink",
    "mood-orange",
    "mood-cyan",
  ];

  const fadeGradients = [
    "fade-green",
    "fade-yellow",
    "fade-orange",
    "fade-red",
    "fade-pink",
    "fade-purple",
    "fade-blue",
    "fade-cyan",
  ];

  const weights = [20, 30, 40, 50, 60];

  const greyWeights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-5 flex flex-col gap-6">
        <Button.Primary size={"medium"} title={"Connect Wallet"} />
        <Button.Primary
          size={"medium"}
          title={"Connect Wallet"}
          icon={<CardIcon />}
        />
        <Button.Primary
          size={"medium"}
          title={"Copy Link"}
          icon={<CopyIcon className="fill-white" />}
          color={"silver"}
        />
        <Button.Circle size={"medium"} title={"Open"} color={"primary"} />
        <Button.Circle size={"medium"} title={"View All"} color={"secondary"} />
        <Button.Circle
          size={"medium"}
          title={"1,926"}
          color={"secondary"}
          icon={<ETHIcon />}
        />
        <Button.PlayButton size={"medium"} icon={<Pause />} color={"primary"} />
        <Button.PlayButton size={"medium"} icon={<Play />} color={"primary"} />
      </div>
      <div className="mb-5">
        <Field />
      </div>
      <CollectionStats />
      <div className="flex flex-col mt-5 items-start self-stretch gap-[56px]">
        <LaunchpadRow />
        <div className="text-[32px] ">
          {" "}
          <Typography.Headline
            className="bg-steel bg-clip-text text-transparent"
            as={"h3"}
          >
            Eclipse
          </Typography.Headline>
        </div>
        <div className="flex items-start self-stretch gap-[24px]">
          <div className="flex flex-col items-start gap-[16px] flex-1">
            <div className={clsx(`h-[120px] self-stretch bg-black`)}></div>
            <div className="flex flex-col items-start gap-[4px]">
              <div className="text-[18px]">dark</div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[16px] flex-1">
            <div className={clsx(`h-[120px] self-stretch bg-white`)}></div>
            <div className="flex flex-col items-start gap-[4px]">
              <div className="text-[18px]">light</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[56px] self-stretch">
        <div className="text-[32px]">
          {" "}
          <Typography.Headline
            className="bg-steel bg-clip-text text-transparent"
            as={"h3"}
          >
            Vaults
          </Typography.Headline>
        </div>
        <div className="flex items-start gap-[24px] self-stretch">
          {colorGradients.map((gradient, i) => {
            return (
              <div
                key={`${gradient}-${i}`}
                className="flex flex-col items-start gap-[16px] flex-1"
              >
                <div
                  className={clsx(
                    `flex h-[80px] justify-end items-center self-stretch bg-${gradient}`
                  )}
                ></div>
                <div className="flex flex-col items-start gap-[4px]">
                  {gradient}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[56px] self-stretch">
        <div className="text-[32px]">
          {" "}
          <Typography.Headline
            className="bg-steel bg-clip-text text-transparent"
            as={"h3"}
          >
            Moods
          </Typography.Headline>
        </div>
        <div className="flex items-start gap-[24px] self-stretch">
          {moodGradients.map((gradient, i) => {
            return (
              <div
                key={`${gradient}-${i}`}
                className="flex flex-col items-start gap-[16px] flex-1"
              >
                <div
                  className={clsx(
                    `flex h-[40px] justify-end items-center self-stretch bg-${gradient}`
                  )}
                ></div>
                <div className="flex flex-col items-start gap-[4px]">
                  {gradient}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[56px] self-stretch">
        <div className="text-[32px]">
          {" "}
          <Typography.Headline
            className="bg-steel bg-clip-text text-transparent"
            as={"h3"}
          >
            Fade
          </Typography.Headline>
        </div>
        <div className="flex items-start gap-[24px] self-stretch">
          {fadeGradients.map((gradient, i) => {
            return (
              <div
                key={`${gradient}-${i}`}
                className="flex flex-col items-start gap-[16px] flex-1"
              >
                <div
                  className={clsx(
                    `flex h-[40px] justify-end items-center self-stretch bg-${gradient}`
                  )}
                ></div>
                <div className="flex flex-col items-start gap-[4px]">
                  {gradient}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[56px] self-stretch">
        <div className="text-[32px]">
          {" "}
          <Typography.Headline
            className="bg-steel bg-clip-text text-transparent"
            as={"h3"}
          >
            Function
          </Typography.Headline>
        </div>
        <div className="flex flex-col items-start gap-[40px] self-stretch">
          {colors.map((color, i) => {
            return (
              <div
                key={`${color}-${i}`}
                className="flex items-start gap-[24px] self-stretch"
              >
                {weights.map((weight, i) => {
                  return (
                    <div
                      key={`${color}-${i}-${weight}`}
                      className="flex flex-col items-start gap-[16px] flex-1"
                    >
                      <div
                        className={clsx(
                          `h-[12px] self-stretch bg-${color}-${weight}`
                        )}
                      ></div>
                      <div className="flex flex-col items-start gap-[4px]">
                        {color} {weight}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[56px] self-stretch">
        <div className="text-[32px]">
          {" "}
          <Typography.Headline
            className="bg-steel bg-clip-text text-transparent"
            as={"h3"}
          >
            Greyscale
          </Typography.Headline>
        </div>
        <div className="flex items-start gap-[24px] self-stretch">
          {greyWeights.map((weight, i) => {
            return (
              <div
                key={`${weight}-${i}`}
                className="flex flex-col items-start gap-[16px] flex-1"
              >
                <div
                  className={clsx(`h-[12px] self-stretch bg-grey-${weight}`)}
                ></div>
                <div className="flex flex-col items-start gap-[4px]">
                  <div className="text-[18px]">grey {weight}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[56px] self-stretch">
        <div className="text-[32px]">
          {" "}
          <Typography.Headline
            className="bg-steel bg-clip-text text-transparent"
            as={"h3"}
          >
            Icons
          </Typography.Headline>
        </div>
        <div className="flex items-start gap-[24px] self-stretch">
          <EmblemIconLogo colorStart={"#000000"} colorEnd={"#FFFFFF"} />
          <EmblemIconLogo colorStart={"#000000"} colorEnd={"#FFFFFF"} />
          <EmblemIconLogo colorStart={"#000000"} colorEnd={"#FFFFFF"} />
          <EmblemIconLogo colorStart={"#000000"} colorEnd={"#FFFFFF"} />
          <EmblemIconLogo colorStart={"#000000"} colorEnd={"#FFFFFF"} />
          <EmblemIconLogo colorStart={"#000000"} colorEnd={"#FFFFFF"} />
          <EmblemIconLogo colorStart={"#000000"} colorEnd={"#FFFFFF"} />
        </div>
      </div>
      <div className="mb-5"></div>
      <Typography.Headline as={"h1"}>Emblem Vault</Typography.Headline>
      <Typography.Headline as={"h2"}>Emblem Vault</Typography.Headline>
      <Typography.Headline as={"h3"}>Emblem Vault</Typography.Headline>
      <Typography.Headline as={"h4"}>Emblem Vault</Typography.Headline>
      <Typography.Headline as={"h5"}>Emblem Vault</Typography.Headline>
      <Typography.Headline as={"h6"}>Emblem Vault</Typography.Headline>
      <Typography.Label size={"large"}>Emblem Vault</Typography.Label>
      <Typography.Label size={"regular"}>Emblem Vault</Typography.Label>
      <Typography.Label size={"small"}>Emblem Vault</Typography.Label>
      <Typography.Paragraph variant={"regular"} size={"large"}>
        Emblem Vault
      </Typography.Paragraph>
      <Typography.Paragraph variant={"bold"} size={"large"}>
        Emblem Vault
      </Typography.Paragraph>
      <Typography.Paragraph variant={"link"} size={"large"}>
        Emblem Vault
      </Typography.Paragraph>
      <Footer />
    </main>
  );
}
