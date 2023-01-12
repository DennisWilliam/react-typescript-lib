import { BaseSpacingTypesProps, BaseTypesProps } from "@base/BaseTypes/types";
/*
export type BaseButtonProps = Pick<
  BaseTypesProps,
  | "id"
  | "key"
  | "children"
  | "height"
  | "width"
  | "disabled"
  | "color"
  | "backgroundColor"
  | "border"
  | "borderColor"
  | "alignChildrenX"
  | "alignChildrenY"
  | "borderRadius"
> &
  BaseSpacingTypesProps &
  React.HTMLAttributes<HTMLButtonElement>;*/
//DOMAttributes<ButtonHTMLAttributes>;

export type BaseButtonProps = Omit<BaseTypesProps<HTMLButtonElement>, "label"> &
  BaseSpacingTypesProps;
/*
export type BaseButtonStyles = Pick<
  BaseBoxProps,
  | "borderRadius"
  | "backgroundColor"
  | "color"
  | "width"
  | "height"
  | "margin"
  | "padding"
  | "border"
  | "borderColor"
  | "alignChildrenX"
  | "alignChildrenY"
  | "disabled"
	>;*/
