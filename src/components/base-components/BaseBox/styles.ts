//import { baseFontSizeDefault } from '@typography/types'
import styled, { css } from "styled-components";
//TODO ARRUMAR INPORTS DE BASE STYLES
import {
  addBackgroundColor,
  addBorder,
  addColor,
  addFlexAlignX,
  addFlexAlignY,
  addPadding,
} from "../../base-styles";
import { BaseBoxProps } from "./types";

export const StyContainer = styled.div<BaseBoxProps>`
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "fit-content")};

  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
  ${({ padding }) => addPadding(padding)}
		${({ color }) => addColor(color)}
		${({ border, borderColor }) => addBorder(border, borderColor)}
		${({ padding }) => addPadding(padding)}
		${({ alignChildrenX }) => addFlexAlignX(alignChildrenX)}
		${({ alignChildrenY }) => addFlexAlignY(alignChildrenY)}
		${({ backgroundColor }) => addBackgroundColor(backgroundColor)}
`;
