import * as Tone from "tone";
import styled from "styled-components";

import Window from "./components/Window/Window";
import Mixer from "./components/Mixer/Mixer";
import Octa from "./components/Octa/Octa";

function App() {
  const drumMaschine = new Tone.Player({
    url: "/drumbeat.wav",
    loop: true,
  });

  const melody = new Tone.Player({
    url: "/melody.wav",
    loop: true,
  });

  drumMaschine.volume.value -= 10;

  drumMaschine.toDestination();
  melody.toDestination();

  function handleChangeVolume(event: any) {
    drumMaschine.volume.value = event.target.value - 10;
    melody.volume.value = event.target.value;
  }

  return (
    <FilmWindow>
      <Window>
        <Octa />
      </Window>
      <Mixer
        drumMaschine={drumMaschine}
        melody={melody}
        onChangeVolume={handleChangeVolume}
      />
    </FilmWindow>
  );
}

const FilmWindow = styled.section`
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  gap: 2rem;
  justify-content: space-between;
  border: 2px solid var(--filmWindowBorderColor);
  background-color: black;
`;

export default App;
