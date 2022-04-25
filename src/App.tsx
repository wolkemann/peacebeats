import FilmWindow from "./components/FilmWindow/FilmWindow";
import Mixer from "./components/Mixer/Mixer";
import Octa from "./components/Octa/Octa";
import * as Tone from "tone";

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
      <FilmWindow onChangeVolume={handleChangeVolume}>
        <Octa />
      </FilmWindow>
      <Mixer drumMaschine={drumMaschine} melody={melody} />
    </main>
  );
}

export default App;
