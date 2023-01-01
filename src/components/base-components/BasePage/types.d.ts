import { BaseSpacingTypesProps, BaseTypesProps } from "@base/BaseTypes/types";

export type BasePageProps = {
  borderRadius?: string;
  borderWidth?: string;
  backgroundColor?:
    | string
    | "--primary-text"
    | "--secondary-text"
    | "--tertiary-text"
    | "--quaternaryText"
    | "--info"
    | "--warning"
    | "--error";
} & Pick<BaseTypesProps, "id" | "key" | "children" | "width" | "height"> &
  BaseSpacingTypesProps;

export type BasePageStyles = { enableShadow: boolean } & Pick<
  BasePageProps,
  | "borderRadius"
  | "backgroundColor"
  | "borderWidth"
  | "width"
  | "height"
  | "margin"
  | "padding"
>;
