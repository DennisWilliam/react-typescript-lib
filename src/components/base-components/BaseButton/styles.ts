//import { baseFontSizeDefault } from '@typography/types'
import styled, { css } from "styled-components";
//TODO ARRUMAR INPORTS DE BASE STYLES
import {
  addBackgroundColor,
  addBorder,
  addColor,
  addDisabledStyle,
  addFlexAlignX,
  addFlexAlignY,
  addMargin,
  addPadding,
} from "../../base-styles";
import { BaseButtonProps } from "./types";

export const StyContainer = styled.button<BaseButtonProps>`
  width: ${({ width }) => width};
  min-width: 100px;
  height: ${({ height }) => (height ? height : "fit-content")};
  border: none;
  cursor: pointer;
  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
  ${({ margin }) => addMargin(margin)}
  ${({ padding }) => addPadding(padding)}
	${({ backgroundColor }) => addBackgroundColor(backgroundColor)}
		${({ color }) => addColor(color)}
		${({ border, borderColor }) => addBorder(border, borderColor)}
		${({ padding }) => addPadding(padding)}
		${({ alignChildrenX }) => addFlexAlignX(alignChildrenX)}
		${({ alignChildrenY }) => addFlexAlignY(alignChildrenY)}
		${({ disabled }) => addDisabledStyle(disabled)}
`;
