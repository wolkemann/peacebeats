import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function Octa(props: any) {
  const myMesh: any = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.z = clock.getElapsedTime();
  });
  return (
    <motion.mesh
      ref={myMesh}
      whileTap={{
        scale: 1.5,
        x: +2,
      }}
      {...props}
    >
      <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} {...myMesh}>
        <motion.meshStandardMaterial color="rgb(220,20,60)" />
      </RoundedBox>
    </motion.mesh>
  );
}
