import React from "react";
import styled from "styled-components";
import { themeVal } from "@devseed-ui/theme-provider";
import { Accordion } from "@devseed-ui/accordion";

import Layer from "./Layer";

const LayerBar = styled.section`
  background-color: ${themeVal("color.mist")};
  position: relative;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  width: 20rem;
  height: 100vh;
  overflow: hidden;
`;

const LayerContainer = styled.article`
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const sampleLayers = [
  {
    name: "Layer 1",
    info: "insert interesting facts about layer 1",
    settings: <span>some layer 1 settings</span>
  },
  {
    name: "Layer 2",
    info: "insert interesting facts about layer 2",
    settings: <span>some layer 2 settings</span>
  }
];

export default function Layers() {
  return (
    <LayerBar>
      <LayerContainer>
        <Accordion>
          {({ checkExpanded, setExpanded }) => (
            <ul>
              {sampleLayers.map((layer, index) => (
                <li key={layer.name}>
                  <Layer
                    name={layer.name}
                    info={layer.info}
                    settings={layer.settings}
                    isExpanded={checkExpanded(index)}
                    setExpanded={v => setExpanded(index, v)}
                  />
                </li>
              ))}
            </ul>
          )}
        </Accordion>
      </LayerContainer>
    </LayerBar>
  );
}
