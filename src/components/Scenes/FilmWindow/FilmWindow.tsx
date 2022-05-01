import * as Tone from "tone";
import { Canvas } from "@react-three/fiber";
import { MotionCanvas } from "framer-motion-3d";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

import TonePad from "./TonePad";
import Slider from "../../Slider/Slider";

//create a synth and connect it to the main output (your speakers)
export const synth = new Tone.Synth().toDestination();

const firstLineColor = "rgb(97, 251, 255)";
const secondLineColor = "rgb(204, 0, 204)";
const thirdLineColor = "rgb(0, 255, 0)";

export default function FilmWindow() {
  return (
    <>
      <FilterWrapper>
        <Slider id="filter" labelName="Filter 1" />
        <Slider id="filter" labelName="Filter 1" />
        <Slider id="filter" labelName="Filter 1" />
      </FilterWrapper>
      <PadWrapper>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="pink" position={[35, 30, 15]} />

          <TonePad position={[-3, 1, 0]} color={firstLineColor} note={"C5"} />
          <TonePad position={[-2, 1, 0]} color={firstLineColor} note={"D5"} />
          <TonePad position={[-1, 1, 0]} color={firstLineColor} note={"E5"} />
          <TonePad position={[0, 1, 0]} color={firstLineColor} note={"F5"} />
          <TonePad position={[1, 1, 0]} color={firstLineColor} note={"G5"} />
          <TonePad position={[2, 1, 0]} color={firstLineColor} note={"A5"} />
          <TonePad position={[3, 1, 0]} color={firstLineColor} note={"B5"} />

          <TonePad
            position={[-3, -0.5, 0]}
            color={secondLineColor}
            note={"C4"}
          />
          <TonePad
            position={[-2, -0.5, 0]}
            color={secondLineColor}
            note={"D4"}
          />
          <TonePad
            position={[-1, -0.5, 0]}
            color={secondLineColor}
            note={"E4"}
          />
          <TonePad
            position={[0, -0.5, 0]}
            color={secondLineColor}
            note={"F4"}
          />
          <TonePad
            position={[1, -0.5, 0]}
            color={secondLineColor}
            note={"G4"}
          />
          <TonePad
            position={[2, -0.5, 0]}
            color={secondLineColor}
            note={"A4"}
          />
          <TonePad
            position={[3, -0.5, 0]}
            color={secondLineColor}
            note={"B4"}
          />

          <TonePad
            position={[-3, -1.8, 0]}
            color={thirdLineColor}
            note={"C3"}
          />
          <TonePad
            position={[-2, -1.8, 0]}
            color={thirdLineColor}
            note={"D3"}
          />
          <TonePad
            position={[-1, -1.8, 0]}
            color={thirdLineColor}
            note={"E3"}
          />
          <TonePad position={[0, -1.8, 0]} color={thirdLineColor} note={"F3"} />
          <TonePad position={[1, -1.8, 0]} color={thirdLineColor} note={"G3"} />
          <TonePad position={[2, -1.8, 0]} color={thirdLineColor} note={"A3"} />
          <TonePad position={[3, -1.8, 0]} color={thirdLineColor} note={"B3"} />

          <TonePad position={[-3, -3, 0]} color={"pink"} note={"C2"} />
          <TonePad position={[-2, -3, 0]} color={"pink"} note={"D2"} />
          <TonePad position={[-1, -3, 0]} color={"pink"} note={"E2"} />
          <TonePad position={[0, -3, 0]} color={"pink"} note={"F2"} />
          <TonePad position={[1, -3, 0]} color={"pink"} note={"G2"} />
          <TonePad position={[2, -3, 0]} color={"pink"} note={"A2"} />
          <TonePad position={[3, -3, 0]} color={"pink"} note={"B2"} />
        </Canvas>
      </PadWrapper>
    </>
  );
}

const FilterWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: white;
  margin: 1rem;
  gap: 0.5rem 1rem;
`;

const PadWrapper = styled.div`
  height: 360px;
`;
