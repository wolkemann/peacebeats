import * as Tone from "tone";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import TonePad from "./TonePad";
import Slider from "../../Slider/Slider";

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

const firstLineColor = "rgb(97, 251, 255)";
const secondLineColor = "rgb(204, 0, 204)";
const thirdLineColor = "rgb(0, 255, 0)";

// export const SceneContext = createContext(synth);

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

          <TonePad
            position={[-3, 1, 0]}
            color={firstLineColor}
            tone={synth}
            note={"C5"}
          />
          <TonePad
            position={[-2, 1, 0]}
            color={firstLineColor}
            tone={synth}
            note={"D5"}
          />
          <TonePad
            position={[-1, 1, 0]}
            color={firstLineColor}
            tone={synth}
            note={"E5"}
          />
          <TonePad
            position={[0, 1, 0]}
            color={firstLineColor}
            tone={synth}
            note={"F5"}
          />
          <TonePad
            position={[1, 1, 0]}
            color={firstLineColor}
            tone={synth}
            note={"G5"}
          />
          <TonePad
            position={[2, 1, 0]}
            color={firstLineColor}
            tone={synth}
            note={"A5"}
          />
          <TonePad
            position={[3, 1, 0]}
            color={firstLineColor}
            tone={synth}
            note={"B5"}
          />

          <TonePad
            position={[-3, -0.5, 0]}
            color={secondLineColor}
            tone={synth}
            note={"C4"}
          />
          <TonePad
            position={[-2, -0.5, 0]}
            color={secondLineColor}
            tone={synth}
            note={"D4"}
          />
          <TonePad
            position={[-1, -0.5, 0]}
            color={secondLineColor}
            tone={synth}
            note={"E4"}
          />
          <TonePad
            position={[0, -0.5, 0]}
            color={secondLineColor}
            tone={synth}
            note={"F4"}
          />
          <TonePad
            position={[1, -0.5, 0]}
            color={secondLineColor}
            tone={synth}
            note={"G4"}
          />
          <TonePad
            position={[2, -0.5, 0]}
            color={secondLineColor}
            tone={synth}
            note={"A4"}
          />
          <TonePad
            position={[3, -0.5, 0]}
            color={secondLineColor}
            tone={synth}
            note={"B4"}
          />

          <TonePad
            position={[-3, -1.8, 0]}
            color={thirdLineColor}
            tone={synth}
            note={"C3"}
          />
          <TonePad
            position={[-2, -1.8, 0]}
            color={thirdLineColor}
            tone={synth}
            note={"D3"}
          />
          <TonePad
            position={[-1, -1.8, 0]}
            color={thirdLineColor}
            tone={synth}
            note={"E3"}
          />
          <TonePad
            position={[0, -1.8, 0]}
            color={thirdLineColor}
            tone={synth}
            note={"F3"}
          />
          <TonePad
            position={[1, -1.8, 0]}
            color={thirdLineColor}
            tone={synth}
            note={"G3"}
          />
          <TonePad
            position={[2, -1.8, 0]}
            color={thirdLineColor}
            tone={synth}
            note={"A3"}
          />
          <TonePad
            position={[3, -1.8, 0]}
            color={thirdLineColor}
            tone={synth}
            note={"B3"}
          />

          <TonePad
            position={[-3, -3, 0]}
            color={"pink"}
            tone={synth}
            note={"C2"}
          />
          <TonePad
            position={[-2, -3, 0]}
            color={"pink"}
            tone={synth}
            note={"D2"}
          />
          <TonePad
            position={[-1, -3, 0]}
            color={"pink"}
            tone={synth}
            note={"E2"}
          />
          <TonePad
            position={[0, -3, 0]}
            color={"pink"}
            tone={synth}
            note={"F2"}
          />
          <TonePad
            position={[1, -3, 0]}
            color={"pink"}
            tone={synth}
            note={"G2"}
          />
          <TonePad
            position={[2, -3, 0]}
            color={"pink"}
            tone={synth}
            note={"A2"}
          />
          <TonePad
            position={[3, -3, 0]}
            color={"pink"}
            tone={synth}
            note={"B2"}
          />
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
