import FilmWindow from "./components/FilmWindow/FilmWindow";
import Mixer from "./components/Mixer/Mixer";
import Octa from "./components/Octa/Octa";
import * as Tone from "tone";

function App() {
  const player = new Tone.Player({
    url: "/drumbeat.wav",
    loop: true,
  });

  const player2 = new Tone.Player({
    url: "/melody.wav",
    loop: true,
  });
  /*const filter = new Tone.BiquadFilter(2000, "lowpass").toDestination();
  player.connect(filter);*/

  player.toDestination();
  player2.toDestination();

  function handleChangeVolume(event: any) {
    player.volume.value = event.target.value;
    player2.volume.value = event.target.value;
  }

  return (
    <main>
      <FilmWindow onChangeVolume={handleChangeVolume}>
        <Octa />
      </FilmWindow>
      <Mixer song={player} song2={player2} />
    </main>
  );
}

export default App;
