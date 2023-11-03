import type { NextPage } from "next";
import ContainerCardFormFilter from "./ContainerCardFormFilter";

type AppRowType = {
  imageDimensions?: string;
};

const LaunchpadRow: NextPage<AppRowType> = ({ imageDimensions }) => {
  return (
    <section className="w-1440 flex flex-row items-center justify-start gap-[12px] sm:flex-col sm:gap-[12px] sm:items-center sm:justify-start">
      <ContainerCardFormFilter imageDimensions="/frame-2048@2x.png" />
      <ContainerCardFormFilter imageDimensions="/frame-20481@2x.png" />
      <ContainerCardFormFilter imageDimensions="/frame-20482@2x.png" />
      <ContainerCardFormFilter imageDimensions="/frame-20483@2x.png" />
      <ContainerCardFormFilter imageDimensions="/frame-20484@2x.png" />
      <ContainerCardFormFilter imageDimensions="/frame-20485@2x.png" />
      <ContainerCardFormFilter imageDimensions="/frame-20481@2x.png" />
    </section>
  );
};

export default LaunchpadRow;
