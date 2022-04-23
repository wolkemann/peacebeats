import styled from "styled-components";
import Slider from "../Slider/Slider";
import * as Tone from "tone";
import { useContext } from "react";
import { AudioContext } from "../../App";

export default function Mixer({ song }: any) {
  return (
    <MixerWrapper>
      <Slider id="filter1" labelName="Filter 1" />
      <Slider id="filter2" labelName="Filter 2" />
      <button
        onClick={() => {
          song.start();
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          song.stop();
        }}
      >
        stop
      </button>
    </MixerWrapper>
  );
}

const MixerWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
`;
