import { BaseTypesProps } from "@base/BaseTypes/types";

export type BaseTextProps = {
  text: string | number;
  textColor:
    | "--primary-text"
    | "--secondary-text"
    | "--tertiary-text"
    | "--quaternaryText"
    | "--info"
    | "--warning"
    | "--error";
} & Omit<BaseTypesProps, "children" | "label">;

export type BaseTextStyles = Pick<
  BaseTypesProps,
  "color" | "fontWeight" | "width" | "height" | "fontSize" | "disableColor"
>;
