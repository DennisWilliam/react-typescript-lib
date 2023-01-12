import { BaseTypesProps } from "@base/BaseTypes/types";

export type BaseToggleProps = {
  text: string | number;
} & Omit<BaseTypesProps<HTMLInputElement>, "children">;

export type CheckboxSvgProps = {
  boxClass?: "box-checked" | "box-unchecked";
};

/*
export type BaseTextStyles = Pick<
  BaseTypesProps,
  "color" | "fontWeight" | "width" | "height" | "fontSize" | "disableColor"
>;
*/
