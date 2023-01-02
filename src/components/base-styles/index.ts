import { convertThemeColorValue } from "@base-functions/utils";
import { BaseSpacingTypesProps, BaseTypesProps } from "@base/BaseTypes/types";
import { css } from "styled-components";

type BaseStylesTypesProps = BaseTypesProps & BaseSpacingTypesProps;

export const addMargin = (margin: BaseStylesTypesProps["margin"]) =>
  margin &&
  css`
    margin: ${margin};
  `;

export const addPadding = (padding: BaseStylesTypesProps["padding"]) =>
  padding &&
  css`
    padding: ${padding};
  `;

export const addColor = (color: BaseStylesTypesProps["color"]) =>
  color &&
  css`
    color: ${convertThemeColorValue(color)};
  `;

export const addBackgroundColor = (
  backgroundColor: BaseStylesTypesProps["backgroundColor"]
) =>
  backgroundColor &&
  css`
    background-color: ${convertThemeColorValue(backgroundColor)};
  `;

export const addBorder = (
  border: BaseStylesTypesProps["border"],
  borderColor: BaseStylesTypesProps["borderColor"]
) =>
  border &&
  css`
    border: 1px solid;
    border-color: ${convertThemeColorValue(borderColor)};
  `;

export const addBorderRadius = (
  borderRadius: BaseStylesTypesProps["borderRadius"]
) =>
  borderRadius &&
  css`
    border-radius: ${borderRadius};
  `;

export const addFlexAlignX = (
  alignChildrenX: BaseStylesTypesProps["alignChildrenX"]
) =>
  alignChildrenX &&
  css`
    display: flex;
    justify-content: ${alignChildrenX};
    align-items: ${alignChildrenX};
  `;

export const addFlexAlignY = (
  alignChildrenY: BaseStylesTypesProps["alignChildrenY"]
) =>
  alignChildrenY &&
  css`
    display: flex;
    align-items: ${alignChildrenY};
  `;

export const addDisabledStyle = (disabled: BaseStylesTypesProps["disabled"]) =>
  disabled &&
  css`
    background-color: ${convertThemeColorValue("disable")};
    color: ${convertThemeColorValue("disable_text")};
    cursor: not-allowed;
  `;
