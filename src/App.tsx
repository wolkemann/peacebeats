import FilmWindow from "./components/FilmWindow/FilmWindow";
import Mixer from "./components/Mixer/Mixer";
import Octa from "./components/Octa/Octa";
import * as Tone from "tone";
import { createContext, useContext, useEffect, useState } from "react";

export const AudioContext = createContext({});

function App() {
  const audio = useContext(AudioContext);

  const player = new Tone.Player({
    url: "/drumbeat.wav",
    loop: true,
  }).chain();
  const filter = new Tone.BiquadFilter(2000, "lowpass").toDestination();

  player.connect(filter);

  function handleChangeVolume(event) {
    const vol = new Tone.Volume(event.target.value).toDestination();
    player.volume.value = event.target.value;
  }

  useEffect(() => {
    Tone.start();
  }, []);

  return (
    <main>
      <AudioContext.Provider value={{ volume: 1000 }}>
        <FilmWindow onChangeVolume={handleChangeVolume}>
          <Octa />
        </FilmWindow>
        <Mixer song={player} />
      </AudioContext.Provider>
    </main>
  );
}

export default App;
