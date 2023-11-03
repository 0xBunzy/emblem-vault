import type { NextPage } from "next";
import Typography from "@/components/Typography";

const Colours: NextPage = () => {
  const colors = [
    "green",
    "yellow",
    "orange",
    "red",
    "pink",
    "purple",
    "blue",
    "cyan",
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

  const greyWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  return (
    <div className="[text-decoration:none] relative bg-eclipse-dark w-full flex flex-col items-start justify-start pt-28 pb-[136px] box-border gap-[80px] text-left text-21xl text-main-colors-white font-labels-label-small">
      <div className="self-stretch flex flex-col items-start justify-start gap-[56px]">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[56px] sm:flex-row sm:gap-[10px] sm:items-center sm:justify-start">
          <div className="flex-1 relative leading-[120%]">Eclipse</div>
          <div className="relative text-5xl leading-[120%] text-grayscale-gray-60 text-center">
            Primary Colours
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-center text-lg sm:flex-col sm:gap-[10px] sm:items-start sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative bg-eclipse-dark h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Dark</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                000000
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative bg-main-colors-white box-border h-[120px] border-[1px] border-solid border-greyscale-gray-30" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Light</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                FFFFFF
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[56px] text-center text-lg">
        <div className="relative text-21xl leading-[120%]">Vaults</div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col sm:gap-[10px] sm:items-start sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative bg-bronze shadow-[0px_1px_2px_#fff_inset] h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Bronze</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  FF1A43
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  FF431A
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative bg-bronze h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Iron</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  63FF2C
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  FEF13C
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#ebebfc,_#a2a3ae)] shadow-[0px_1px_2px_#fff_inset] h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Steel</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  1A3FFF
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  1AD6FF
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#2f2f32,_#161617)] shadow-[0px_1px_2px_#fff_inset] h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Valadium</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  1A3FFF
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  1AD6FF
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#5d52a0,_#252436)] shadow-[0px_1px_2px_#fff_inset] h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Mithrill</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  FF1A43
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  FF431A
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#456857,_#1f2924)] shadow-[0px_1px_2px_#fff_inset] h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Adamant</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  63FF2C
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  FEF13C
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] md:flex-col md:gap-[24px] md:items-start md:justify-start sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#decaab,_#fbefdd)] shadow-[0px_1px_2px_#fff_inset] h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gold</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  FF1A43
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  FF431A
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#f4ebdd,_#b0aba2)] shadow-[0px_1px_2px_#fff_inset] h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Titanium</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  FF1A43
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  FF431A
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#2e2e50,_#101323)] shadow-[0px_1px_2px_#fff_inset] h-[120px]" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Cobalt</div>
              <div className="flex flex-row items-start justify-start gap-[4px] text-left text-sm text-grayscale-gray-60">
                <div className="relative leading-[8.5px] font-medium">
                  1A3FFF
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  1AD6FF
                </div>
                <div className="relative leading-[8.5px] font-medium">
                  45º ↗
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[56px] text-sm text-grayscale-gray-60">
        <div className="relative text-21xl leading-[120%] text-main-colors-white text-center">
          Moods
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] md:flex-col md:gap-[24px] md:items-start md:justify-start sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)),_linear-gradient(15.94deg,_#2e504a,_#101a23)] shadow-[0px_1.4px_5.25px_#000] h-10" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Green
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  2E504A
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  101A23
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)),_linear-gradient(15.94deg,_#716139,_#2c1603)] shadow-[0px_1.4px_5.25px_#000] h-10" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Yellow
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  716139
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  2C1603
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)),_linear-gradient(15.94deg,_#714a39,_#2c0a03,_#2c0a03)] shadow-[0px_1.4px_5.25px_#000] h-10" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Orange
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  714A39
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  714A39
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)),_linear-gradient(15.94deg,_#712c2c,_#2c0303)] shadow-[0px_1.4px_5.25px_#000] h-10" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Red
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  712C2C
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  2C0303
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] md:flex-col md:gap-[24px] md:items-start md:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)),_linear-gradient(15.94deg,_#51104a,_#270224)] shadow-[0px_1.4px_5.25px_#000] h-10" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Pink
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  51104A
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  270224
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)),_linear-gradient(15.94deg,_#362a67,_#1b1023)] shadow-[0px_1.4px_5.25px_#000] h-10" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Purple
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium flex items-center w-[49px] shrink-0">
                  362A67
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  1B1023
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)),_linear-gradient(15.94deg,_#24387d,_#111023)] shadow-[0px_1.4px_5.25px_#000] h-10" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Blue
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  25387D
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  111023
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)),_linear-gradient(15.94deg,_#1c446a,_#102123)] shadow-[0px_1.4px_5.25px_#000] h-10" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Cyan
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  1B446A
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  102123
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[56px] text-sm text-grayscale-gray-60">
        <div className="relative text-21xl leading-[120%] text-main-colors-white text-center">
          Fade
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] md:flex-col md:gap-[24px] md:items-start md:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#2e504a_18.23%,_rgba(46,_80,_74,_0))] h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Green
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  2E504A
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  101A23
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#716139_17.71%,_rgba(44,_22,_3,_0))] h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Yellow
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  716139
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  2C1603
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#714a39_17.71%,_rgba(44,_10,_3,_0))] h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Orange
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  714A39
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  714A39
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#712c2c_17.71%,_rgba(44,_3,_3,_0))] h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Red
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  712C2C
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  2C0303
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] md:flex-col md:gap-[24px] md:items-start md:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#51104a_17.71%,_rgba(39,_2,_36,_0))] h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Pink
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  51104A
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  270224
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#362a67_17.71%,_rgba(27,_16,_35,_0))] h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Purple
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium flex items-center w-[49px] shrink-0">
                  362A67
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  1B1023
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#24387d_17.71%,_rgba(17,_16,_35,_0))] h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Blue
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  25387D
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  111023
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative [background:linear-gradient(0deg,_#1c446a_18.23%,_rgba(16,_33,_35,_0))] h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative text-lg leading-[100%] text-main-colors-white text-center">
                Cyan
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  000000
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[8.5px] font-medium">
                  1B446A
                </div>
                <div className="relative leading-[8.5px] font-medium">TO</div>
                <div className="relative leading-[8.5px] font-medium">
                  102123
                </div>
                <div className="relative leading-[8.5px] font-medium">0º ↑</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[56px] text-center">
        <div className="relative leading-[120%]">Greyscale</div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-lg md:flex-col md:gap-[24px] md:items-start md:justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-100 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 100</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                1C1C1E
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-90 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 90</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left flex items-center w-16">
                3A3A3C
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-80 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 80</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                48484A
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-70 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 70</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                636366
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-grayscale-gray-60 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 60</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                8E8E93
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-50 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 50</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                AEAEB2
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-40 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 40</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                C7C7CC
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-30 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 30</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                D1D1D6
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-20 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 20</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                E5E5EA
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch relative bg-greyscale-gray-10 h-3" />
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Gray 10</div>
              <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                F2F2F7
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[56px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[56px] md:flex-col md:gap-[56px] md:items-center md:justify-start">
          <div className="flex-1 relative leading-[120%] md:flex-[unset] md:self-stretch">
            Function
          </div>
          <div className="relative text-5xl leading-[120%] text-grayscale-gray-60 text-center">
            Secondary Colors
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-center text-lg">
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] md:flex-row md:gap-[24px] md:items-start md:justify-start sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-green-green-60 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Green 60</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  248C00
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-green-green-50 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Green 50</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  33C300
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch relative bg-colours-green-green-40 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">{`Green 40 `}</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  63FF2C
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-green-green-30 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Green 30</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  C6FFAC
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-green-green-20 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Green 20</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  E5FFDA
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-yellow-yellow-60 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Yellow 60</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  B5860E
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-yellow-yellow-50 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Yellow 50</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  E0CA00
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch relative bg-colours-yellow-yellow-40 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">{`Yellow 40 `}</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FEF13C
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-yellow-yellow-30 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Yellow 30</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FFF784
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-yellow-yellow-20 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Yellow 20</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FFFAB6
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-orange-orange-60 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Orange 60</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  6F0700
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-orange-orange-50 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Orange 50</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  CD2704
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch relative bg-colours-orange-orange-40 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">{`Orange 40 `}</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FF431A
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-orange-orange-30 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Orange 30</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FF7658
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-orange-orange-20 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Orange 20</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FFB9AA
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-red-red-60 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Red 60</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  7C0016
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-red-red-50 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Red 50</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  CD1435
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch relative bg-colours-red-red-40 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">{`Red 40 `}</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FF1A43
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-red-red-30 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Red 30</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FF7981
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-red-red-20 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Red 20</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FFC1C5
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-pink-pink-60 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Pink 60</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  7C0016
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-pink-pink-50 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Pink 50</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  CD1435
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch relative bg-colours-pink-pink-40 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">{`Pink 40 `}</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FF1A43
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-pink-pink-30 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Pink 30</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FF7981
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-pink-pink-20 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Pink 20</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  FFC1C5
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-purple-purple-60 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Purple 60</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  5F008C
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-purple-purple-50 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Purple 50</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  8B00CD
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch relative bg-colours-purple-purple-40 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">{`Purple 40 `}</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  B61AFF
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-purple-purple-30 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Purple 30</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  DA8AFF
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-purple-purple-20 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Purple 20</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  EBC0FF
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] sm:flex-col sm:gap-[24px] sm:items-start sm:justify-start">
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-blue-blue-60 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Blue 60</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  031886
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-blue-blue-50 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Blue 50</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  0623BB
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] sm:flex-[unset] sm:self-stretch">
              <div className="self-stretch relative bg-colours-blue-blue-40 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">{`Blue 40 `}</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  1A3FFF
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-blue-blue-30 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Blue 30</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  A0B0FF
                </div>
              </div>
            </div>
            <div className="w-[100px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative bg-colours-blue-blue-20 h-3" />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[100%]">Blue 20</div>
                <div className="relative text-sm leading-[8.5px] font-medium text-grayscale-gray-60 text-left">
                  CDD5FF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colours;
