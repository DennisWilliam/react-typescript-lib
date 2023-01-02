import { BaseSpacingTypesProps, BaseTypesProps } from "@base/BaseTypes/types";
import { ButtonHTMLAttributes, DOMAttributes } from "react";

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
  DOMAttributes<ButtonHTMLAttributes>;

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
>;
