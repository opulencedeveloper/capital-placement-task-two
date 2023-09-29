import { useState } from "react";

import Candidates from "./Candidates";
import Filter from "./Filter";
import { CandidatesTypeProps } from "../../../shared/types";

const candidateData: CandidatesTypeProps[] = [
    {
        name: "Aaliyah Sanderson",
        country: "Riyadh, Saudi Arabia",
        qualification: "Bachelor - Cambridge University (2023 - 2023)",
    },
    {
        name: "John Doe",
        country: "Bostom, USA",
        qualification: "Bachelor - MIT (2023 - 2023)",
    },
    {
        name: "Thomas Matt",
        country: "Edinburgh, UK",
        qualification: "Bachelor - Harvard University (2023 - 2023)",
    },
    {
        name: "Kamilia Smith",
        country: "London, UK",
        qualification: "Bachelor - Boston University (2023 - 2023)",
    },
    {
        name: "Roy Jade",
        country: "Cambridge,  UK",
        qualification: "Bachelor - Yale (2023 - 2023)",
    },
    {
        name: "Ahmed Salman",
        country: "New York, USA",
        qualification: "Bachelor - Cambridge University (2023 - 2023)",
    },
];

const SectionOne = () => {
    const [filterdCandidate, setFilterdCandidate] = useState<CandidatesTypeProps[]>(candidateData);

    const filterListHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        const filteredCandidates = candidateData.filter(candidate => {
            const name = candidate.name.toLowerCase();
            const country = candidate.country.toLowerCase();
            const qualification = candidate.qualification.toLowerCase();

            return name.includes(selectedValue.toLowerCase()) ||
                country.includes(selectedValue.toLowerCase()) ||
                qualification.includes(selectedValue.toLowerCase());
        });
        setFilterdCandidate(filteredCandidates);
    }
    return <section className="flex flex-wrap mt-7 md:flex-nowrap">
        <Filter onChange={filterListHandler} />
        <Candidates candidateData={filterdCandidate} />
    </section>
}

export default SectionOne;