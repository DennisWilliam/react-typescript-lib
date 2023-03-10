import { BaseTypesProps } from "@base/BaseTypes/types";

export type BaseTextProps = {
  text: string | number;
} & Omit<BaseTypesProps<HTMLSpanElement>, "children" | "label">;

/*
export type BaseTextStyles = Pick<
  BaseTypesProps,
  "color" | "fontWeight" | "width" | "height" | "fontSize" | "disableColor"
>;
*/
