import * as Tone from "tone";
import { Canvas } from "@react-three/fiber";
import TonePad from "./TonePad";
import { MotionCanvas } from "framer-motion-3d";
import { OrbitControls } from "@react-three/drei";

//create a synth and connect it to the main output (your speakers)
export const synth = new Tone.Synth().toDestination();

export default function FilmWindow() {
  return (
    <div style={{ height: "80vh" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="pink" position={[35, 30, 15]} />
        <OrbitControls />
        <TonePad position={[-1.9, 0, 0]} color={"pink"} note={"C5"} />
        <TonePad position={[-0.9, 0, 0]} color={"pink"} note={"D5"} />
        <TonePad position={[0, 0, 0]} color={"pink"} note={"E5"} />
        <TonePad position={[0.9, 0, 0]} color={"pink"} note={"F5"} />
        <TonePad position={[1.9, 0, 0]} color={"pink"} note={"G5"} />

        <TonePad position={[-1.9, -1, 0]} color={"pink"} note={"C4"} />
        <TonePad position={[-0.9, -1, 0]} color={"pink"} note={"D4"} />
        <TonePad position={[0, -1, 0]} color={"pink"} note={"E4"} />
        <TonePad position={[0.9, -1, 0]} color={"pink"} note={"F4"} />
        <TonePad position={[1.9, -1, 0]} color={"pink"} note={"G4"} />

        <TonePad position={[-1.9, -2, 0]} color={"pink"} note={"C3"} />
        <TonePad position={[-0.9, -2, 0]} color={"pink"} note={"D3"} />
        <TonePad position={[0, -2, 0]} color={"pink"} note={"E3"} />
        <TonePad position={[0.9, -2, 0]} color={"pink"} note={"F3"} />
        <TonePad position={[1.9, -2, 0]} color={"pink"} note={"G3"} />

        <TonePad position={[-1.9, -3, 0]} color={"pink"} note={"C2"} />
        <TonePad position={[-0.9, -3, 0]} color={"pink"} note={"D2"} />
        <TonePad position={[0, -3, 0]} color={"pink"} note={"E2"} />
        <TonePad position={[0.9, -3, 0]} color={"pink"} note={"F2"} />
        <TonePad position={[1.9, -3, 0]} color={"pink"} note={"G2"} />
      </Canvas>
    </div>
  );
}
