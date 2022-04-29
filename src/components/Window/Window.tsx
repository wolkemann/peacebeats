import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

// @ts-ignore
export default function Window({ children }) {
  return (
    <Wrapper>
      <SceneTitle>FILMWINDOW</SceneTitle>
      {children}
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
