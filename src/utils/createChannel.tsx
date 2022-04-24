import * as Tone from "tone";

export default function createChannel(url: string, pan: number) {
  const channel = new Tone.Channel({
    pan,
  }).toDestination();

  const player = new Tone.Player({
    url: `${url}`,
    loop: true,
  })
    .sync()
    .start(0);
  player.connect(channel);

  return player;
}
