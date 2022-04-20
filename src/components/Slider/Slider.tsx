/**
 * Slider
 * @param assads
 */

import styled from "styled-components";
import { SliderLabel } from "../SliderLabel/SliderLabel";

interface Slider {
  id: string;
  labelName?: string;
}

export default function Slider({ id, labelName }: Slider) {
  return (
    <>
      {labelName ? <SliderLabel htmlFor={id}>{labelName}</SliderLabel> : null}
      <InputRange type="range" min="1" max="100" id={id} />
    </>
  );
}

const InputRange = styled.input`
  -webkit-appearance: none;
  border: 1px solid black;
  margin: 0.5rem 0;
  width: 100%;
  height: 12px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:focus {
    border-color: red;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 22px;
    border-radius: 20%;
    background: red;
    cursor: pointer;
    border: 2px solid whitesmoke;
    box-shadow: 0 0 4px rgba(0 0 0 / 100%);
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 20px;
    border-radius: 20%;
    background: red;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0 0 0 / 100%);
  }
`;
