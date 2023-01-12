//import { baseFontSizeDefault } from '@typography/types'
import styled from "styled-components";

export const StyLabelContainer = styled.label`
  cursor: pointer;
  //display: grid;
  position: relative;
  user-select: none;
  width: 15px;
  height: 15px;
  border: none;

  //grid-template-columns: auto 3fr;

  .custom-radio {
    //left: -8px;
    //top: 6px;
    right: -1px;
    top: -1px;
    cursor: pointer;
    width: 17px;
    height: 17px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    display: inline-block;
    position: absolute;
  }

  .custom-radio::after {
    content: "";
    width: 10px;
    height: 10px;
    background: var(--primary);
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
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
