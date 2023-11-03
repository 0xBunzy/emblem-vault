import type { NextPage } from "next";

const SearchInactive: NextPage = () => {
  return (
    <input
      className="font-medium focus:outline-none focus:text-white font-inter text-[14px] bg-eclipse-dark w-[593px] h-10 flex flex-row items-start justify-between py-4 pr-3 pl-5 box-border"
      placeholder="Search for items"
      type="text-white"
    />
  );
};

export default SearchInactive;
