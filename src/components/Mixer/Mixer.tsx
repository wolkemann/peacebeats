import styled from "styled-components";
import Slider from "../Slider/Slider";
import * as Tone from "tone";

export default function Mixer({ song, song2 }: any) {
  return (
    <MixerWrapper>
      <Slider id="filter1" labelName="Filter 1" />
      <Slider id="filter2" labelName="Filter 2" />
      <button
        onClick={() => {
          song.start();
          song2.start();
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          song.stop();
          song2.stop();
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
