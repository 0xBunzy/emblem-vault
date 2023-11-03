import { Nohemi } from "@/styles/fonts";
import { IHeadline } from "@/types";

export default function Headline({ as, children, className }: IHeadline) {
  const variants: any = {
    h1: `text-[48px] leading-[57.6px] font-[400] ${Nohemi.className} `,
    h2: `text-[40px] leading-[48px] font-[400] ${Nohemi.className}`,
    h3: `text-[32px] leading-[38.4px] font-[400] ${Nohemi.className}`,
    h4: `text-[24px] leading-[28.8px] font-[400] ${Nohemi.className}`,
    h5: `text-[20px] leading-[20px] font-[400] ${Nohemi.className}`,
    h6: `text-[18px] leading-[18px] font-[400] ${Nohemi.className}`,
  };

  const classNow = `${variants[as]} ${className}`;

  return <div className={classNow}>{children}</div>;
}
