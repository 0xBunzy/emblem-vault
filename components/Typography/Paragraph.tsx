import { IParagraph } from "@/types";

export default function Paragraph({
  children,
  size = "small",
  variant = "regular",
}: IParagraph) {
  const sizes: any = {
    xlarge: "text-[24px] font-[400]",
    large: "text-[20px] leading-[32px] ",
    regular: "text-[16px] leading-[32px]",
    small: "text-[14px] leading-[26px] ",
  };

  const variants: any = {
    regular: "font-[400]",
    bold: "font-[700]",
    link: "font-[400] text-blue-30 underline cursor-pointer",
  };

  const classNow = `font-metropolis ${sizes[size]} ${variants[variant]}`;

  return <p className={classNow}>{children}</p>;
}
