import { BaseSpacingTypesProps, BaseTypesProps } from "@base/BaseTypes/types";
/*
export type BasePageProps = Pick<
  BaseTypesProps,
  | "id"
  | "key"
  | "children"
  | "width"
  | "height"
  | "alignChildrenX"
  | "alignChildrenY"
  | "border"
  | "borderColor"
  | "backgroundColor"
  | "color"
> &
  BaseSpacingTypesProps;*/

export type BasePageProps = Omit<BaseTypesProps<HTMLDivElement>, "label"> &
  BaseSpacingTypesProps;
/*
export type BasePageStyles = { enableShadow: boolean } & Pick<
  BasePageProps,
  | "borderRadius"
  | "backgroundColor"
  | "borderWidth"
  | "width"
  | "height"
  | "margin"
  | "padding"
  | "color"
>;
*/
