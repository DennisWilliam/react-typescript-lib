import { BaseTypesProps } from "@base/BaseTypes/types";

export type BaseInputProps = {
  text: string | number;
  type?: React.HTMLInputTypeAttribute;
} & Omit<BaseTypesProps<HTMLInputElement>, "children">;

/*
export type BaseTextStyles = Pick<
  BaseTypesProps,
  "color" | "fontWeight" | "width" | "height" | "fontSize" | "disableColor"
>;
*/
