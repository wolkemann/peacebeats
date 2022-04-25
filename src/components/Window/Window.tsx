import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Slider from "../Slider/Slider";

// @ts-ignore
export default function Window({ children }) {
  return (
    <Wrapper>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[30, 0, 5]} />
        {children}
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
