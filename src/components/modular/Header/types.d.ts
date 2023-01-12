import { BaseSpacingTypesProps, BaseTypesProps } from "@base/BaseTypes/types";
/*
export type BaseBoxProps = {
  borderRadius?: string;
} & Pick<
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
> &
  BaseSpacingTypesProps;*/

export type BaseBoxProps = {
  borderRadius?: string;
} & Omit<BaseTypesProps<HTMLDivElement>, "label"> &
  BaseSpacingTypesProps;

/*
export type BaseBoxStyles = Pick<
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
>;
*/
