import { useState } from "react";
import styled from "styled-components";
import Slider from "../Slider/Slider";
import { Icon } from "@iconify/react";
import { MixerButton } from "../MixerButton/MixerButton";

export default function Mixer({
  drumMaschine,
  melody,
  handleChangeVolume,
}: any) {
  const [play, setPlay] = useState(false);
  return (
    <MixerWrapper>
      <Slider
        id="volume"
        min={-60}
        max={0}
        defaultValue={0}
        onChange={handleChangeVolume}
      />

      <PlayerWrapper>
        <MixerButton>Drum</MixerButton>
        <Icon
          icon={play ? "bx:stop-circle" : "ci:play-circle-outline"}
          height={60}
          onClick={() => {
            if (play) {
              drumMaschine.stop();
              melody.stop();
            } else {
              drumMaschine.start();
              melody.start();
            }
            setPlay(!play);
          }}
        />
        <MixerButton>Melody</MixerButton>
      </PlayerWrapper>
    </MixerWrapper>
  );
}

const PlayerWrapper = styled.section`
  display: flex;
  gap: 1rem;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const MixerWrapper = styled.section`
  display: flex;
  gap: 0.5rem;
  flex-flow: column wrap;
  justify-content: space-between;
`;
