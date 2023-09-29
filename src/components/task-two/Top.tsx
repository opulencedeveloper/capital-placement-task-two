import DropDownFilter from "./DropdownFilter";

const topIcons = ["tag", "user-close", "user-check", "user-voice", "message"];

const Top = () => {
    return <div className="flex flex-wrap justify-between">
        <div className="flex flex-col space-y-1.5">
            <p className="text-[20px] font-semibold text-primary-1">London Internship Program</p>
            <p className="text-[12px]">London</p>
        </div>

        <DropDownFilter />

        <div className="flex flex-wrap">
            <div className="flex space-x-2 mb-5">
                {" "}
                {topIcons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-[40px] w-[40px] bg-white rounded-[8px] bg-white"
                    >
                        <div className="w-[24px] h-[24px]">
                            <img
                                src={`./asset/icons/${icon}-icon.svg`}
                                className="h-full w-full"
                                alt=" icon"
                            />
                        </div>
                    </div>
                ))}{" "}
            </div>

            <div className="ml-5 flex items-center justify-center rounded-[8px] bg-primary-1 text-white h-[40px] w-[230px] ">
                <div className="flex items-center justify-center border-r w-[85%] border-white h-full">
                    <p className="text-[13px]">Move to Video Interview I</p>
                </div>
                <button className="flex h-full w-[15%] items-center justify-center">
                    <div className="w-[8px] h-[5px]">
                        <img
                            src={"./asset/icons/drop-down-white-icon.svg"}
                            className="h-full w-full"
                            alt=" icon"
                        />
                    </div>
                </button>
            </div>
        </div>
    </div>
}

export default Top;