import { ILabel } from "../../types";

export default function Label({ size = "regular", children }: ILabel) {
  const sizes: any = {
    large: "text-[18px] font-[600]",
    regular: "text-[16px] font-[600]",
    small: "text-[14px] font-[600]",
  };

  return <div className={sizes[size]}>{children}</div>;
}
