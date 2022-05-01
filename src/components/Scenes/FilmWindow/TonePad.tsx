import * as Tone from "tone";
import { synth } from "./FilmWindow";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function TonePad(props: any) {
  const myMesh: any = useRef();
  return (
    <motion.mesh
      ref={myMesh}
      onPointerDown={() => {
        synth.triggerAttack(props.note, "8n");
      }}
      onPointerUp={() => {
        synth.triggerRelease();
      }}
      whileTap={{
        scale: 1.5,
      }}
      {...props}
    >
      <RoundedBox
        args={[0.85, 0.85, 0.85]}
        radius={0.05}
        smoothness={4}
        {...myMesh}
      >
        <motion.meshStandardMaterial color={props.color} />
      </RoundedBox>
    </motion.mesh>
  );
}
