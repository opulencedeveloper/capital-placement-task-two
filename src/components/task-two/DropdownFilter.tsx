import { useState } from "react";

const filerOptions = [
  { title: "Applied", value: "1745" },
  { title: "Shortlisted", value: "453" },
  { title: "Technical Interview", value: "123" },
  { title: "Opportunity Browsing", value: "243" },
  { title: "Video Review I", value: "25" },
  { title: "Video Review II", value: "25" },
  { title: "Video Review III", value: "25" },
  { title: "Other", value: "25" },
  { title: "Withdrawal", value: "25" },
];

const DropDownFilter = () => {
  const [selectedFilter, setSelectedFiler] =
    useState<string>("Opportunity Browsing");
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);

  const toggleFilterHandler = () => {
    setToggleFilter(prev => !prev);
  }

  const selectedFilterHandler = (value: string) => {
    setSelectedFiler(value)
    toggleFilterHandler();
  }

  return (
    <div className="relative flex justify-between items-center mb-5 px-5 text-[16px] text-primary-1 font-medium h-[40px] w-[321px] rounded-[16px] bg-white">
      <p>{selectedFilter}</p>
      <button onClick={toggleFilterHandler} className="w-[12px] h-[12px]">
        <img
          src={"./asset/icons/drop-down-blue-icon.svg"}
          className="h-full w-full"
          alt="drop down icon"
        />
      </button>
      {toggleFilter && <div className="absolute top-[50px] rounded-sm right-0 left-0 bg-white">
        {filerOptions.map((optionData, index) => {
          const activeTitleStyle = optionData.title === selectedFilter ? "text-primary-1 bg-primary-0 font-medium" : "font-normal text-black bg-white";
          const activeValueStyle = optionData.title === selectedFilter ? "bg-primary-4 font-medium text-primary-5" : "text-black bg-secondary-3";
          return <div
            onClick={() => selectedFilterHandler(optionData.title)}
            key={index}
            className={`flex h-[72px] px-5 justify-between items-center cursor-pointer shadow-custom-shadow2 ${activeTitleStyle}`}
          >
            <p className="text-[16px]">{optionData.title}</p>
            <p className={`flex items-center text-[14px] rounded-[16px] px-2 h-[25px] ${activeValueStyle}`}>{optionData.value}</p>
          </div>
        })}
      </div>}
    </div>
  );
};

export default DropDownFilter;
