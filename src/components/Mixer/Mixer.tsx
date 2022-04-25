import styled from "styled-components";

export default function Mixer({ drumMaschine, melody }: any) {
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
    </MixerWrapper>
  );
}

const MixerWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
`;
