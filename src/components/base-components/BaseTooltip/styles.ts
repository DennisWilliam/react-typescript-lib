//import { baseFontSizeDefault } from '@typography/types'
import styled from "styled-components";

export const StyDivContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  :hover {
    & > div {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.5s linear;
    }
  }
`;

export const StyTooltip = styled.div`
  position: absolute;
  max-width: 200px;
  min-height: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
  padding: 10px;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  border-radius: 5px;
  color: #fff;
  word-wrap: break-word;
  top: 0px;
  left: 50px;
  transition: opacity 0.5s linear;

  //top: -1px;
  //margin-top: 100px;

  ::after {
    content: "";
    border-style: solid;
    border-width: 10px;
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 50%;
    left: 100%;
  }
`;

export const StyInput = styled.input.attrs({
  type: "radio",
})`
  cursor: pointer;
  width: 15px;
  height: 15px;
  visibility: hidden;

  :checked + span {
    border: 2px solid var(--primary);
  }

  :checked + span:after {
    opacity: 1;
  }
`;
