import styled from "styled-components";
import Slider from "../Slider/Slider";

export default function Mixer({ drumMaschine, melody, onChangeVolume }: any) {
  return (
    <MixerWrapper>
      <button
        onClick={() => {
          drumMaschine.start();
          melody.start();
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          drumMaschine.stop();
          melody.stop();
        }}
      >
        stop
      </button>
      <Slider
        id="volume"
        min={-60}
        max={0}
        defaultValue={0}
        onChange={onChangeVolume}
      />
    </MixerWrapper>
  );
}

const MixerWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
`;
