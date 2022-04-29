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
      onClick={() => {
        synth.triggerAttackRelease(props.note, "16n");
      }}
      ref={myMesh}
      whileTap={{
        scale: 1.5,
      }}
      {...props}
    >
      <RoundedBox
        args={[0.8, 0.8, 0.8]}
        radius={0.05}
        smoothness={4}
        {...myMesh}
      >
        <motion.meshStandardMaterial color={props.color} />
      </RoundedBox>
    </motion.mesh>
  );
}
