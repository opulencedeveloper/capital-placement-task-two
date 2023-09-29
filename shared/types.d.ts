type onChangeType = ChangeEvent<HTMLInputElement>;

export type ChildrenProps = React.ReactNode;

export interface RadioButtonProps {
  onChange?: (event: onChangeType) => void;
  isChecked?: boolean;
}

export interface CandidatesTypeProps {
  name: string;
  country: string;
  qualification: string;
}

export interface CandidateListProps {
  candidateData: CandidatesTypeProps[];
}

export interface FilterListProps {
  onChange: (event: onChangeType) => void;
}
