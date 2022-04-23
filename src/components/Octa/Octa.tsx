import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Octa() {
  const myMesh: any = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
  });
  return (
    <mesh ref={myMesh}>
      <octahedronGeometry args={[3, 1, 32]} />
      <meshStandardMaterial />
    </mesh>
  );
}
