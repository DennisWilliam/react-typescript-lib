import { baseFontSizeDefault } from "@base/BaseTypography";
import styled from "styled-components";
//TODO ARRUMAR INPORTS DE BASE STYLES
import {
  addBackgroundColor,
  addBorder,
  addColor,
  addFlexAlignX,
  addFlexAlignY,
  addMargin,
  addPadding,
} from "../../base-styles";
import { BasePageProps } from "./types";

export const StyContainer = styled.div<BasePageProps>`
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "fit-content")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : baseFontSizeDefault};

  ${({ margin }) => addMargin(margin)}
  ${({ padding }) => addPadding(padding)}
		${({ color }) => addColor(color)}
		${({ border, borderColor }) => addBorder(border, borderColor)}
		${({ padding }) => addPadding(padding)}
		${({ alignChildrenX }) => addFlexAlignX(alignChildrenX)}
		${({ alignChildrenY }) => addFlexAlignY(alignChildrenY)}
		${({ backgroundColor }) => addBackgroundColor(backgroundColor)}
`;
