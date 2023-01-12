//import { baseFontSizeDefault } from '@typography/types'

import styled, { css } from "styled-components";
import { BaseTextProps } from "./types";
//TODO ARRUMAR INPORTS DE BASE STYLES
import { addColor, addFontSize } from "../../base-styles";

export const StyContainer = styled.span<BaseTextProps>`
  ${({ color }) => addColor(color)};
  ${({ fontSize }) => addFontSize(fontSize)}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight.toString()};
    `}
`;
