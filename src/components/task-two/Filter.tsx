import { FilterListProps } from "../../../shared/types";

const filterData = [
    "Personal Infromation",
    "Education",
    "Work Experience",
    "Activity Filter",
    "Advanced Filter",
];

const Filter: React.FC<FilterListProps> = ({ onChange }) => {
    return <div className="w-full mb-5 md:w-[605px] md:mr-8">
        <div className="flex items-center mb-8 border rounded-[8px] w-full h-[48px] bg-white">
            <div className="flex-shrink-0 w-[20px] h-[20px] mx-4">
                <img
                    src={"./asset/icons/search-icon.svg"}
                    className="h-full w-full"
                    alt="search icon"
                />
            </div>
            <input
            onChange={ onChange}
                placeholder="Search by name, edu, exp or #tag"
                className="w-[85%] text-secondary-2 outline-none"
            />
            <div className="flex-shrink-0 w-[20px] h-[20px] mx-4">
                <img
                    src={"./asset/icons/warning-icon.svg"}
                    className="h-full w-full"
                    alt="warning icon"
                />
            </div>
        </div>

        <div className="w-full bg-white rounded-[8px]">
            <div className="flex items-center h-[58px] px-5 justify-between">
                <p className="text-[14px] font-medium">Filters</p>
                <p className="font-light text-[12px]">0 Selected</p>
            </div>
            {filterData.map((filterInfo, index) => (
                <div
                    key={index}
                    className="flex items-center px-5 border-t h-[58px] justify-between"
                >
                    <div className="flex items-center space-x-2">
                        <div className="w-[16px] h-[16px]">
                            <img
                                src={"./asset/icons/docs-icon.svg"}
                                className="h-full w-full"
                                alt="warning icon"
                            />
                        </div>
                        <p className="text-[14px]">{filterInfo}</p>
                    </div>
                    <button className="w-[10px] h-[10px]">
                        <img
                            src={"./asset/icons/drop-down-blue-icon.svg"}
                            className="h-full w-full"
                            alt="drop down icon"
                        />
                    </button>
                </div>
            ))}
        </div>
    </div>
}

export default Filter;