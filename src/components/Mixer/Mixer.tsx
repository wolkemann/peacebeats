import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Mixer({ drumMaschine, melody }: any) {
  const [play, setPlay] = useState(false);
  return (
    <MixerWrapper>
      <div>Drum</div>
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
      <div>Melody</div>
    </MixerWrapper>
  );
}

const MixerWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
