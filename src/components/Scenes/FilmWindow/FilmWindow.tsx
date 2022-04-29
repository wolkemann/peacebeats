import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Octa from "../../Octa/Octa";
import { MotionCanvas } from "framer-motion-3d";

export default function FilmWindow() {
  return (
    <div style={{ height: "80vh" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="pink" position={[35, 30, 15]} />
        <OrbitControls />
        <Octa position={[-1.2, 0, 0]} />
        <Octa position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
