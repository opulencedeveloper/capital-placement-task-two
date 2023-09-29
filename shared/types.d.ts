type onChangeType = ChangeEvent<HTMLInputElement>;

export type ChildrenProps = React.ReactNode;

export interface RadioButtonProps {
  onChange?: (event: onChangeType) => void;
  isChecked?: boolean;
}
