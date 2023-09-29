import RadioButton from "../UI/RadioButton";

import { CandidateListProps } from "../../../shared/types";

const commonStyle =
    "flex items-center bg-primary-0 px-3 h-[16px] rounded-[16px]";



const Candidates: React.FC<CandidateListProps> = ({ candidateData }) => {
    return <div className="w-full px-4 py-5 rounded-[16px] bg-white">
        <div className="flex flex-wrap justify-between">
            <div className="flex items-center space-x-3 mb-2">
                <RadioButton />
                <p>{candidateData.length} Candidates</p>
            </div>

            <div className="flex flex-wrap md:space-x-3">
                <p className="border-r pr-5 mb-2">Qualified</p>
                <div className="flex border-r flex space-x-2 pr-5 mb-2">
                    <p>Task</p>
                    <div className="flex items-center justify-center bg-primary-0 h-[24px] w-[24px] rounded-full text-[10px]">
                        25
                    </div>
                </div>
                <div className="flex space-x-2 mb-2">
                    <p>Disqualified</p>
                    <div className="flex items-center justify-center bg-primary-0 h-[24px] w-[24px] rounded-full text-[10px]">
                        78
                    </div>
                </div>
            </div>
        </div>

        {candidateData.map((data, index) => (
            <div
                key={index}
                className="flex flex-wrap items-center justify-between border-t py-5 mt-5"
            >
                <div className="flex flex-wrap items-center space-x-5"><RadioButton />
                    <div className="h-[56px] w-[56px] flex flex-shrink-0 items-center justify-center bg-primary-0 rounded-full font-semibold text-[20px] text-primary-2">
                        AS
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="text-[16px] font-semibold">{data.name}</p>
                        <p className="text-[12px] font-medium">{data.country}</p>
                        <p className="text-[12px] font-light">{data.qualification}</p>
                        <div className="flex text-primary-3 space-x-2 text-[10px]">
                            <p>#top_candidate</p> <p>#top_candidate</p>
                        </div>
                        <div className="flex space-x-3 text-[10px] text-primary-3 font-medium">
                            <div className={commonStyle}>New York</div>{" "}
                            <div className={commonStyle}>Marketing</div>
                            <div className={commonStyle}>London</div>
                        </div>
                    </div>

                </div>

                {data.name === "Ahmed Salman" && <div className="flex space-x-3">
                    <div className="flex items-center px-2 h-[23px] space-x-1 bg-primary-0 rounded-[18px]">
                        <div className="w-[12px] h-[12px]">
                            <img
                                src={"./asset/icons/play-icon.svg"}
                                className="h-full w-full"
                                alt="play icon"
                            />
                        </div>
                        <p className="text-[10px] text-primary-3">4</p>
                    </div>

                    <div className="flex items-center px-2 h-[23px] space-x-1 bg-primary-0 rounded-[18px]">
                        <div className="w-[12px] h-[12px]">
                            <img
                                src={"./asset/icons/book-icon.svg"}
                                className="h-full w-full"
                                alt="book icon"
                            />
                        </div>
                        <p className="text-[10px] text-primary-3">5 Programs</p>
                    </div>
                </div>}
            </div>
        ))}
    </div>
}

export default Candidates;