//import { baseFontSizeDefault } from '@typography/types'
import styled from "styled-components";
import { BaseCheckboxProps } from "./types";
/*
export const StyContainer = styled.input<BaseCheckboxProps>`
  color: ${({ color }) => (color ? color : "#000")};
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "fit-content")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : baseFontSizeDefault)};
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight.toString()};
    `}
`;
*/

export const StyLabelContainer = styled.label`
  cursor: pointer;
  display: grid;
  position: relative;
  user-select: none;
  width: 15px;
  height: 15px;
  border: none;

  grid-template-columns: auto 3fr;

  .box-checked {
    stroke-dasharray: 320;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.3s 0s linear;
    //fill: var(--primary);
    //transition: fill 0.2s 1s linear;
    // stroke: var(--background);
  }

  .box-unchecked {
    stroke-dasharray: 320;
    stroke-dashoffset: 320;
    transition: stroke-dashoffset 0.3s linear;
    //transition: fill 0.2s 0.3s linear;
    //fill: var(--transparent);
  }

  .box-default {
    stroke-dasharray: 320;
    stroke-dashoffset: 0;
    stroke: var(--disable);
  }

  /* & > input :checked {
    .box {
      stroke-dashoffset: 320;

      transition: stroke-dashoffset 0.3s linear;
    }
  }*/

  svg {
    width: 16px;
    height: 16px;
    stroke: var(--primary);
    stroke-width: 7;
    fill: var(--transparent);
  }
`;

export const StySpan = styled.span<BaseCheckboxProps>`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
`;

export const StyInput = styled.input.attrs({
  type: "checkbox",
})`
  cursor: pointer;
  width: 15px;
  height: 15px;
  border: none;
  display: none;
  pointer-events: none;
`;
