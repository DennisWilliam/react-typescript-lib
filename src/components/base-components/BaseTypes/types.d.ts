import { BaseFontSize, BaseFontWeight } from "@base/BaseTypography/types";
import { ThemeApp } from "@themes/theme";

/**
 * BaseRequiredTypesProps is some of most common required types used to props HstUi components.
 *  @param {id} id - The component identification.
 */
export type BaseRequiredTypesProps = {
  id: string;
};

export type BaseDisableColors = keyof Pick<
  ThemeApp,
  "disable" | "disable_text"
>;

/**
 * BaseTypesProps is some of most common types used to props HstUi components.
 * @param {string | number} key - The author of the book.
 * @param {string | number} label - The author of the book.
 * @param {number | string} fontSize - Changes the component font-size.
 * @param {color} color - The author of the book.
 * @param {keyof BaseFontWeight | string} fontWeight - The author of the book.
 * @param {string | number} width - The author of the book.
 * @param {string | number} height - The author of the book.
 * @param {React.ReactNode} children - The author of the book.
 */
export type BaseTypesProps<T> = {
  key?: string | number;
  label?: string | number;
  fontSize?: BaseFontSize;
  color?: keyof ThemeApp;
  fontWeight?: BaseFontWeight;
  width?: string | number;
  height?: string | number;
  alignChildrenX?: BaseDirectionTypesProps;
  alignChildrenY?: BaseDirectionTypesProps;
  children?: React.ReactNode;
  isLoading?: boolean;
  backgroundColor?: keyof ThemeApp;
  border?: boolean;
  borderColor?: BaseDisableColors;
  borderRadius?: string;
} & React.HtmlHTMLAttributes<T> &
  BaseRequiredTypesProps &
  BaseInteractionsTypesProps;

/**
 * BaseInteractionsTypesProps is some of most common interaction types used to props HstUi components.
 *  @param {boolean} isHover - Inform if the component is with hover effect.
 * @param {boolean} hoverColor - Inform if the  component color when it is with hover effect.
 * @param {boolean} isActive - Inform if the component is with active effect.
 * @param {boolean} activeColor - Inform if the  component color when it is with active effect.
 * @param {boolean} hasFocus - Inform if the component is with focus effect.
 * @param {boolean} focusColor - Inform if the  component color when it is with focus effect.
 * @param {boolean} disable - Inform if the component is with disable effect.
 * @param {boolean} disableColor - Inform if the  component color when it is with disable effect.
 */
export type BaseInteractionsTypesProps = {
  isHover?: boolean;
  hoverColor?: string;
  isActive?: boolean;
  activeColor?: string;
  hasFocus?: boolean;
  focusColor?: string;
  disabled?: boolean;
  disableColor?: string | null;
};

/**
 * BaseDirectionTypesProps is some of most common direction types used to props HstUi components.
 */
export type BaseDirectionTypesProps =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "center"
  | "flex-start"
  | "flex-end";

/**
 * BaseSpacingTypesProps is some of most common spacing types used to props HstUi components.
 *  @param {string} padding - Receive component padding. ex 10, 10, 10, 10 or only 10 to apply the same value on all sides
 * @param {string} padding - Receive component margin. ex 10, 10, 10, 10 or only 10 to apply the same value on all sides
 */
export type BaseSpacingTypesProps = {
  padding?: string;
  margin?: string;
};

//TODO: REVER ESSE PONTO
/**
 * BaseSpacingTypesProps is some of most common spacing types used to props HstUi components.
 *  @param {string} padding - Receive component padding. ex 10, 10, 10, 10 or only 10 to apply the same value on all sides
 * @param {string} padding - Receive component margin. ex 10, 10, 10, 10 or only 10 to apply the same value on all sides
 */
export type BasePositionTypesProps = {
  position?:
    | "relative"
    | "stick"
    | "absolute"
    | "fixed"
    | "initial"
    | "revert"
    | "static"
    | "unset"
    | "inherit";
  top?: string;
  left: string;
  right: string;
  bottom: string;
  margin?: string;
};
