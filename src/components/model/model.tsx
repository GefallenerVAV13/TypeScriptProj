
export type SizeType = "small" | "medium" | "large";
export type ColorType = "primary" | "secondary";

export default interface IButtonProps {
  size: SizeType;
  color: ColorType;
  title: string;
  onClick: () => void;
  children?: React.JSX.Element; 
}