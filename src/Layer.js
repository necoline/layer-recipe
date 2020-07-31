import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Toolbar, ToolbarIconButton } from "@devseed-ui/toolbar";
import { glsp, truncated, themeVal } from "@devseed-ui/theme-provider";
import { AccordionFold } from "@devseed-ui/accordion";

import { Heading } from "@devseed-ui/typography";

const LayerHeader = styled.header`
  position: relative;
  z-index: 2;
  display: grid;
  grid-auto-columns: 1fr min-content;
  padding: ${glsp(0.25, 0.5)};
  grid-gap: ${glsp(0.5)};
  background-color: ${themeVal("color.surface")};
  box-shadow: inset 0 -${themeVal("layout.border")} 0 0 ${themeVal("color.shadow")};
`;

const LayerHeadline = styled.div`
  grid-row: 1;
  min-width: 0px;
`;

const LayerTitle = styled(Heading).attrs({ size: "small" })`
  ${truncated()};
`;

const LayerHeadToolbar = styled(Toolbar)`
  grid-row: 1;
  align-items: center;
`;

const LayerContent = styled.section`
  background-color: ${themeVal("color.mist")};
  text-align: center;
`;

const ACCORDION_OPTIONS = {
  SETTINGS: "SETTINGS",
  INFO: "INFO"
};

export default function Layer({
  name,
  info,
  settings,
  isExpanded,
  setExpanded
}) {
  const [isLayerVisible, toggleLayerVisibility] = useState(false);
  const [accordionFold, setAccordionFold] = useState();

  return (
    <AccordionFold
      isFoldExpanded={isExpanded}
      setFoldExpanded={setExpanded}
      renderHeader={({ isFoldExpanded, setFoldExpanded }) => (
        <LayerHeader>
          <LayerHeadline>
            <LayerTitle>{name}</LayerTitle>
          </LayerHeadline>
          <LayerHeadToolbar size="small">
            <ToolbarIconButton
              title="Remove layer"
              useIcon="trash-bin"
              onClick={() => {}}
            >
              Remove
            </ToolbarIconButton>
            <ToolbarIconButton
              title="Learn about this layer"
              useIcon="circle-information"
              active={
                isFoldExpanded && accordionFold === ACCORDION_OPTIONS.INFO
              }
              onClick={() => {
                setFoldExpanded(
                  !(isFoldExpanded && accordionFold === ACCORDION_OPTIONS.INFO)
                );
                setAccordionFold(ACCORDION_OPTIONS.INFO);
              }}
            >
              Info
            </ToolbarIconButton>
            <ToolbarIconButton
              title="View layer settings"
              useIcon="sliders-horizontal"
              active={
                isFoldExpanded && accordionFold === ACCORDION_OPTIONS.SETTINGS
              }
              onClick={() => {
                setFoldExpanded(
                  !(
                    isFoldExpanded &&
                    accordionFold === ACCORDION_OPTIONS.SETTINGS
                  )
                );
                setAccordionFold(ACCORDION_OPTIONS.SETTINGS);
              }}
            >
              Settings
            </ToolbarIconButton>
            <ToolbarIconButton
              title="Toggle layer on/off"
              useIcon={isLayerVisible ? "eye" : "eye-disabled"}
              onClick={() => toggleLayerVisibility(!isLayerVisible)}
            >
              Visibility On
            </ToolbarIconButton>
          </LayerHeadToolbar>
        </LayerHeader>
      )}
      renderBody={() => {
        const AccordionFoldContent = {
          SETTINGS: settings,
          INFO: info
        };
        return (
          <LayerContent>{AccordionFoldContent[accordionFold]}</LayerContent>
        );
      }}
    />
  );
}

Layer.propTypes = {
  name: PropTypes.string,
  info: PropTypes.node,
  settings: PropTypes.node,
  isExpanded: PropTypes.bool,
  setExpanded: PropTypes.func
};
