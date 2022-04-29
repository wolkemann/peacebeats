import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Slider from "../Slider/Slider";

// @ts-ignore
export default function Window({ children }) {
  return (
    <Wrapper>
      <SceneTitle>FILMWINDOW</SceneTitle>
      <div>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="blue" position={[30, 0, 5]} />
          {children}
        </Canvas>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  flex-grow: 3;
  border: 2px solid var(--filmWindowBorderColor);
  background-color: black;
`;

const SceneTitle = styled.h2`
  color: crimson;
`;
