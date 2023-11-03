import type { NextPage } from "next";
import CardDetails from "./CardDetails";

type ContainerCardFormFilterType = {
  imageDimensions?: string;
};

const ContainerCardFormFilter: NextPage<ContainerCardFormFilterType> = ({
  imageDimensions,
}) => {
  return (
    <div className="flex-1 h-[355px] flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={imageDimensions}
      />
      <CardDetails />
    </div>
  );
};

export default ContainerCardFormFilter;
