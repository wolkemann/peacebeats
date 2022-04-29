import * as Tone from "tone";
import styled from "styled-components";
import Window from "./components/Window/Window";
import Mixer from "./components/Mixer/Mixer";
import FilmWindow from "./components/Scenes/FilmWindow/FilmWindow";

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
    <main>
      <Window>
        <FilmWindow />
      </Window>
      <Mixer
        drumMaschine={drumMaschine}
        melody={melody}
        handleChangeVolume={handleChangeVolume}
      />
    </main>
  );
}

export default App;
