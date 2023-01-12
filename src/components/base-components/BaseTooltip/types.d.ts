import { BaseTypesProps } from "@base/BaseTypes/types";

export type BaseTooltipProps = {
  text: string | number;
} & BaseTypesProps<HTMLDivElement>;

export type CheckboxSvgProps = {
  boxClass?: "box-checked" | "box-unchecked";
};

/*
export type BaseTextStyles = Pick<
  BaseTypesProps,
  "color" | "fontWeight" | "width" | "height" | "fontSize" | "disableColor"
>;
*/
