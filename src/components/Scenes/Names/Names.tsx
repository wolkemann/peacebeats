import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import styled from "styled-components";

import Cloud from "./Cloud";

export default function Names() {
  return (
    <Wrapper>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={["#202025", 0, 80]} />
        <Cloud count={8} radius={20} />
        <TrackballControls />
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 540px;
  background-color: black;
`;
