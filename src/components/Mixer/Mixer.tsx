import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Mixer({ drumMaschine, melody }: any) {
  const [play, setPlay] = useState(false);
  return (
    <MixerWrapper>
      <div>Drum</div>
      {play ? (
        <Icon
          icon="bx:stop-circle"
          height={60}
          onClick={() => {
            drumMaschine.stop();
            melody.stop();
            setPlay(!play);
          }}
        />
      ) : (
        <Icon
          icon="ci:play-circle-outline"
          height={60}
          onClick={() => {
            drumMaschine.start();
            melody.start();
            setPlay(!play);
          }}
        />
      )}

      <div>Melody</div>
    </MixerWrapper>
  );
}

const MixerWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
