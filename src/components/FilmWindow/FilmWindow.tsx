import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Slider from "../Slider/Slider";

// @ts-ignore
export default function Window({ children, handleChangeVolume }) {
  return (
    <Wrapper>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[30, 0, 5]} />
        {children}
      </Canvas>
      <Slider
        id="volume"
        min={-60}
        max={0}
        defaultValue={0}
        onChange={handleChangeVolume}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  gap: 2rem;
  justify-content: space-between;
  border: 2px solid var(--filmWindowBorderColor);
  background-color: black;
`;
