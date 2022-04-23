/**
 * Slider
 * @param assads
 */

import styled from "styled-components";
import { SliderLabel } from "../SliderLabel/SliderLabel";

interface Slider {
  id: string;
  labelName?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: any;
}

export default function Slider({
  id,
  labelName,
  min,
  max,
  defaultValue,
  onChange,
}: Slider) {
  return (
    <>
      {labelName ? <SliderLabel htmlFor={id}>{labelName}</SliderLabel> : null}
      <InputRange
        type="range"
        min={min}
        max={max}
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </>
  );
}

const InputRange = styled.input`
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  height: 11px;
  width: 100%;
  cursor: pointer;
  border-radius: 0; /* iOS */

  &::-webkit-slider-runnable-track {
    background: white;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0px;
    height: 40px;
    box-shadow: -100vw 0 0 100vw red;
  }
`;
